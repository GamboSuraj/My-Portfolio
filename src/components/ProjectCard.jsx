
import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({project}){
  return (
    <motion.article whileHover={{ scale: 1.02 }} className="bg-gray-800 p-5 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-sky-300">{project.title}</h3>
      <p className="mt-2 text-sm text-gray-300">{project.description}</p>
      <div className="mt-4 flex gap-3">
        {project.repo && <a className="px-3 py-2 bg-sky-600 rounded text-sm" href={project.repo} target="_blank" rel="noreferrer">Code</a>}
      </div>
    </motion.article>
  )
}
