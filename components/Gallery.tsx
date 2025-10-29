'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const categories = ['All', 'Modern', 'Classic', 'Minimal']

const projects = [
  {
    id: 1,
    category: 'Modern',
    image: '/living space.jpg',
    title: 'Contemporary Living Space'
  },
  {
    id: 2,
    category: 'Classic',
    image: '/bedroom.jpg',
    title: 'Classic Bedroom Design'
  },
  {
    id: 3,
    category: 'Minimal',
    image: '/minimal bedroom.jpg',
    title: 'Minimalist Bedroom'
  },
  {
    id: 4,
    category: 'Classic',
    image: '/Elegant living room.jpg',
    title: 'Elegant Living Room'
  },
  {
    id: 5,
    category: 'Minimal',
    image: '/J style room.jpg',
    title: 'Japandi Style Interior'
  },
  {
    id: 6,
    category: 'Modern',
    image: '/modern living space.jpg',
    title: 'Modern Living Space'
  },
  {
    id: 7,
    category: 'Minimal',
    image: '/minimal living.jpg',
    title: 'Minimalist Living Room'
  }
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="gallery" className="section-padding bg-[var(--cream)]">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Our Gallery
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12 flex-wrap gap-4"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeCategory === category 
                ? 'bg-[var(--earth)] text-white' 
                : 'bg-[var(--sand)] text-[var(--charcoal)]'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-light mb-2">{project.title}</h3>
                  <span className="text-sm text-white/80">{project.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

