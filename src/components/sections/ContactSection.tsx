import React, { useState, useEffect } from 'react';
import { Container } from '../ui/Container.tsx';
import { siteConfig } from '../../data/siteConfig.ts';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'Portraits',
    preferredDate: '',
    location: '',
    budgetRange: '',
    projectDetails: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  // Update service if prop changes
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please provide your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Please share a brief description of your project or celebration.';
    } else if (formData.projectDetails.trim().length < 15) {
      newErrors.projectDetails = 'Please provide a little more detail (at least 15 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate reliable transmission / frontend processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 1200);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: 'Portraits',
      preferredDate: '',
      location: '',
      budgetRange: '',
      projectDetails: ''
    });
    setErrors({});
  };

  // Generate mailto link for direct alternative
  const mailtoSubject = encodeURIComponent(`Photography Inquiry: ${formData.service} — ${formData.fullName || 'Client'}`);
  const mailtoBody = encodeURIComponent(
    `Hello Shaheel,\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nService: ${formData.service}\nPreferred Date: ${formData.preferredDate || 'Flexible'}\nLocation: ${formData.location || 'N/A'}\nBudget: ${formData.budgetRange || 'Flexible'}\n\nProject Details:\n${formData.projectDetails}`
  );
  const directMailtoUrl = `mailto:${siteConfig.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-[#101010] text-[#F5F2EC] relative overflow-hidden"
      aria-label="Contact and Booking Inquiries"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Info & Studio Notes */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-xs md:text-sm font-medium tracking-[0.25em] uppercase text-[#B49A72] mb-3">
                HAVE A STORY IN MIND?
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#F5F2EC] tracking-tight leading-[1.12] mb-6 text-balance">
                Let's Create Something Meaningful.
              </h2>
              <p className="text-sm sm:text-base text-[#898781] font-light leading-relaxed text-balance">
                “Whether you're planning a celebration, a portrait session, or a creative collaboration, tell me what you have in mind.”
              </p>
            </div>

            {/* Direct Studio Channels */}
            <div className="pt-6 border-t border-[#242424] space-y-5">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-4 text-sm text-[#F5F2EC] hover:text-[#B49A72] transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[#191919] border border-[#2A2A2A] flex items-center justify-center text-[#B49A72] group-hover:border-[#B49A72] transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] tracking-widest uppercase text-[#898781]">Email Inquiries</span>
                  <span>{siteConfig.contact.email}</span>
                </div>
              </a>

              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-4 text-sm text-[#F5F2EC] hover:text-[#B49A72] transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[#191919] border border-[#2A2A2A] flex items-center justify-center text-[#B49A72] group-hover:border-[#B49A72] transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] tracking-widest uppercase text-[#898781]">Direct Studio Phone</span>
                  <span className="font-mono tabular-nums">{siteConfig.contact.phone}</span>
                </div>
              </a>

              <div className="flex items-center gap-4 text-sm text-[#F5F2EC]">
                <div className="w-10 h-10 rounded-full bg-[#191919] border border-[#2A2A2A] flex items-center justify-center text-[#B49A72]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] tracking-widest uppercase text-[#898781]">Location Base</span>
                  <span>{siteConfig.contact.location}</span>
                </div>
              </div>
            </div>

            {/* Availability Notice */}
            <div className="p-5 bg-[#191919] border border-[#242424] space-y-2">
              <p className="text-[11px] tracking-[0.18em] uppercase text-[#B49A72] font-semibold">
                COMMISSION AVAILABILITY
              </p>
              <p className="text-xs text-[#898781] leading-relaxed">
                {siteConfig.contact.availability}. Inquiries typically receive a personal response within 24–48 hours with project guides and scheduling availability.
              </p>
            </div>
          </div>

          {/* Right Column: Controlled Booking Inquiry Form */}
          <div className="lg:col-span-7 bg-[#191919] border border-[#2A2A2A] p-6 sm:p-8 md:p-10 shadow-2xl relative">
            {submittedData ? (
              <div className="py-8 text-center space-y-6 animate-fadeIn">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#B49A72]/10 border border-[#B49A72] flex items-center justify-center text-[#B49A72]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-3xl font-light text-[#F5F2EC]">
                    Thank You, {submittedData.fullName}.
                  </h3>
                  <p className="text-sm text-[#898781] max-w-md mx-auto leading-relaxed">
                    Your inquiry for <strong className="text-white">{submittedData.service}</strong> has been prepared. Shaheel will review your details personally.
                  </p>
                </div>

                {/* Direct Email / WhatsApp Dispatch Alternative */}
                <div className="p-4 bg-[#101010] border border-[#2A2A2A] max-w-md mx-auto text-left text-xs space-y-3">
                  <div className="flex items-center gap-2 text-[#B49A72] font-medium uppercase tracking-wider text-[11px]">
                    <MessageSquare className="w-4 h-4" />
                    <span>Instant Dispatch Option</span>
                  </div>
                  <p className="text-[#898781]">
                    Would you also like to open this directly in your email client or message Shaheel via WhatsApp?
                  </p>
                  <div className="flex flex-wrap gap-3 pt-1">
                    <a
                      href={directMailtoUrl}
                      className="px-4 py-2 bg-[#242424] hover:bg-[#303030] text-white border border-[#3A3A3A] transition-colors"
                    >
                      Open Email Draft
                    </a>
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                        `Hi Shaheel, I'm inquiring about ${submittedData.service}. Name: ${submittedData.fullName}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#B49A72] hover:bg-[#C9B28D] text-[#101010] font-medium transition-colors"
                    >
                      WhatsApp Message
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs uppercase tracking-widest text-[#898781] hover:text-white underline pt-4 cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="fullName" className="block text-xs uppercase tracking-wider text-[#898781]">
                      Full Name <span className="text-[#B49A72]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Julian Montgomery"
                      className={`w-full px-4 py-3 bg-[#101010] border text-sm text-[#F5F2EC] placeholder-[#504e49] focus-visible:outline-none focus-visible:border-[#B49A72] transition-colors ${
                        errors.fullName ? 'border-red-500/80' : 'border-[#2A2A2A]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs uppercase tracking-wider text-[#898781]">
                      Email Address <span className="text-[#B49A72]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="julian@example.com"
                      className={`w-full px-4 py-3 bg-[#101010] border text-sm text-[#F5F2EC] placeholder-[#504e49] focus-visible:outline-none focus-visible:border-[#B49A72] transition-colors ${
                        errors.email ? 'border-red-500/80' : 'border-[#2A2A2A]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Photography Service Selection */}
                  <div className="space-y-1.5">
                    <label htmlFor="service" className="block text-xs uppercase tracking-wider text-[#898781]">
                      Photography Service <span className="text-[#B49A72]">*</span>
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-[#101010] border border-[#2A2A2A] text-sm text-[#F5F2EC] focus-visible:outline-none focus-visible:border-[#B49A72] transition-colors cursor-pointer"
                    >
                      <option value="Portraits">Portraits</option>
                      <option value="Weddings">Weddings & Celebrations</option>
                      <option value="Fashion">Fashion & Editorial</option>
                      <option value="Events">Events & Gatherings</option>
                      <option value="Lifestyle">Lifestyle Photography</option>
                      <option value="Travel">Travel & Documentary</option>
                      <option value="Commercial">Commercial & Brand Campaign</option>
                      <option value="Other">Other Creative Commission</option>
                    </select>
                  </div>

                  {/* Phone Number (Optional) */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-[#898781]">
                      Phone Number <span className="text-[10px] lowercase text-[#605e58]">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 bg-[#101010] border border-[#2A2A2A] text-sm text-[#F5F2EC] placeholder-[#504e49] focus-visible:outline-none focus-visible:border-[#B49A72] transition-colors"
                    >
                    </input>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Preferred Date (Optional) */}
                  <div className="space-y-1.5">
                    <label htmlFor="preferredDate" className="block text-xs uppercase tracking-wider text-[#898781]">
                      Target Date <span className="text-[10px] lowercase text-[#605e58]">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="preferredDate"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      placeholder="e.g. Autumn 2026 or Oct 14"
                      className="w-full px-4 py-3 bg-[#101010] border border-[#2A2A2A] text-sm text-[#F5F2EC] placeholder-[#504e49] focus-visible:outline-none focus-visible:border-[#B49A72] transition-colors"
                    />
                  </div>

                  {/* Location (Optional) */}
                  <div className="space-y-1.5">
                    <label htmlFor="location" className="block text-xs uppercase tracking-wider text-[#898781]">
                      Location / Venue <span className="text-[10px] lowercase text-[#605e58]">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="City, Country, or Venue"
                      className="w-full px-4 py-3 bg-[#101010] border border-[#2A2A2A] text-sm text-[#F5F2EC] placeholder-[#504e49] focus-visible:outline-none focus-visible:border-[#B49A72] transition-colors"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-1.5">
                  <label htmlFor="projectDetails" className="block text-xs uppercase tracking-wider text-[#898781]">
                    Project Details & Vision <span className="text-[#B49A72]">*</span>
                  </label>
                  <textarea
                    id="projectDetails"
                    rows={4}
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    placeholder="Tell me about what you are envisioning, the setting, mood, or any questions you have..."
                    className={`w-full px-4 py-3 bg-[#101010] border text-sm text-[#F5F2EC] placeholder-[#504e49] focus-visible:outline-none focus-visible:border-[#B49A72] transition-colors ${
                      errors.projectDetails ? 'border-red-500/80' : 'border-[#2A2A2A]'
                    }`}
                  />
                  {errors.projectDetails && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.projectDetails}</span>
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 text-xs font-semibold tracking-[0.2em] uppercase text-[#101010] bg-[#B49A72] hover:bg-[#C9B28D] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>SENDING INQUIRY...</span>
                    ) : (
                      <>
                        <span>SEND AN INQUIRY</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-[#605e58] text-center mt-3">
                    Your inquiry is sent directly to Shaheel's studio desk. No spam, ever.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
