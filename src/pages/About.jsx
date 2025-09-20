import React from "react";
import { skills, aboutData } from "../data";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-3xl font-bold"
      >
        About Me
      </motion.h2>

      <p className="mt-4 text-gray-300 max-w-2xl">
        {aboutData.aboutDescription}
      </p>

      <h3 className="mt-6 font-semibold">Skills</h3>

      <div className="mt-3 space-y-4">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category}>
            <h4 className="text-sky-400 font-medium capitalize">{category}</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {skillList.map((s, i) => {
                const Icon = s.icon;
                return (
                  <span
                    key={i}
                    className="flex items-center gap-2 px-3 py-1 bg-gray-800 rounded text-sm"
                  >
                    <Icon /> {s.name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
