import  Button  from "./ui/button"
import { Download } from "lucide-react"

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-6xl">
        <div className="text-center md:text-left order-2 md:order-1">
          <div className="bg-blue-800/50 backdrop-blur-md border border-blue-600/30 rounded-2xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ankit Kumar <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Vishwakarma
              </span>
            </h1>
            <p className="text-blue-200 mb-8 text-lg">
              Full-Stack Developer passionate about creating innovative web solutions
            </p>
            <a
              href="/files/resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-500/25">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>

        <div className="flex justify-center order-1 md:order-2">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-pink-400 overflow-hidden animate-pulse shadow-2xl shadow-pink-500/30">
              <img
                src="/assets/hero.avif"
                alt="Ankit Kumar Vishwakarma"
                className="w-full h-full object-cover"
                width={320}
                height={320}
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500/20 to-purple-500/20 animate-spin-slow"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
