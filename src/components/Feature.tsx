import { useRef, useState, useEffect } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'framer-motion'

interface FeatureProps {
  src: string
  alt: string
}

export default function Feature({ src, alt }: FeatureProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const inView = useInView(ref)
  const [hovering, setHovering] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (ref.current) {
      const { width, height } = ref.current.getBoundingClientRect()
      setDimensions({ width, height })
    }
  }, [])

  const x = useSpring(dimensions.width * 0.86, {
    stiffness: 25,
    damping: 35
  })

  const y = useSpring(dimensions.height * 0.05, {
    stiffness: 25,
    damping: 35
  })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    if (
      mouseX >= 0 &&
      mouseX <= rect.width &&
      mouseY >= 0 &&
      mouseY <= rect.height
    ) {
      setHovering(true)
      x.set(mouseX)
      y.set(mouseY)
    } else {
      setHovering(false)
    }
  }

  const handleMouseLeave = () => {
    setHovering(false)
    x.set(dimensions.width * 0.86)
    y.set(dimensions.height * 0.05)
  }

  return (
    <motion.a
      ref={ref}
      href="#work"
      className="relative block group @container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
    >
      <div className="overflow-hidden rounded-t-[9cqw]">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="w-full transition-transform duration-700 ease-out-expo group-hover:scale-105"
        />
      </div>

      <motion.div
        className="w-[18%] hidden @xl:block aspect-square absolute top-0 left-0 overflow-hidden z-10"
        style={{
          x: useTransform(x, (value) => value - dimensions.width * 0.09),
          y: useTransform(y, (value) => value - dimensions.width * 0.09)
        }}
      >
        <div className="bg-gray-800 absolute inset-0 rounded-full">
          <div className="bg-gray-900 absolute inset-0 rounded-full group-hover:opacity-100 opacity-0 transition duration-300" />
          <div className="bg-gray-900 absolute inset-2 rounded-full group-hover:scale-[97.5%] transition overflow-hidden">
            <div className="opacity-0 group-hover:opacity-100 bg-lime-200 transition duration-300 absolute inset-0" />
            <div className="-rotate-45 w-[200%] origin-[75%_50%] right-0 absolute h-full top-0">
              <div className="w-1/2 absolute right-0 top-0 h-full group-hover:translate-x-full transition duration-300 flex items-center justify-center">
                <svg
                  className="h-1/2"
                  viewBox="0 0 88 85"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-lime-200"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M70.5446 38.25L39.3357 7.04109L45.6997 0.67713L87.7725 42.75L45.6997 84.8228L39.3357 78.4589L70.5446 47.25L0.0912681 47.25L0.0912648 38.25H70.5446Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.a>
  )
}