import { motion } from "framer-motion"
import { HiArrowRight } from "react-icons/hi"

export default function ServiceCard({
  icon: Icon,
  image,
  title,
  description,
  items,
  index = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-2xl border border-border overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-purple/5 flex flex-col"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple/60 to-transparent" />
        <div className="absolute bottom-4 left-5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Icon className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-white font-serif text-xl font-semibold">
            {title}
          </h3>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <p className="text-muted text-sm leading-relaxed mb-4">
          {description}
        </p>
        <ul className="space-y-2 mb-6 flex-1">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-orange font-medium text-sm group/link transition-colors hover:text-orange-dark"
        >
          Learn More
          <HiArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </a>
      </div>
    </motion.div>
  )
}
