import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Linkedin, Github, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Prasad Maddikar
            </div>
            <p className="text-slate-400 mb-6">Full Stack Developer & AI Enthusiast</p>

            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://linkedin.com/in/Prasad_maddikar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin />
              </a>
              <a
                href="https://github.com/Prasad_maddikar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Github />
              </a>
              <a
                href="mailto:maddikarprasad@gmail.com"
                className="text-2xl text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Mail />
              </a>
            </div>

            <div className="border-t border-slate-800 pt-8">
              <p className="text-slate-500">&copy; 2025 Prasad Maddikar. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
