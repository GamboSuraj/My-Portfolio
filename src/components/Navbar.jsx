
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-gray-900/75 backdrop-blur">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold text-sky-400">Gambo Suraj</Link>
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="menu" className="p-2 border rounded border-gray-700">
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden bg-gray-800/95 px-6 py-4">
          <Link to="/" className="block py-2">Home</Link>
          <Link to="/about" className="block py-2">About</Link>
          <Link to="/projects" className="block py-2">Projects</Link>
          <Link to="/contact" className="block py-2">Contact</Link>
        </div>
      )}
    </header>
  )
}
