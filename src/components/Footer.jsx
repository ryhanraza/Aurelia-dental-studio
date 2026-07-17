import {
  HiMail,
  HiPhone,
  HiLocationMarker,
} from "react-icons/hi"
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"

const footerLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Treatments", href: "#treatments" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-purple text-white">
      <div className="container-main py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <a href="#hero" className="font-serif text-2xl font-bold text-white">
              WhiteBridge<span className="text-orange">.</span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed mt-4 max-w-md">
              Premium dental care in a warm, comfortable environment.
              We combine advanced technology with compassionate care to
              give you the smile you deserve.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-orange hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-orange transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+12125550198"
                  className="text-white/60 text-sm hover:text-orange transition-colors duration-200 flex items-center gap-2"
                >
                  <HiPhone className="w-3.5 h-3.5" />
                  +1 (212) 555-0198
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@whitebridgedental.com"
                  className="text-white/60 text-sm hover:text-orange transition-colors duration-200 flex items-center gap-2"
                >
                  <HiMail className="w-3.5 h-3.5" />
                  hello@whitebridgedental.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <HiLocationMarker className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                245 Park Avenue, Suite 200
                <br />
                New York, NY 10017
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-main py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {year} WhiteBridge Dental. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-white/40 text-xs hover:text-orange transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/40 text-xs hover:text-orange transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
