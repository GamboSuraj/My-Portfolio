
import React from 'react'
import { motion } from 'framer-motion'
import { aboutData } from '../data'

export default function Home(){
  const profile = "https://github.com/GamboSuraj.png";

  return (
    <main className="min-h-screen flex items-center">
      <section className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x:0, opacity:1 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-5xl font-bold">Hi, I'm <span className="text-sky-400">{aboutData.name}</span></h1>
          <p className="mt-4 text-gray-300 text-justify">{aboutData.title} · {aboutData.location}</p>
          <p className="mt-4 text-gray-300 max-w-2x text-justify">{aboutData.homeDescription}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="px-5 py-3 bg-sky-500 hover:bg-sky-600 rounded-md" href="/assets/resume/resume.pdf" download>📄 Download Resume</a>
            <a className="px-5 py-3 border border-gray-700 rounded-md" href={aboutData.socials.email}>💼 Hire Me</a>
          </div>
        </motion.div>
        <motion.div className="flex justify-center md:justify-end" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale:1, opacity:1 }} transition={{ duration: 0.8 }}>
          <img src={profile} alt="profile" className="w-56 h-56 rounded-full ring-4 ring-sky-400/30 shadow-lg" />
        </motion.div>
      </section>
    </main>
  )
}
