import React from 'react'
import Navbar from './components/navigation/Navbar.jsx'
import Hero from './components/blocks/Hero.jsx'
import Features from './components/blocks/Features.jsx'
import HowItWorks from './components/blocks/HowItWorks.jsx'
import CTAPanel from './components/blocks/CTAPanel.jsx'
import Newsletter from './components/blocks/Newsletter.jsx'
import Footer from './components/footer/Footer.jsx'

export default function App(){
  return (
    <>
      <Navbar/>
      <Hero/>
      {/* <Features/> */}
      <HowItWorks/>
      <CTAPanel/>
      {/* <Newsletter/> */}
      <Footer/>
    </>
  )
}