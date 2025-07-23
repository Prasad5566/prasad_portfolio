import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "Full Stack Development Intern",
    company: "Kodnest",
    period: "Feb 2025",
    description:
      "Frontend development with React, backend development with Python and Java, building complete web applications.",
    color: "bg-blue-600",
    side: "right",
  },
  {
    title: "Web Development Intern",
    company: "aMSa",
    period: "Feb 2023 - March 2023",
    description:
      "Built responsive UIs and implemented order management system for hotel operations with real-time tracking capabilities.",
    color: "bg-green-600",
    side: "left",
  },
  {
    title: "Intra Intern",
    company: "BEC",
    period: "Oct 2022 - Nov 2022",
    description:
      "Learned web development fundamentals, HTML, CSS, JavaScript, and CSS frameworks like Bootstrap and Tailwind CSS.",
    color: "bg-purple-600",
    side: "right",
  },
];

const education = [
  {
    degree: "Bachelor of Engineering",
    field: "Computer Science Engineering",
    institution: "Basaveshwar Engineering College",
    period: "2021 - 2025",
    grade: "CGPA: 7.90/10",
    icon: "🎓",
  },
  {
    degree: "Class 12",
    field: "State Board",
    institution: "G.K.Malagonda P.U College",
    period: "2019 - 2021",
    grade: "84%",
    icon: "📚",
  },
  {
    degree: "Class 10",
    field: "State Board",
    institution: "S.V.M High School, Ilkal",
    period: "2017 - 2019",
    grade: "85.28%",
    icon: "🏫",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Professional Experience</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center mb-8">
                {exp.side === "right" ? (
                  <>
                    <div className="flex-1 pr-8 text-right">
                      <Card className="bg-white dark:bg-slate-800 shadow-lg">
                        <CardContent className="p-6">
                          <h4 className={`text-xl font-bold text-blue-600`}>{exp.title}</h4>
                          <div className="text-lg font-semibold">{exp.company}</div>
                          <div className="text-slate-600 dark:text-slate-400 mb-3">{exp.period}</div>
                          <p className="text-slate-700 dark:text-slate-300">{exp.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div
                      className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${exp.color} rounded-full border-4 border-white dark:border-slate-900`}
                    ></div>
                    <div className="flex-1 pl-8"></div>
                  </>
                ) : (
                  <>
                    <div className="flex-1 pr-8"></div>
                    <div
                      className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${exp.color} rounded-full border-4 border-white dark:border-slate-900`}
                    ></div>
                    <div className="flex-1 pl-8">
                      <Card className="bg-white dark:bg-slate-800 shadow-lg">
                        <CardContent className="p-6">
                          <h4 className={`text-xl font-bold text-green-600`}>{exp.title}</h4>
                          <div className="text-lg font-semibold">{exp.company}</div>
                          <div className="text-slate-600 dark:text-slate-400 mb-3">{exp.period}</div>
                          <p className="text-slate-700 dark:text-slate-300">{exp.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Education</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="bg-white dark:bg-slate-800 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl mb-4">{edu.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                  <div className="text-blue-600 font-semibold">{edu.field}</div>
                  <div className="text-slate-600 dark:text-slate-400 mt-2">{edu.institution}</div>
                  <div className="text-slate-500 dark:text-slate-500">{edu.period}</div>
                  <div className="text-lg font-bold text-green-600 mt-2">{edu.grade}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
