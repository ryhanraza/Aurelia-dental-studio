import { motion } from "framer-motion"

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 cursor-pointer border text-sm md:text-base"

  const variants = {
    primary:
      "bg-orange text-white border-orange hover:bg-orange-dark hover:border-orange-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange/20",
    secondary:
      "bg-transparent text-purple border-purple hover:bg-purple hover:text-white",
    outline:
      "bg-transparent text-orange border-orange hover:bg-orange hover:text-white",
    white:
      "bg-white text-purple border-white hover:bg-beige",
  }

  const sizes = "px-6 py-3 md:px-8 md:py-3.5"

  const classes = `${base} ${variants[variant]} ${sizes} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
