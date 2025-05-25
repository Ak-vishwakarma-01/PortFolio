import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Button from "./ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    key: 1,
    title: "Car Management System",
    imageSrc: "Projects/car.png",
    description: "This Project is made with reactjs and node.js",
    source: "https://github.com/Ak-vishwakarma-01/car-management-system",
    demo: "https://car-management-system-lyart.vercel.app/",
    technologies: ["React.js", "Node.js"],
  },
  {
    key: 2,
    title: "Restaurent website",
    imageSrc: "Projects/restauren.png",
    description: "This Project is made with reactjs",
    source: "https://github.com/Ak-vishwakarma-01/restaurent-web-site",
    demo: "https://restaurent-web-site.vercel.app/",
    technologies: ["React.js"],
  },
  {
    key: 3,
    title: "Ai Chatting WebSite",
    imageSrc: "Projects/Aichating.png",
    description: "Ai chatting Application with Reactjs and Gemini Api",
    source: "https://github.com/Ak-vishwakarma-01/ai-chatting-using-gemini-api",
    demo: "https://ai-chatting-using-gemini-api.vercel.app/",
    technologies: ["React.js", "Gemini API"],
  },
  {
    key: 4,
    title: "Notes Keeper",
    imageSrc: "Projects/Keeper.png",
    description: "Keeper App made with complete reactjs",
    source: "https://github.com/Ak-vishwakarma-01/Learning-Full-stack/tree/main/17%20React/288-keeperapp",
    demo: "https://keeper-app-ak-vishwakarma.vercel.app/",
    technologies: ["React.js"],
  },
  {
    key: 5,
    title: "Billing Management System",
    imageSrc: "Projects/Billing.png",
    description: "This Project is made with java and java swing",
    source: "https://github.com/Ak-vishwakarma-01/BillingManagementSystem",
    demo: "",
    technologies: ["Java", "Swing"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.key}
              className="bg-blue-800/30 backdrop-blur-md border border-blue-600/30 hover:border-pink-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/10 transform hover:-translate-y-4 group overflow-hidden"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardTitle className="text-xl text-white mb-3 group-hover:text-pink-300 transition-colors duration-300">
                  {project.title}
                </CardTitle>

                <p className="text-blue-200 mb-4 leading-relaxed">{project.description}</p>

                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-purple-600/30 text-purple-200 text-xs rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex gap-3">
                  {project.demo && (
                    <Button
                      className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}

                  <Button
                    className="flex-1 border-blue-400/50 text-blue-300 hover:bg-blue-400/10"
                    asChild
                  >
                    <a href={project.source} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}