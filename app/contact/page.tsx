import { FadeIn } from '@/components/Animations';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import AuditForm from '@/components/AuditForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Sims Investment Management Services, LLC. Located in Paris, Texas. Call, email, or send us a message.',
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Ready to grow your business? Reach out and we will get back to you within 24 hours.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <FadeIn>
            <div className="space-y-8">
              <div className="glass-card rounded-2xl p-8">
                <h2 className="text-xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Our Location</p>
                      <p className="text-sm text-slate-400">
                        Sims Investment Management Services, LLC
                        <br />
                        Paris, Texas 75460
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Email Us</p>
                      <a href="mailto:robert@simsinvestments777.com" className="text-sm text-teal-400 hover:text-teal-300 transition-colors">
                        robert@simsinvestments777.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Call Us</p>
                      <a href="tel:+19034445555" className="text-sm text-teal-400 hover:text-teal-300 transition-colors">
                        (903) 444-5555
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Business Hours</p>
                      <p className="text-sm text-slate-400">
                        Monday - Friday: 9:00 AM - 6:00 PM CST
                        <br />
                        Saturday: By appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="glass-card rounded-2xl overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106499.74174600715!2d-95.60772635!3d33.6609348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c4d2a2b2b2b2b%3A0x2b2b2b2b2b2b2b!2sParis%2C%20TX%2075460!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Paris, Texas"
                />
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.2}>
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-xl font-bold text-white mb-6">Send Us a Message</h2>
              <AuditForm source="contact-page" />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
