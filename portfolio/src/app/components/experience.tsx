import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import Badge from "./ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "Software Developer Intern",
    company: "Theody Svadhyay Trailblazer",
    type: "Internship",
    duration: "Apr 2025 - Present · 2 mos",
    location: "India · Remote",
    description:
      "Worked on UI and backend development, created SVG animations. Gained experience in React.js, Node.js, Express.js, Next.js, and MongoDB.",
    skills: ["React.js", "Node.js", "Express.js", "Git", "GitHub", "Next.js", "MongoDB", "Team Management"],
  },
  {
    id: 2,
    title: "Full-Stack Developer Intern",
    company: "Trade In Global",
    type: "Trainee",
    duration: "Nov 2024 - Jan 2025 · 3 mos",
    location: "Gorakhpur, Uttar Pradesh, India · Remote",
    description:
      "Developed responsive frontend pages with efficient state management. Built backend APIs for user authentication including login via OTP, password reset, and forgot password functionality.",
    skills: ["MERN Stack", "State Management", "MongoDB", "Axios", "Git", "GitHub"],
    achievements: [
      "Developed responsive frontend pages with efficient state management",
      "Built backend APIs for user authentication, including login via OTP, password reset, and forgot password functionality",
      "Designed and implemented a MongoDB schema to manage user data effectively",
      "Integrated the frontend and backend using Axios for seamless data flow",
      "Collaborated with a team, gaining hands-on experience with Git and GitHub workflows",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Professional Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={exp.id}
              className="bg-blue-800/30 backdrop-blur-md border border-blue-600/30 hover:border-pink-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/10 transform hover:-translate-y-2"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-white mb-2">{exp.title}</CardTitle>
                    <div className="flex items-center gap-2 text-pink-300 mb-2">
                      <Building className="h-4 w-4" />
                      <span className="font-semibold">{exp.company}</span>
                      <Badge variant="secondary" className="bg-purple-600/50 text-white">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 text-blue-200">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-blue-100 mb-4 leading-relaxed">{exp.description}</p>

                {exp.achievements && (
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-blue-100 flex items-start gap-2">
                          <span className="text-pink-400 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="text-white font-semibold mb-3">Technologies & Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="border-pink-400/50 text-pink-300 hover:bg-pink-400/10 transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
