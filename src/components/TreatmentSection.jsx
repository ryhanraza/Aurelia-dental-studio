import { motion } from "framer-motion"
import { HiSparkles, HiOutlineBadgeCheck } from "react-icons/hi"
import SectionTitle from "./SectionTitle"
import Button from "./Button"

const treatments = [
  {
    icon: HiSparkles,
    title: "Professional Teeth Whitening",
    description:
      "Our advanced whitening system can brighten your smile by up to 8 shades in a single visit. Using the latest Philips Zoom technology, we deliver safe, dramatic results with minimal sensitivity.",
    image: "/teeth-whitening.png",
    reverse: false,
  },
  {
    icon: HiOutlineBadgeCheck,
    title: "Restorative Dentistry",
    description:
      "Rebuild and restore your smile with our advanced restorative treatments. From dental implants to full-mouth rehabilitation, we use premium materials and precision techniques for lasting, natural-looking results.",
    image: "/restorative-care.png",
    reverse: true,
  },
]

export default function TreatmentSection() {
  return (
    <section id="treatments" className="py-20 md:py-28 bg-white">
      <div className="container-main">
        <SectionTitle
          subtitle="Featured Treatments"
          title="Advanced Dental Solutions"
          description="Discover our most popular treatments, designed to give you the smile you've always wanted with minimal discomfort."
        />

        <div className="space-y-20 md:space-y-28 mt-12">
          {treatments.map((treatment, i) => (
            <div
              key={i}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                treatment.reverse ? "" : ""
              }`}
            >
              {treatment.reverse ? (
                <>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="order-2 lg:order-1"
                  >
                    <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-5">
                      <treatment.icon className="w-7 h-7 text-orange" />
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-purple leading-tight mb-4">
                      {treatment.title}
                    </h3>
                    <p className="text-muted text-base leading-relaxed mb-6">
                      {treatment.description}
                    </p>
                    <Button href="#contact">Schedule a Consultation</Button>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="order-1 lg:order-2 relative"
                  >
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src={treatment.image}
                        alt={treatment.title}
                        className="w-full h-72 md:h-96 object-cover"
                        loading="lazy"
                      />
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="absolute -bottom-5 -right-5 w-28 h-28 bg-orange rounded-2xl -z-10"
                    />
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src={treatment.image}
                        alt={treatment.title}
                        className="w-full h-72 md:h-96 object-cover"
                        loading="lazy"
                      />
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="absolute -bottom-5 -left-5 w-28 h-28 bg-orange rounded-2xl -z-10"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-5">
                      <treatment.icon className="w-7 h-7 text-orange" />
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-purple leading-tight mb-4">
                      {treatment.title}
                    </h3>
                    <p className="text-muted text-base leading-relaxed mb-6">
                      {treatment.description}
                    </p>
                    <Button href="#contact">Schedule a Consultation</Button>
                  </motion.div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
