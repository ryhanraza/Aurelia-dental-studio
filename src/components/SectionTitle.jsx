import { motion } from "framer-motion"

export default function SectionTitle({
  subtitle,
  title,
  description,
  align = "center",
  light = false,
}) {
  const alignClasses =
    align === "center" ? "text-center" : "text-left"

  return (
    <div className={`max-w-2xl mx-auto mb-12 md:mb-16 ${alignClasses}`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block text-orange font-medium text-sm md:text-base uppercase tracking-widest mb-3"
        >
          {subtitle}
        </motion.span>
      )}
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`font-serif text-3xl md:text-4xl lg:text-4xl leading-tight ${
            light ? "text-white" : "text-purple"
          }`}
        >
          {title}
        </motion.h2>
      )}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-4 text-base md:text-lg max-w-xl ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/80" : "text-muted"}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
