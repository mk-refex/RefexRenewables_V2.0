import SectionHeading from '@/components/common/SectionHeading';
import { useEmailValidation } from '@/hooks/useEmailValidation';
import { usePhoneValidation } from '@/hooks/usePhoneValidation';
import { contactApi } from '@/services/api';
import { useCallback, useEffect, useRef, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const CAPTCHA_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

const MIN_NAME_LEN = 2;
const MIN_MESSAGE_LEN = 15;
const SUBMIT_COOLDOWN_MS = 10_000;

/** E.164 for libphonenumber / API; react-phone-input-2 `value` is digits-only */
function digitsToE164(digitsValue: string): string {
  const d = String(digitsValue ?? '').replace(/\D/g, '');
  return d ? `+${d}` : '';
}

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    sales: '',
    message: '',
  });
  const [phoneDigits, setPhoneDigits] = useState('');

  const { error: emailError, setError: setEmailError, validate: validateEmail } =
    useEmailValidation({ required: true });
  const { error: phoneError, setError: setPhoneError, validate: validatePhone } =
    usePhoneValidation({ required: true });

  const [nameError, setNameError] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);
  const [salesError, setSalesError] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitErrorMessage, setSubmitErrorMessage] = useState('');

  const [captchaText, setCaptchaText] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaError, setCaptchaError] = useState('');
  const [captchaImage, setCaptchaImage] = useState('');

  const lastSubmitAtRef = useRef(0);

  const phoneE164 = digitsToE164(phoneDigits);

  const generateCaptcha = useCallback(() => {
    const text = Array.from({ length: 6 }, () =>
      CAPTCHA_CHARS[Math.floor(Math.random() * CAPTCHA_CHARS.length)],
    ).join('');
    setCaptchaText(text);
    setCaptchaInput('');
    setCaptchaError('');

    const canvas = document.createElement('canvas');
    canvas.width = 180;
    canvas.height = 56;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 5; i += 1) {
      ctx.strokeStyle = `rgba(22, 163, 74, ${0.15 + Math.random() * 0.25})`;
      ctx.lineWidth = 1 + Math.random() * 1.5;
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }

    for (let i = 0; i < text.length; i += 1) {
      const char = text[i];
      const x = 20 + i * 25 + Math.random() * 4;
      const y = 34 + Math.random() * 8;
      const angle = (Math.random() - 0.5) * 0.5;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.font = `bold ${24 + Math.floor(Math.random() * 2)}px Arial`;
      ctx.fillStyle = i % 2 === 0 ? '#1f2937' : '#16a34a';
      ctx.fillText(char, 0, 0);
      ctx.restore();
    }

    for (let i = 0; i < 30; i += 1) {
      ctx.fillStyle = 'rgba(75, 85, 99, 0.25)';
      ctx.beginPath();
      ctx.arc(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 1.5,
        0,
        Math.PI * 2,
      );
      ctx.fill();
    }

    setCaptchaImage(canvas.toDataURL('image/png'));
  }, []);

  useEffect(() => {
    generateCaptcha();
  }, [generateCaptcha]);

  const validateName = (value: string) => {
    const v = value.trim();
    if (v.length < MIN_NAME_LEN) {
      setNameError('Name must be at least 2 characters');
      return false;
    }
    setNameError(null);
    return true;
  };

  const validateMessage = (value: string) => {
    const v = value.trim();
    if (v.length < MIN_MESSAGE_LEN) {
      setMessageError(`Message must be at least ${MIN_MESSAGE_LEN} characters`);
      return false;
    }
    setMessageError(null);
    return true;
  };

  const validateSales = (value: string) => {
    if (!String(value ?? '').trim()) {
      setSalesError('Please select an enquiry type');
      return false;
    }
    setSalesError(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const now = Date.now();
    if (now - lastSubmitAtRef.current < SUBMIT_COOLDOWN_MS) {
      setSubmitStatus('error');
      setSubmitErrorMessage('Please wait before submitting again.');
      return;
    }

    const okName = validateName(formData.fullName);
    const okEmail = validateEmail(formData.email);
    const okPhone = validatePhone(phoneE164);
    const okSales = validateSales(formData.sales);
    const okMessage = validateMessage(formData.message);

    if (!okName || !okEmail || !okPhone || !okSales || !okMessage) {
      setSubmitStatus('error');
      setSubmitErrorMessage('');
      return;
    }

    if (formData.message.length > 500) {
      setMessageError('Message must be 500 characters or less');
      return;
    }

    if (captchaInput.trim().toUpperCase() !== captchaText) {
      setSubmitStatus('idle');
      generateCaptcha();
      setCaptchaError('Please enter the correct CAPTCHA.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitErrorMessage('');
    setCaptchaError('');

    try {
      const { duplicate } = await contactApi.checkEnquiry({
        email: formData.email.trim(),
        phone: phoneE164,
      });
      if (duplicate) {
        setSubmitStatus('error');
        setSubmitErrorMessage(
          'This enquiry was already submitted recently. Please try again later.',
        );
        return;
      }

      await contactApi.submit({
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: phoneE164,
        sales: formData.sales.trim(),
        message: formData.message.trim(),
      });

      lastSubmitAtRef.current = Date.now();
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        sales: '',
        message: '',
      });
      setPhoneDigits('');
      setEmailError(null);
      setPhoneError(null);
      setNameError(null);
      setMessageError(null);
      setSalesError(null);
      generateCaptcha();
    } catch (error: unknown) {
      setSubmitStatus('error');
      setSubmitErrorMessage(
        error instanceof Error
          ? error.message
          : 'Unable to send message right now. Please try again later.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-50 py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-[110px]">
        <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="mb-4 inline-block sm:mb-6">
              <SectionHeading
                badgeText={'Business Enquiries'}
                showWatermark={false}
                className="mb-2 sm:mb-3"
              />
            </div>
            <h2 className="mb-4 text-2xl font-bold leading-snug text-gray-900 sm:text-3xl lg:text-4xl">
              Have questions or need assistance from RRIL?
              <br />
              Get in touch with us
            </h2>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-3 sm:space-y-4"
              data-readdy-form
              id="contact-form"
              noValidate
            >
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (nameError) setNameError(null);
                    }}
                    onBlur={() => validateName(formData.fullName)}
                    className={`w-full rounded-md border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 sm:px-4 sm:py-3 ${
                      nameError ? 'border-red-400' : 'border-gray-300'
                    }`}
                    autoComplete="name"
                  />
                  {nameError ? (
                    <p className="mt-1 text-sm text-red-700">{nameError}</p>
                  ) : null}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => {
                      const next = e.target.value.replace(/\s/g, '');
                      setFormData({ ...formData, email: next });
                      if (emailError) setEmailError(null);
                    }}
                    onBlur={() => validateEmail(formData.email)}
                    className={`w-full rounded-md border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 sm:px-4 sm:py-3 ${
                      emailError ? 'border-red-400' : 'border-gray-300'
                    }`}
                    autoComplete="email"
                    inputMode="email"
                  />
                  {emailError ? (
                    <p className="mt-1 text-sm text-red-700">{emailError}</p>
                  ) : null}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
                <div className="contact-phone-input">
                  <PhoneInput
                    country="in"
                    preferredCountries={['in']}
                    value={phoneDigits}
                    onChange={(value) => {
                      setPhoneDigits(value);
                      if (phoneError) setPhoneError(null);
                    }}
                    onBlur={() => validatePhone(phoneE164)}
                    inputProps={{
                      name: 'phone',
                      required: true,
                      autoComplete: 'tel',
                      'aria-invalid': Boolean(phoneError),
                    }}
                    placeholder="Mobile number"
                    containerClass="w-full"
                    inputClass={`!w-full !h-[42px] sm:!h-[48px] !rounded-md !text-sm !pl-14 !border ${
                      phoneError ? '!border-red-400' : '!border-gray-300'
                    }`}
                    buttonClass={`!rounded-l-md !border ${
                      phoneError ? '!border-red-400' : '!border-gray-300'
                    }`}
                    dropdownClass="!text-sm"
                    enableSearch
                    disableSearchIcon
                  />
                  {phoneError ? (
                    <p className="mt-1 text-sm text-red-700">{phoneError}</p>
                  ) : null}
                </div>
                <div>
                  <select
                    name="sales"
                    value={formData.sales}
                    onChange={(e) => {
                      setFormData({ ...formData, sales: e.target.value });
                      if (salesError) setSalesError(null);
                    }}
                    onBlur={() => validateSales(formData.sales)}
                    className={`w-full rounded-md border bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 sm:px-4 sm:py-3 ${
                      salesError ? 'border-red-400' : 'border-gray-300'
                    }`}
                    required
                  >
                    <option value="">Select enquiry type</option>
                    <option value="Sales">Sales</option>
                    <option value="Support">Support</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Investor Relations">Investor Relations</option>
                  </select>
                  {salesError ? (
                    <p className="mt-1 text-sm text-red-700">{salesError}</p>
                  ) : null}
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your message (at least 15 characters)"
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (messageError) setMessageError(null);
                  }}
                  onBlur={() => validateMessage(formData.message)}
                  maxLength={500}
                  rows={5}
                  className={`w-full resize-none rounded-md border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 sm:px-4 sm:py-3 ${
                    messageError ? 'border-red-400' : 'border-gray-300'
                  }`}
                />
                <div className="mt-1 flex justify-between text-xs text-gray-500">
                  <span>Minimum {MIN_MESSAGE_LEN} characters</span>
                  <span>{formData.message.length}/500 characters</span>
                </div>
                {messageError ? (
                  <p className="mt-1 text-sm text-red-700">{messageError}</p>
                ) : null}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <img
                  src={captchaImage}
                  alt="Captcha"
                  className="h-11 w-[140px] shrink-0 rounded border border-gray-200 bg-gray-50 object-contain sm:h-12 sm:w-[170px]"
                />
                <button
                  type="button"
                  onClick={generateCaptcha}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-gray-300 text-gray-700 transition-colors hover:bg-gray-100 sm:h-12 sm:w-12"
                  aria-label="Refresh CAPTCHA"
                >
                  <i className="ri-refresh-line text-lg" />
                </button>
                <input
                  type="text"
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value)}
                  placeholder="Enter CAPTCHA"
                  className="min-w-0 flex-1 rounded-md border border-gray-300 px-3 py-2.5 text-sm uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-emerald-500 sm:px-4 sm:py-3"
                  required
                />

                <div className="w-full sm:w-auto sm:flex sm:items-center sm:justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="ml-auto block shrink-0 whitespace-nowrap rounded-md bg-blue-600 px-4 py-2.5 font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 sm:ml-0 sm:inline-flex sm:px-6 sm:py-3"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </div>
              <div>
                {captchaError ? (
                  <p className="mt-2 text-sm text-red-700">{captchaError}</p>
                ) : null}
              </div>

              {submitStatus === 'success' && (
                <div className="mt-3 rounded-md border border-green-200 bg-green-50 p-3 sm:mt-4 sm:p-4">
                  <p className="text-sm text-green-800">
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && submitErrorMessage ? (
                <div className="mt-3 rounded-md border border-red-200 bg-red-50 p-3 sm:mt-4 sm:p-4">
                  <p className="text-sm text-red-800">{submitErrorMessage}</p>
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
