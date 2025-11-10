import React from 'react'
import Hero from './components/Hero'
import Chat from './components/Chat'

function App() {
  return (
    <div className="min-h-screen w-full bg-white">
      <header className="sticky top-0 z-20 w-full border-b border-white/40 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400" />
            <span className="text-sm font-semibold tracking-wide text-gray-800">Flames Vibe</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
            <a href="#chat" className="hover:text-gray-900">Chat</a>
            <a href="/test" className="hover:text-gray-900">System</a>
            <a href="https://flames.blue" target="_blank" className="hover:text-gray-900">Flames.Blue</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Chat />
      </main>

      <footer className="border-t border-gray-100 py-10">
        <div className="mx-auto max-w-6xl px-6 text-sm text-gray-500">
          Built with gradients, glass, and motion. © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  )
}

export default App
