import { motion } from "framer-motion"
import { HiOutlineBadgeCheck } from "react-icons/hi"
import Button from "./Button"

export default function FeatureSection() {
  return (
    <section className="py-20 md:py-28 bg-beige">
      <div className="container-main">
        <div className="relative rounded-2xl overflow-hidden min-h-[420px] md:min-h-[500px] flex items-end">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80"
            alt="Modern dental treatment room"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple/70 via-purple/30 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 p-6 md:p-10 lg:p-12 max-w-xl"
          >
            <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-5">
              <HiOutlineBadgeCheck className="w-7 h-7 text-white" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-4">
              Same-Day Emergency Dental Care
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6 max-w-lg">
              Dental emergencies don't wait, and neither should you. We
              reserve same-day appointments for urgent cases, so you can get
              the care you need when you need it most.
            </p>
            <Button
              variant="white"
              href="#contact"
            >
              Book Emergency Appointment
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
