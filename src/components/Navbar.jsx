import React, { useEffect, useState } from 'react'
import { Flame, Github, Moon, SunMedium } from 'lucide-react'

function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark'
    setDark(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <button onClick={toggle} className="inline-flex items-center gap-2 rounded-lg border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2 text-sm text-gray-700 dark:text-gray-200 shadow-sm hover:bg-white/90 dark:hover:bg-white/10 transition">
      {dark ? <SunMedium size={16} /> : <Moon size={16} />}
      <span className="hidden sm:inline">{dark ? 'Light' : 'Dark'}</span>
    </button>
  )
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-gray-100/60 dark:border-white/10 bg-white/70 dark:bg-gray-950/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 text-white shadow">
            <Flame size={16} />
          </div>
          <span className="text-sm font-semibold tracking-wide text-gray-900 dark:text-white">Flames Vibe</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700 dark:text-gray-300">
          <a href="#chat" className="hover:text-gray-900 dark:hover:text-white">Chat</a>
          <a href="#features" className="hover:text-gray-900 dark:hover:text-white">Features</a>
          <a href="/test" className="hover:text-gray-900 dark:hover:text-white">System</a>
          <a href="https://github.com" target="_blank" className="inline-flex items-center gap-2 hover:text-gray-900 dark:hover:text-white"><Github size={16}/>GitHub</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#chat" className="hidden sm:inline-flex items-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-white shadow hover:opacity-95 transition">
            Start building
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
