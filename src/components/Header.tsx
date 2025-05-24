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
        
        {['About Us', 'Project', 'Services', "Let's Talk"].map((item, i) => (
          <motion.span
            key={item}
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1 + i * 0.05,
              ease: [0.19, 1, 0.22, 1]
            }}
            className="cursor-not-allowed text-lg xl:text-xl hidden @3xl:inline-block"
          >
            {item}
          </motion.span>
        ))}

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

          <div className="w-full relative flex flex-col gap-[8%] justify-start items-center">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
              className="hidden @3xl:block"
            >
              <div className="rounded-full overflow-hidden relative cursor-not-allowed group border-4 border-lime-300">
                <Image
                  src="/images/vid.jpg"
                  alt="Teaser video"
                  width={500}
                  height={500}
                  className="w-full"
                />
                <div className="transition duration-300 group-hover:translate-x-4 rounded-full absolute top-1.5 left-1.5 aspect-square h-[calc(100%-theme(spacing[1.5])*2)]">
                  <div className="absolute inset-0 rounded-full overflow-hidden bg-gray-800">
                    <div className="absolute inset-1 rounded-full overflow-hidden bg-gray-900 flex items-center justify-center">
                      <svg
                        className="h-2/5 relative ml-[5%]"
                        viewBox="0 0 25 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="fill-lime-200"
                          d="M22.7964 12.4382C24.7148 13.6073 24.7148 16.3926 22.7964 17.5618L4.5612 28.6748C2.56205 29.8931 -1.02334e-07 28.4541 0 26.113L9.7153e-07 3.88699C1.07386e-06 1.54585 2.56206 0.106891 4.56121 1.32522L22.7964 12.4382Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="hidden @3xl:flex gap-[20%] w-full justify-center items-center text-lime-300">
              {[0.15, 0.2, 0.25].map((delay, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay, ease: [0.19, 1, 0.22, 1] }}
                >
                  <Twinkle className="h-7" />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
              className="text-lg xl:text-2xl leading-[1.45] @3xl:absolute bottom-[3.5%] right-0"
            >
              <p>
                The art of visual communication, creatively impacting the world around us&mdash;one good
                design at a time, design like you mean it!
              </p>
            </motion.div>
          </div>
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