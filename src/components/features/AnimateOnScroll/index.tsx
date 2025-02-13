// components/AnimateOnScroll.tsx
'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface AnimateOnScrollProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

const AnimateOnScroll = ({ children, delay = 0, className }: AnimateOnScrollProps) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true }) // Animação ocorre apenas uma vez

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, delay }}
      className={`${className && className}`}
    >
      {children}
    </motion.div>
  )
}

export default AnimateOnScroll