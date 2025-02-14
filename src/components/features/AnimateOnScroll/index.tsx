'use client'

import { motion } from 'framer-motion'

interface AnimateOnScrollProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

const AnimateOnScroll = ({ children, delay = 0, className }: AnimateOnScrollProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimateOnScroll
