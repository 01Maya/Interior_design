'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Contact Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-light mb-4 text-[var(--earth)]">Get in Touch</h3>
            <p className="text-content mb-6">
              We'd love to hear from you. Whether you have a question about our services, pricing, or just want to say hello, we're here to help.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-content">
                <Mail className="w-6 h-6 mr-2 text-[var(--earth)]" />
                <span>info@luxordesign.com</span>
              </li>
              <li className="flex items-center text-content">
                <Phone className="w-6 h-6 mr-2 text-[var(--earth)]" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center text-content">
                <MapPin className="w-6 h-6 mr-2 text-[var(--earth)]" />
                <span>123 Design Street, Creativity City, ST 12345</span>
              </li>
            </ul>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--charcoal)]">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-[var(--sand)] shadow-sm focus:border-[var(--earth)] focus:ring focus:ring-[var(--earth)] focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--charcoal)]">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-[var(--sand)] shadow-sm focus:border-[var(--earth)] focus:ring focus:ring-[var(--earth)] focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[var(--charcoal)]">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-[var(--sand)] shadow-sm focus:border-[var(--earth)] focus:ring focus:ring-[var(--earth)] focus:ring-opacity-50"></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary w-full"
              type="submit"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

