import { motion } from "framer-motion"
import { useEffect, useState } from "react"

function Counter({ value, suffix = "" }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const num = parseInt(value)
    if (isNaN(num)) {
      setCount(value)
      return
    }
    let start = 0
    const duration = 1500
    const step = Math.ceil(num / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= num) {
        setCount(num)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [value])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function StatCard({ icon, value, label }) {
  const Icon = icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
      className="bg-white rounded-xl p-5 md:p-6 border border-border transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        {Icon && (
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center">
            <Icon className="w-6 h-6 text-orange" />
          </div>
        )}
        <div>
          <div className="font-serif text-2xl md:text-3xl font-bold text-purple">
            <Counter value={value} suffix="+" />
          </div>
          <p className="text-sm text-muted mt-1">{label}</p>
        </div>
      </div>
    </motion.div>
  )
}
