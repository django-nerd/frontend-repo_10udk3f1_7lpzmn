import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-6 text-sm text-gray-500 dark:text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>Built with gradients, glass, and motion. © {new Date().getFullYear()}</p>
        <div className="flex items-center gap-4">
          <a href="#features" className="hover:text-gray-700 dark:hover:text-gray-200">Features</a>
          <a href="#chat" className="hover:text-gray-700 dark:hover:text-gray-200">Chat</a>
          <a href="/test" className="hover:text-gray-700 dark:hover:text-gray-200">System</a>
        </div>
      </div>
    </footer>
  )
}
