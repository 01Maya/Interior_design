'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const features = ['30+ years of experience', 'Award-winning designs', 'Personalized service']

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          About Luxor
        </motion.h2>

        <div className="flex flex-wrap items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 mb-10 md:mb-0"
          >
            <div className="relative w-full h-[400px] md:h-[500px]">
              <Image
                src="/Elegant living room.jpg"
                alt="Elegant living room design"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 md:pl-10"
          >
            <p className="text-content text-lg mb-6">
              At Luxor, we believe that every space has the potential to be transformed into a beautiful, functional home. Our team of expert designers works tirelessly to bring your vision to life.
            </p>

            <ul className="mb-6">
              {features.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center mb-2 text-content"
                >
                  <svg
                    className="w-6 h-6 mr-2 text-[var(--earth)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
