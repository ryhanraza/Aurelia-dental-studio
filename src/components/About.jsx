import { motion } from "framer-motion"
import { HiStar, HiShieldCheck, HiClock, HiHeart } from "react-icons/hi"
import SectionTitle from "./SectionTitle"
import StatCard from "./StatCard"
import Button from "./Button"

const stats = [
  { icon: HiStar, value: "5000", label: "Happy Patients" },
  { icon: HiClock, value: "12", label: "Years Experience" },
  { icon: HiShieldCheck, value: "100", label: "Modern Treatments" },
  { icon: HiHeart, value: "98", label: "Satisfaction Rate" },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container-main">
        <SectionTitle
          subtitle="About Us"
          title="Dedicated to Your Dental Health"
          description="With over a decade of experience, Dr. Sarah Mitchell combines artistic vision with clinical excellence to create naturally beautiful smiles."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-2xl md:text-3xl text-purple leading-tight mb-5">
              A Warm Welcome from
              <br />
              <span className="text-orange">Dr. Sarah Mitchell</span>
            </h3>

            <div className="space-y-4 text-muted text-base leading-relaxed">
              <p>
                Dr. Sarah Mitchell is a leading cosmetic and restorative
                dentist with over 12 years of experience transforming smiles.
                After completing her Doctor of Dental Surgery at the University
                of California, she pursued advanced training in aesthetic
                dentistry at the prestigious Las Vegas Institute.
              </p>
              <p>
                Her philosophy is simple: every patient deserves personalized,
                compassionate care in a relaxing environment. She combines
                cutting-edge technology with an artistic eye to deliver
                results that look natural and feel comfortable.
              </p>
              <p>
                "I believe that a beautiful smile has the power to transform
                lives. My goal is to help each patient achieve the smile they
                deserve, with care that exceeds expectations."
              </p>
            </div>

            <div className="mt-6">
              <Button href="#contact">Meet Dr. Mitchell</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80"
                alt="Modern dental clinic"
                className="w-full h-80 md:h-96 object-cover"
                loading="lazy"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange rounded-2xl -z-10"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
