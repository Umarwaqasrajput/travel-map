'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thank you, ${form.name}! Your message has been sent.`)
  }

  return (
    <div className="contact-page px-6 py-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6 text-center">Contact Us</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="p-3 border rounded shadow"/>
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="p-3 border rounded shadow"/>
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} className="p-3 border rounded shadow"/>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transition-all">
          Send Message
        </button>
      </form>
    </div>
  )
}
