import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--cream)]">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}

