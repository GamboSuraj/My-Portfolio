
import React from 'react'
export default function Footer(){
  return (
    <footer className="mt-12 border-t border-gray-800 py-6">
      <div className="max-w-5xl mx-auto text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Gambo Suraj · Built with React + Vite + Tailwind
      </div>
    </footer>
  )
}
