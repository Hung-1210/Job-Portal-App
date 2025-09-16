import React from 'react'
import Headers from './components/Headers'
import Hero from './components/Hero'
import Features from './components/Features'
import Analytics from './components/Analytics'
import { Briefcase} from 'lucide-react'
import Footer from './components/Footer'


const LandingPage = () => {
  return (
    <div className='min-h-screen'>
      <Headers />
      <Hero />
      <Features/>
      <Analytics />
      <Footer />
    </div>
  )
}

export default LandingPage