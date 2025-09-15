import React from 'react'
import { aboutData } from '../data'

export default function Contact(){
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="mt-4 text-gray-300">I'd love to hear from you — feel free to reach out via email or check my GitHub/LinkedIn.</p>
      <div className="mt-6 flex gap-3">
        <a className="px-4 py-2 border border-gray-700 rounded" href={aboutData.socials.github} target="_blank" rel="noreferrer">GitHub</a>
        <a className="px-4 py-2 border border-gray-700 rounded" href={aboutData.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="px-4 py-2 border border-gray-700 rounded" href={aboutData.socials.email} target="_blank" rel="noreferrer">Email</a>
      </div>
    </section>
  )
}
