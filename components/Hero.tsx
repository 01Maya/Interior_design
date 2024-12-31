'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="section-padding bg-[var(--cream)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
            <span className="text-[var(--charcoal)]">Creating Timeless</span>{' '}
            <span className="text-[var(--earth)]">Spaces for Living</span>
          </h1>
          <p className="text-content text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Where elegance meets functionality, and every detail tells a story. Transform your space into a sanctuary of style and comfort.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link href="#gallery" className="btn btn-primary">
              Explore Our Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

