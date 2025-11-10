import React from 'react'

export default function CTA() {
  return (
    <section className="relative w-full py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-purple-200/70 dark:border-white/10 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 p-10 text-white shadow-lg">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
          <div className="relative z-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Ship your AI idea this week</h3>
              <p className="mt-1 text-white/90">Start from this canvas, wire in your model, and launch with confidence.</p>
            </div>
            <div className="flex gap-3">
              <a href="#chat" className="inline-flex items-center rounded-xl bg-white/90 px-5 py-3 text-purple-700 font-semibold shadow hover:bg-white">Start building</a>
              <a href="/test" className="inline-flex items-center rounded-xl bg-white/20 px-5 py-3 text-white font-semibold ring-1 ring-white/50 hover:bg-white/25">Run system check</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
