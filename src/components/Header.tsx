import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Crown from './icons/Crown'
import Globe from './icons/Globe'
import Twinkle from './icons/Twinkle'
import Tag from './Tag'

export default function Header() {
  return (
    <header className="bg-lime-200 pt-5 xl:pt-10">
      <nav className="container flex items-center gap-[8%] mb-20 @container">
        <Link href="/" className="font-medium text-lg xl:text-2xl mr-auto">
          <motion.span
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            className="inline-block"
          >
            Das Grüne
          </motion.span>
        </Link>
        
        <motion.span
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
          className="cursor-not-allowed text-lg xl:text-xl hidden @3xl:inline-block"
        >
          About Us
        </motion.span>
        
        <motion.span
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
          className="cursor-not-allowed text-lg xl:text-xl hidden @3xl:inline-block"
        >
          Project
        </motion.span>
        
        <motion.span
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          className="cursor-not-allowed text-lg xl:text-xl hidden @3xl:inline-block"
        >
          Services
        </motion.span>
        
        <motion.span
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.19, 1, 0.22, 1] }}
          className="cursor-not-allowed text-lg xl:text-xl hidden @3xl:inline-block"
        >
          Let's Talk
        </motion.span>

        {/* Hamburger Menu */}
        <div className="cursor-not-allowed @3xl:hidden space-y-1.5">
          {[0.1, 0.15, 0.2].map((delay, i) => (
            <motion.div
              key={i}
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.7, delay, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="h-[2px] bg-current w-[30px]" />
            </motion.div>
          ))}
        </div>
      </nav>

      <div className="container @container">
        <div className="flex items-center justify-start gap-[1.1%] pl-[0.5%] mb-[1%]">
          {[0, 0.05].map((delay, i) => (
            <motion.div
              key={i}
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay, ease: [0.19, 1, 0.22, 1] }}
              className="w-[2%]"
            >
              <div className="w-full rounded-full aspect-square bg-current" />
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col gap-11 @3xl:gap-[3%] @3xl:flex-row">
          <h1 className="font-bold text-[22.5cqw]/[0.75] @3xl:text-[15cqw]/[0.75] uppercase">
            {['Digitize', 'ideas'].map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                className="inline-block"
              >
                <span className="inline-block">{word}</span>
              </motion.span>
            ))}
          </h1>
        </div>

        <div className="flex items-center flex-wrap @3xl:flex-nowrap justify-start gap-5 mt-10">
          <Tag className="delay-[250ms]">
            <Crown className="w-5 flex-shrink-0" />
            2022 Best Agency
          </Tag>
          <Tag className="delay-[300ms]">
            <Globe className="w-5 flex-shrink-0" />
            World Class Agency
          </Tag>
        </div>
      </div>
    </header>
  )
}