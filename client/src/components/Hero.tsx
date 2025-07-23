import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="Professional developer workspace with multiple monitors and code"
          className="w-full h-full object-cover opacity-20 dark:opacity-10"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 dark:from-blue-600/30 dark:to-purple-600/30"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-in slide-in-from-left duration-1000">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Prasad
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 mb-6">
              Full Stack Developer & AI Enthusiast
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Passionate Computer Science student with expertise in React, Spring Boot, and Machine Learning.
              Building innovative solutions and contributing to engineering excellence.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                onClick={() => handleNavClick("#contact")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                onClick={() => handleNavClick("#projects")}
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                View Projects
              </Button>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://linkedin.com/in/Prasad_maddikar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin />
              </a>
              <a
                href="https://github.com/Prasad_maddikar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github />
              </a>
              <a
                href="mailto:maddikarprasad@gmail.com"
                className="text-2xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail />
              </a>
            </div>
          </div>

          <div className="animate-in slide-in-from-right duration-1000">
            <div className="relative">
              <img
                src="https://pixabay.com/get/g31aecf42f2309d07c2f988d97cc7be84db134de4386229f10efd713951ed5756d4afc03fefdb0d40d85575c2d49021011639a2346fc05c7c9a552537ff9dc989_1280.jpg"
                alt="Modern tech background with futuristic digital elements"
                className="rounded-2xl shadow-2xl animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
