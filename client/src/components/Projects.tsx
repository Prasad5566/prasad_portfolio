import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Sales-Savvy E-Commerce",
    description:
      "Full-stack e-commerce web application with modern shopping experience, built using ReactJS, Spring Boot, and MySQL.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    imageAlt: "Software development - e-commerce application interface with modern design",
    technologies: ["React.js", "Spring Boot", "MySQL"],
    period: "June 2025 - July 2025",
  },
  {
    title: "Learn-Sphere E-Learning",
    description:
      "E-learning platform with interactive modules, video content delivery, and progress tracking for enhanced learning experience.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    imageAlt: "Software development - e-learning platform with interactive educational interface",
    technologies: ["Web Development", "JavaScript", "CSS"],
    period: "Feb 2025 - May 2025",
  },
  {
    title: "AURORA AI Assistant",
    description:
      "AI personal assistant for task management, scheduling, and personalized conversational support with intelligent insights.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    imageAlt: "Professional developer workspace with AI and machine learning development environment",
    technologies: ["AI", "Machine Learning", "Python"],
    period: "Sep 2024 - Jan 2025",
  },
  {
    title: "License Plate Detection",
    description:
      "Computer vision system for automatic vehicle license plate detection and OCR text extraction for security monitoring.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    imageAlt: "Coding environment showing computer vision and machine learning algorithms",
    technologies: ["OpenCV", "Computer Vision", "Python"],
    period: "July 2024 - Aug 2024",
  },
  {
    title: "Hotel Management System",
    description:
      "Interactive digital menu and order management system for hotels with real-time processing and customer interface.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    imageAlt: "Modern tech background showing hospitality management software interface",
    technologies: ["PHP", "JavaScript", "MySQL"],
    period: "Feb 2022 - Mar 2022",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400">A showcase of my recent work</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="bg-slate-50 dark:bg-slate-900 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-500 mb-4">
                  {project.period}
                </div>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800 p-0">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-800 p-0">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
