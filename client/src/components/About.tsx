export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-in fade-in-up duration-1000">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Coding environment with programming languages and development tools"
              className="rounded-2xl shadow-xl"
            />
          </div>

          <div className="animate-in fade-in-up duration-1000">
            <h3 className="text-2xl font-bold mb-6">Enthusiastic Computer Science Student</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              I'm a final-year Computer Science Engineering student at Basaveshwar Engineering College,
              Bagalkot, with a CGPA of 7.90/10. My journey in technology has been driven by curiosity
              and a passion for creating innovative solutions.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">LeetCode Problems</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">2nd</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">National Hackathon</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span>Bagalkot, Karnataka, India</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span>BE Computer Science Engineering (2021-2025)</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span>+91 6363838678</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
