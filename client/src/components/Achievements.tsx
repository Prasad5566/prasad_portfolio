import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    title: "Go for Gold",
    description: "Achieved gold level in iAspire contest by Accenture",
    icon: "🥇",
    gradient: "from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20",
    border: "border-green-200 dark:border-green-700",
  },
  {
    title: "LeetCode Expert",
    description: "Solved 500+ problems on LeetCode platform",
    icon: "💻",
    gradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
    border: "border-purple-200 dark:border-purple-700",
  },
  {
    title: "AI Certification",
    description: "Infosys Springboard: AI, NLP, Deep Learning, Computer Vision",
    icon: "🤖",
    gradient: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
    border: "border-blue-200 dark:border-blue-700",
  },
  {
    title: "Cybersecurity",
    description: "Coursera certification in Cybersecurity",
    icon: "🔒",
    gradient: "from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20",
    border: "border-red-200 dark:border-red-700",
  },
  {
    title: "Programming",
    description: "Spoken Tutorial: Linux, Python, C programming",
    icon: "🐧",
    gradient: "from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20",
    border: "border-green-200 dark:border-green-700",
  },
];

export function Achievements() {
  return (
    <section className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Achievements & Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br ${achievement.gradient} border ${achievement.border} hover:shadow-lg transition-shadow duration-300`}
            >
              <CardContent className="p-6">
                <div className="text-3xl mb-4">{achievement.icon}</div>
                <h4 className="text-xl font-bold mb-2">{achievement.title}</h4>
                <p className="text-slate-600 dark:text-slate-400">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
