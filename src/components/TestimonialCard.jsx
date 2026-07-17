import { motion } from "framer-motion"
import { HiStar, HiBadgeCheck } from "react-icons/hi"

export default function TestimonialCard({
  name,
  location,
  image,
  text,
  rating = 5,
  index = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -6 }}
      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 transition-all duration-500 hover:bg-white/15 hover:shadow-xl hover:shadow-purple/20"
    >
      <div className="flex text-orange gap-1 mb-5">
        {[...Array(rating)].map((_, i) => (
          <HiStar key={i} className="w-5 h-5" />
        ))}
      </div>

      <p className="text-white/85 text-sm md:text-base leading-relaxed mb-6 italic">
        &ldquo;{text}&rdquo;
      </p>

      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
          loading="lazy"
        />
        <div>
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold text-sm">{name}</span>
            <HiBadgeCheck className="w-4 h-4 text-orange" />
          </div>
          <span className="text-white/60 text-xs">{location}</span>
        </div>
      </div>
    </motion.div>
  )
}
