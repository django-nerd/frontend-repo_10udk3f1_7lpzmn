import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-gradient-to-b from-white via-white to-purple-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 pb-12 sm:pt-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-purple-700 shadow-sm ring-1 ring-purple-200 backdrop-blur">
            AI voice agent aura • Futuristic • Minimal
          </div>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Build AI experiences with the Flames vibe
          </h1>
          <p className="mt-5 text-lg leading-7 text-gray-600">
            A sleek, modern canvas for AI chat and voice—gradient auras, glass surfaces, and motion built-in. Start prototyping your AI product in minutes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#chat" className="inline-flex items-center rounded-lg bg-purple-600 px-5 py-3 text-white shadow hover:bg-purple-700 transition">
              Try the AI chat
            </a>
            <a href="/test" className="inline-flex items-center rounded-lg bg-white px-5 py-3 text-gray-900 ring-1 ring-gray-200 shadow-sm hover:bg-gray-50 transition">
              System check
            </a>
          </div>
        </div>
      </div>

      {/* Soft gradient glow overlay (doesn't block the Spline) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(168,85,247,0.25),rgba(59,130,246,0.18),rgba(251,146,60,0.12),transparent)]" />
    </section>
  )
}
