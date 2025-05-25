import Button from "./ui/button"
import { Linkedin, Github, Instagram, Facebook, Mail, Phone } from "lucide-react"

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ak-vishwakarma0/",
    label: "LinkedIn",
    color: "hover:text-blue-400",
  },
  {
    icon: Github,
    href: "https://github.com/Ak-vishwakarma-01",
    label: "GitHub",
    color: "hover:text-gray-400",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/ak.vishwakarma.0",
    label: "Instagram",
    color: "hover:text-pink-400",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/ak.vishwkarma.0/",
    label: "Facebook",
    color: "hover:text-blue-500",
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Let's Connect</h2>

        <p className="text-blue-200 text-lg mb-12 max-w-2xl mx-auto">
          I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to work
          together!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="group">
                <div className="bg-blue-800/40 backdrop-blur-md border border-blue-600/30 rounded-2xl p-6 transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/25 hover:border-pink-400/50">
                  <Icon className={`w-8 h-8 mx-auto text-white transition-colors duration-300 ${social.color}`} />
                  <p className="text-white text-sm mt-3 group-hover:text-pink-300 transition-colors duration-300">
                    {social.label}
                  </p>
                </div>
              </a>
            )
          })}
        </div>

        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold transform hover:scale-105 transition-all duration-300"
          >
            <Mail className="mr-2 h-5 w-5" />
            Send Email
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-blue-400/50 text-blue-300 hover:bg-blue-400/10 font-semibold transform hover:scale-105 transition-all duration-300"
          >
            <Phone className="mr-2 h-5 w-5" />
            Schedule Call
          </Button>
        </div> */}
      </div>
    </section>
  )
}
