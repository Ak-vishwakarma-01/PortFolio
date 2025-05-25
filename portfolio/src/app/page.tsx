import Navbar from "./components/navbar"
import Home from "./components/home"
import Experience from "./components/experience"
import Skills from "./components/skills"
import Projects from "./components/project"
import Contact from "./components/contact"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">
      <Navbar />
      <main className="container mx-auto px-4">
        <Home />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
