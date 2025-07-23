import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, Database, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    color: "text-blue-600",
    skills: ["HTML & CSS", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: Server,
    color: "text-green-600",
    skills: ["Java", "Python", "Spring Boot", "Hibernate", "PHP"],
  },
  {
    title: "Database & Cloud",
    icon: Database,
    color: "text-purple-600",
    skills: ["MySQL", "SQL", "AWS", "Computer Networks"],
  },
  {
    title: "AI & ML",
    icon: Brain,
    color: "text-orange-600",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "OpenCV"],
  },
];

const softSkills = ["Leadership", "Decision Making", "Time Management", "Problem Solving"];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400">Technologies I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.title}
                className="bg-white dark:bg-slate-800 hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className={`${category.color} text-3xl mb-4`}>
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div key={skill} className="text-sm text-slate-600 dark:text-slate-400">
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Soft Skills */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-8">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill) => (
              <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
