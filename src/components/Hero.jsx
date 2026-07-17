import { motion } from "framer-motion"
import { HiStar, HiShieldCheck, HiClock } from "react-icons/hi"
import Button from "./Button"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: "easeOut" },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-beige overflow-hidden pt-20"
    >
      <div className="container-main relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 pt-8 lg:pt-0">
            <motion.span
              {...fadeUp(0)}
              className="inline-block text-orange font-medium text-sm md:text-base uppercase tracking-widest mb-4"
            >
              Welcome to WhiteBridge Dental
            </motion.span>

            <motion.h1
              {...fadeUp(0.1)}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-purple"
            >
              Premium Dental Care for
              <span className="text-orange"> Your Healthiest Smile</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="mt-5 text-base md:text-lg text-muted max-w-lg leading-relaxed"
            >
              Experience world-class dentistry in a warm, comfortable
              environment. Dr. Sarah Mitchell and her team are dedicated to
              transforming smiles with precision, care, and artistry.
            </motion.p>

            <motion.div
              {...fadeUp(0.3)}
              className="flex flex-wrap gap-4 mt-8"
            >
              <Button href="#contact">Book an Appointment</Button>
              <Button variant="secondary" href="#services">
                Explore Services
              </Button>
            </motion.div>

            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-wrap gap-6 md:gap-8 mt-10 pt-8 border-t border-border"
            >
              <div className="flex items-center gap-2">
                <div className="flex text-orange">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="w-4 h-4" />
                  ))}
                </div>
                <span className="text-sm text-muted font-medium">
                  5000+ Happy Patients
                </span>
              </div>
              <div className="flex items-center gap-2">
                <HiShieldCheck className="w-5 h-5 text-orange" />
                <span className="text-sm text-muted font-medium">
                  Emergency Care
                </span>
              </div>
              <div className="flex items-center gap-2">
                <HiClock className="w-5 h-5 text-orange" />
                <span className="text-sm text-muted font-medium">
                  12+ Years Experience
                </span>
              </div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]"
              >
                <img
                  src="/doctor-hero.png"
                  alt="Dr. Sarah Mitchell"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 0.15, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -top-8 -right-8 w-64 h-64 bg-orange rounded-3xl -z-10"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-orange/10 -z-10"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute top-1/4 -right-6 w-16 h-16 rounded-full bg-orange/10 -z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
