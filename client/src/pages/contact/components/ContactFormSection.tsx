import SectionHeading from '@/components/common/SectionHeading';
import { useState } from 'react';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    // Validate message length
    if (formData.message.length > 500) {
      alert('Message must be 500 characters or less');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams();
      formBody.append('fullName', formData.fullName);
      formBody.append('email', formData.email);
      formBody.append('phone', formData.phone);
      formBody.append('sales', formData.sales);
      formBody.append('message', formData.message);

      const response = await fetch('https://readdy.ai/api/form/d5gdtcb48noljcu3ph20', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          sales: 'Sales',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
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
              Have questions or need assistance from <span className="italic">RRIL</span>?
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
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 sm:px-4 sm:py-3"
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
                <div className="flex gap-2">
                  <select className="rounded-md border border-gray-300 bg-white px-2 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 sm:px-3 sm:py-3" aria-label="Country code">
                    <option>🇮🇳</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="min-w-0 flex-1 rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 sm:px-4 sm:py-3"
                  />
                </div>
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

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md bg-blue-600 px-6 py-2.5 font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:px-8 sm:py-3 whitespace-nowrap"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>

              {submitStatus === 'success' && (
                <div className="mt-3 rounded-md border border-green-200 bg-green-50 p-3 sm:mt-4 sm:p-4">
                  <p className="text-sm text-green-800">Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-3 rounded-md border border-red-200 bg-red-50 p-3 sm:mt-4 sm:p-4">
                  <p className="text-sm text-red-800">Please fill in all required fields correctly.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
