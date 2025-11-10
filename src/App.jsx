import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Chat from './components/Chat'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <Chat />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
