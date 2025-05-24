import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface TagProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function Tag({ children, className = '', style }: TagProps) {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
      className="w-min"
    >
      <div
        className={`flex whitespace-nowrap items-center text-lg xl:text-xl rounded-full border px-[1em] py-[0.5em] gap-[0.5em] ${className}`}
        style={style}
      >
        {children}
      </div>
    </motion.div>
  )
}