import React, { useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Chat() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hey! I'm your AI copilot. Ask me to draft features, APIs, or UI." }
  ])
  const [loading, setLoading] = useState(false)

  const sendMessage = async (e) => {
    e?.preventDefault()
    const text = input.trim()
    if (!text) return
    setMessages((m) => [...m, { role: 'user', content: text }])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch(`${BACKEND_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      })
      if (!res.ok) throw new Error('Request failed')
      const data = await res.json()
      setMessages((m) => [...m, { role: 'assistant', content: data.reply }])
    } catch (err) {
      setMessages((m) => [...m, { role: 'assistant', content: 'Oops, something went wrong. Try again.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="chat" className="relative w-full py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur shadow-sm">
          <div className="max-h-[50vh] overflow-y-auto p-6 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={m.role === 'assistant' ? 'text-gray-800' : 'text-gray-900'}>
                <div className={
                  'inline-block rounded-2xl px-4 py-3 ' +
                  (m.role === 'assistant' ? 'bg-gray-50' : 'bg-purple-600 text-white')
                }>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-gray-500">Thinking…</div>
            )}
          </div>
          <form onSubmit={sendMessage} className="flex gap-3 border-t border-gray-200 p-4">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything…"
              className="flex-1 rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-purple-600 px-5 py-3 text-white shadow hover:bg-purple-700 disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
