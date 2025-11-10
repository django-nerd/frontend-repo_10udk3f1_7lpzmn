import React from 'react'
import { Sparkles, MessageSquare, Mic2, Database } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Futuristic visuals',
    desc: 'Spline-powered 3D aura with subtle gradients and glass. Feels alive, not static.'
  },
  {
    icon: MessageSquare,
    title: 'Chat copilot',
    desc: 'A friendly AI that drafts features, endpoints, and UI flows with you.'
  },
  {
    icon: Mic2,
    title: 'Voice-ready',
    desc: 'Architecture prepared for browser mic input and streaming responses.'
  },
  {
    icon: Database,
    title: 'Data-first backend',
    desc: 'FastAPI + MongoDB scaffolding so ideas persist from the start.'
  },
]

export default function Features() {
  return (
    <section id="features" className="relative w-full py-16 bg-gradient-to-b from-purple-50/60 via-white to-white dark:from-indigo-950/30 dark:via-gray-950 dark:to-gray-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="inline-flex items-center rounded-full bg-white/70 dark:bg-white/5 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300 shadow-sm ring-1 ring-purple-200/60 dark:ring-white/10 backdrop-blur">What you get</div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Design-forward, product-ready</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">A minimal AI canvas that already looks premium and scales as you add real intelligence.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({icon: Icon, title, desc}) => (
            <div key={title} className="group rounded-2xl border border-gray-200/80 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] p-5 backdrop-blur shadow-sm hover:shadow-md transition-all">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 to-blue-600 text-white shadow">
                <Icon size={18} />
              </div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">{title}</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
