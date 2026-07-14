import Hero from '../components/sections/Hero.jsx'
import LogoCloud from '../components/sections/LogoCloud.jsx'
import Stats from '../components/sections/Stats.jsx'
import ServicesGrid from '../components/sections/ServicesGrid.jsx'
import Process from '../components/sections/Process.jsx'
import Features from '../components/sections/Features.jsx'
import Testimonials from '../components/sections/Testimonials.jsx'
import TechStack from '../components/sections/TechStack.jsx'
import FAQ from '../components/sections/FAQ.jsx'
import CTA from '../components/sections/CTA.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <LogoCloud />
      <ServicesGrid />
      <Process />
      <Features />
      <Testimonials />
      <TechStack />
      <FAQ />
      <CTA />
    </>
  )
}
