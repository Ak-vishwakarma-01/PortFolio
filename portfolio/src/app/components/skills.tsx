"use client"

import { useState } from "react"

const skills = [
  { id: 1, title: "React", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { id: 2, title: "Node.js", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { id: 3, title: "JavaScript", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { id: 4, title: "TypeScript", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { id: 5, title: "MongoDB", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { id: 6, title: "Express", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { id: 7, title: "Next.js", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" }, // lighter version
  { id: 8, title: "Tailwind", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }, // working SVG
  { id: 9, title: "Git", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { id: 10, title: "Java", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { id: 11, title: "Spring Boot", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
]

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">Technical Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="group relative"
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="bg-blue-800/40 backdrop-blur-md border border-blue-600/30 rounded-2xl p-6 transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-2xl hover:shadow-pink-500/25 hover:border-pink-400/50">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-xl flex items-center justify-center">
                  <img
                    src={skill.imageSrc}
                    alt={skill.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-white font-semibold text-sm group-hover:text-pink-300 transition-colors duration-300">
                  {skill.title}
                </h3>
              </div>

              {hoveredSkill === skill.id && (
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-purple-500/20 rounded-2xl animate-pulse pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
