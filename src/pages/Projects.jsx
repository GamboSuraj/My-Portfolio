import React from "react";
import { projects } from "../data";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, idx) => (
          <ProjectCard key={idx} project={p} />
        ))}
      </div>
    </section>
  );
}
