import SectionHeading from '@/components/common/SectionHeading';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { contactApi } from '@/services/api';

type CountryOption = {
  name: string;
  cca2: string;
  dialCode: string;
  flag: string;
};

const FALLBACK_COUNTRIES: CountryOption[] = [
  { name: 'India', cca2: 'IN', dialCode: '+91', flag: '🇮🇳' },
  { name: 'United States', cca2: 'US', dialCode: '+1', flag: '🇺🇸' },
  { name: 'United Kingdom', cca2: 'GB', dialCode: '+44', flag: '🇬🇧' },
  { name: 'United Arab Emirates', cca2: 'AE', dialCode: '+971', flag: '🇦🇪' },
  { name: 'Singapore', cca2: 'SG', dialCode: '+65', flag: '🇸🇬' },
];

const CAPTCHA_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    sales: 'Sales',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitErrorMessage, setSubmitErrorMessage] = useState('');
  const countryDropdownRef = useRef<HTMLDivElement | null>(null);
  const [captchaText, setCaptchaText] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaImage, setCaptchaImage] = useState('');
  const [captchaError, setCaptchaError] = useState('');
  const [countryOptions, setCountryOptions] = useState<CountryOption[]>(FALLBACK_COUNTRIES);
  const [countryCode, setCountryCode] = useState('+91');
  const [countryQuery, setCountryQuery] = useState('');
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const selectedCountry = useMemo(
    () =>
      countryOptions.find((country) => country.dialCode === countryCode) ??
      FALLBACK_COUNTRIES[0],
    [countryOptions, countryCode],
  );
  const filteredCountryOptions = useMemo(() => {
    const q = countryQuery.trim().toLowerCase();
    if (!q) return countryOptions;
    return countryOptions.filter((country) =>
      `${country.name} ${country.cca2} ${country.dialCode}`
        .toLowerCase()
        .includes(q),
    );
  }, [countryOptions, countryQuery]);

  const setSelectedCountry = useCallback((country: CountryOption) => {
    setCountryCode(country.dialCode);
    setCountryQuery('');
    setIsCountryOpen(false);
  }, []);

  const getFlagEmoji = (countryCode2: string) =>
    countryCode2
      .toUpperCase()
      .replace(/./g, (char) =>
        String.fromCodePoint(127397 + char.charCodeAt(0)),
      );

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

  useEffect(() => {
    let active = true;
    fetch('https://restcountries.com/v3.1/all?fields=name,idd,cca2')
      .then((res) => res.json())
      .then((data: any[]) => {
        if (!active || !Array.isArray(data)) return;
        const parsed: CountryOption[] = data
          .map((item) => {
            const root = item?.idd?.root ?? '';
            const suffix = Array.isArray(item?.idd?.suffixes)
              ? item.idd.suffixes[0]
              : '';
            const dialCode = `${root}${suffix}`.trim();
            const cca2 = String(item?.cca2 ?? '').toUpperCase();
            if (!dialCode.startsWith('+') || cca2.length !== 2) return null;
            return {
              name: String(item?.name?.common ?? ''),
              cca2,
              dialCode,
              flag: getFlagEmoji(cca2),
            } as CountryOption;
          })
          .filter((item): item is CountryOption => Boolean(item))
          .sort((a, b) => a.name.localeCompare(b.name));

        if (parsed.length) {
          setCountryOptions(parsed);
          const india = parsed.find((c) => c.cca2 === 'IN');
          const next = india ?? parsed[0];
          setCountryCode(next.dialCode);
          setCountryQuery('');
        }
      })
      .catch(() => {
        setCountryOptions(FALLBACK_COUNTRIES);
        setCountryCode('+91');
        setCountryQuery('');
      });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!isCountryOpen) return;

    const closeIfOutside = (target: EventTarget | null) => {
      const el = countryDropdownRef.current;
      if (!el) return;
      if (target instanceof Node && el.contains(target)) return;
      setIsCountryOpen(false);
    };

    const onMouseDown = (e: MouseEvent) => closeIfOutside(e.target);
    const onFocusIn = (e: FocusEvent) => closeIfOutside(e.target);
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Tab') {
        setIsCountryOpen(false);
      }
    };

    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('focusin', onFocusIn);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('focusin', onFocusIn);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isCountryOpen]);

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || '').trim());

  const getPhoneDigits = (phone: string) => String(phone || '').replace(/\D/g, '');
  const isValidGlobalPhone = (phone: string) => {
    const digits = getPhoneDigits(phone);
    return digits.length === 0 || (digits.length >= 7 && digits.length <= 15);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.message) {
      setSubmitStatus('error');
      setSubmitErrorMessage('Please fill in all required fields correctly.');
      return;
    }

    // Validate email format (strict client-side check for better UX)
    if (!isValidEmail(formData.email)) {
      setSubmitStatus('error');
      setSubmitErrorMessage('Please enter a valid email address.');
      return;
    }

    // Validate phone format (global digits length, allow empty)
    if (!isValidGlobalPhone(formData.phone)) {
      setSubmitStatus('error');
      setSubmitErrorMessage('Please enter a valid phone number.');
      return;
    }

    // Validate message length
    if (formData.message.length > 500) {
      alert('Message must be 500 characters or less');
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
      await contactApi.submit({
        fullName: formData.fullName,
        email: formData.email,
        phone: `${countryCode} ${formData.phone}`.trim(),
        sales: formData.sales,
        message: formData.message,
      });

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        sales: 'Sales',
        message: ''
      });
      generateCaptcha();
    } catch (error: any) {
      setSubmitStatus('error');
      setSubmitErrorMessage(
        error?.message || 'Unable to send message right now. Please try again later.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-50 py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-[110px]">
        <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left Side - Text */}
          <div>
            <div className="mb-4 inline-block sm:mb-6">
            <SectionHeading
                badgeText={"Business Enquiries"}
                showWatermark={false}
                className="mb-2 sm:mb-3"
              />
            </div>
            <h2 className="mb-4 text-2xl font-bold leading-snug text-gray-900 sm:text-3xl lg:text-4xl">
              Have questions or need assistance from RRIL?<br />
              Get in touch with us
            </h2>
          </div>

          {/* Right Side - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4" data-readdy-form id="contact-form">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 sm:px-4 sm:py-3"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => {
                    const next = e.target.value.replace(/\s/g, '');
                    setFormData({ ...formData, email: next });
                  }}
                  onBlur={() => {
                    if (formData.email && !isValidEmail(formData.email)) {
                      setSubmitStatus('error');
                      setSubmitErrorMessage('Please enter a valid email address.');
                    }
                  }}
                  className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 sm:px-4 sm:py-3"
                  autoComplete="email"
                  inputMode="email"
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-[minmax(0,20%)_minmax(0,40%)_minmax(0,40%)] md:gap-4">
                <div className="relative" ref={countryDropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsCountryOpen((prev) => !prev)}
                    className="flex h-[42px] w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 sm:h-[48px] sm:px-4"
                    aria-label="Select country code"
                    aria-expanded={isCountryOpen}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-base">{selectedCountry.flag}</span>
                      <span className="text-gray-600">{selectedCountry.dialCode}</span>
                    </span>
                    <i className={`ri-arrow-${isCountryOpen ? 'up' : 'down'}-s-line text-base text-gray-500`} />
                  </button>
                  {isCountryOpen && (
                    <div className="absolute z-20 mt-1 max-h-72 w-[340px] max-w-[92vw] overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg">
                      <div className="border-b border-gray-200 p-2">
                        <input
                          type="text"
                          value={countryQuery}
                          onChange={(e) => setCountryQuery(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && filteredCountryOptions[0]) {
                              e.preventDefault();
                              setSelectedCountry(filteredCountryOptions[0]);
                            }
                          }}
                          autoFocus
                          placeholder="Search country or code"
                          className="w-full rounded-md border border-gray-300 px-2.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>
                      <div className="max-h-56 overflow-y-auto">
                      {filteredCountryOptions.length ? (
                        filteredCountryOptions.map((country) => (
                          <button
                            key={`${country.cca2}-${country.dialCode}`}
                            type="button"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => setSelectedCountry(country)}
                            className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-gray-800 transition-colors hover:bg-gray-100 ${
                              country.dialCode === countryCode ? 'bg-gray-50' : ''
                            }`}
                          >
                            <span>{country.flag}</span>
                            <span className="min-w-0 flex-1 truncate">{country.name}</span>
                            <span className="text-gray-500">{country.dialCode}</span>
                          </button>
                        ))
                      ) : (
                        <div className="px-3 py-2 text-sm text-gray-500">
                          No countries found.
                        </div>
                      )}
                      </div>
                    </div>
                  )}
                </div>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => {
                    const raw = e.target.value;
                    // allow digits + basic separators for user typing; store filtered value
                    const filtered = raw.replace(/[^\d\s()-]/g, '');
                    setFormData({ ...formData, phone: filtered });
                  }}
                  onBlur={() => {
                    if (!isValidGlobalPhone(formData.phone)) {
                      setSubmitStatus('error');
                      setSubmitErrorMessage('Please enter a valid phone number.');
                    }
                  }}
                  className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 sm:px-4 sm:py-3"
                  inputMode="tel"
                  autoComplete="tel"
                />

                <select
                  name="sales"
                  value={formData.sales}
                  onChange={(e) => setFormData({ ...formData, sales: e.target.value })}
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 sm:px-4 sm:py-3"
                >
                  <option>Sales</option>
                  <option>Support</option>
                  <option>General Inquiry</option>
                  <option>Investor Relations</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                maxLength={500}
                rows={5}
                className="w-full resize-none rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 sm:px-4 sm:py-3"
                required
              ></textarea>
              <div className="text-xs text-gray-500 text-right">
                {formData.message.length}/500 characters
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

                {/* Mobile: move submit to next row, right aligned; sm+: keep inline */}
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
                  <p className="text-sm text-green-800">Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-3 rounded-md border border-red-200 bg-red-50 p-3 sm:mt-4 sm:p-4">
                  <p className="text-sm text-red-800">
                    {submitErrorMessage || 'Please fill in all required fields correctly.'}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
