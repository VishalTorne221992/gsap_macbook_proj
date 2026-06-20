import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import Showcase from './components/Showcase'
import Performance from './components/Performance'
import Features from './components/Features'


gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <>
     <Navbar />
     <Hero />
     <ProductViewer />
     <Showcase />
     <Performance />
     <Features />
    </>
  )
}

export default App