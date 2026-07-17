import { motion } from "framer-motion"
import {
  HiLocationMarker,
  HiPhone,
  HiMail,
  HiClock,
  HiShieldCheck,
} from "react-icons/hi"
import SectionTitle from "./SectionTitle"
import Button from "./Button"

const contactInfo = [
  {
    icon: HiLocationMarker,
    label: "Address",
    value: "245 Park Avenue, Suite 200\nNew York, NY 10017",
  },
  {
    icon: HiPhone,
    label: "Phone",
    value: "+1 (212) 555-0198",
    href: "tel:+12125550198",
  },
  {
    icon: HiMail,
    label: "Email",
    value: "hello@whitebridgedental.com",
    href: "mailto:hello@whitebridgedental.com",
  },
]

const hours = [
  { day: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
  { day: "Saturday", time: "9:00 AM – 3:00 PM" },
  { day: "Sunday", time: "Closed" },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-beige">
      <div className="container-main">
        <SectionTitle
          subtitle="Contact Us"
          title="Get in Touch"
          description="Ready to transform your smile? Reach out to us and schedule your consultation today."
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-orange" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider font-medium mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-purple font-medium text-sm md:text-base hover:text-orange transition-colors whitespace-pre-line"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-purple font-medium text-sm md:text-base whitespace-pre-line">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-border">
              <div className="flex items-center gap-3 mb-5">
                <HiClock className="w-5 h-5 text-orange" />
                <span className="font-serif text-lg text-purple font-semibold">
                  Office Hours
                </span>
              </div>
              <div className="space-y-3">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="text-muted">{h.day}</span>
                    <span className="text-purple font-medium">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex items-center gap-3 mb-4">
                <HiShieldCheck className="w-5 h-5 text-orange" />
                <span className="text-sm text-muted">
                  Emergency appointments available. Call us for immediate
                  assistance.
                </span>
              </div>
              <Button href="tel:+12125550198" variant="secondary">
                <HiPhone className="w-4 h-4" />
                Emergency: +1 (212) 555-0198
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg border border-border h-64 md:h-80">
              <iframe
                title="Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.966309591936!2d-73.9749!3d40.7549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af5b8e5e6b%3A0x8b4e6b5e6b5e6b5e!2s245%20Park%20Ave%2C%20New%20York%2C%20NY%2010017!5e0!3m2!1sen!2sus!4v1"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-border shadow-sm">
              <h3 className="font-serif text-xl text-purple mb-2">
                Book Your Visit
              </h3>
              <p className="text-muted text-sm mb-5">
                Fill out our quick form and we&apos;ll get back to you within
                24 hours to confirm your appointment.
              </p>
              <Button href="#contact">Book an Appointment</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
