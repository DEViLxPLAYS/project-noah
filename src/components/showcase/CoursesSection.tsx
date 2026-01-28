"use client";

const courses = [
    {
        title: "Neuroplasticity: The Ultimate Brain Rewiring Formula 3.0",
        description: "Reprogram habits with tactical daily rituals, accountability workflows, and mindset architecture.",
        students: "45,000+",
        duration: "8 weeks",
        languages: "12 languages",
    },
    {
        title: "Instagram Masterclass: Growth to Monetization",
        description: "Growth funnels, content systems, and monetization playbooks for modern creators.",
        students: "32,000+",
        duration: "6 weeks",
        languages: "8 languages",
    },
    {
        title: "LinkedIn Authority: Executive Presence",
        description: "Build thought leadership and executive presence on the world's professional network.",
        students: "28,000+",
        duration: "4 weeks",
        languages: "6 languages",
    },
];

export default function CoursesSection() {
    return (
        <section className="relative min-h-screen bg-void-black py-32 px-6" id="courses">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-20 text-center">
                    <h2 className="font-formula text-7xl font-black uppercase text-neuron-gold">
                        Lurnus Academy
                    </h2>
                    <p className="mt-6 font-satoshi text-2xl text-white/80">
                        Empowering 100k+ students across 170+ countries in 55 languages
                    </p>

                    {/* Metrics */}
                    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                        <div className="glassmorphism p-8">
                            <div className="font-formula text-5xl font-black text-neuron-gold">100k+</div>
                            <div className="mt-2 font-satoshi text-sm uppercase tracking-wide text-white/60">
                                Students Worldwide
                            </div>
                        </div>
                        <div className="glassmorphism p-8">
                            <div className="font-formula text-5xl font-black text-electric-indigo">170+</div>
                            <div className="mt-2 font-satoshi text-sm uppercase tracking-wide text-white/60">
                                Countries Reached
                            </div>
                        </div>
                        <div className="glassmorphism p-8">
                            <div className="font-formula text-5xl font-black text-neuron-gold">55</div>
                            <div className="mt-2 font-satoshi text-sm uppercase tracking-wide text-white/60">
                                Languages Available
                            </div>
                        </div>
                    </div>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="gpu-accelerated group relative overflow-hidden bg-gradient-to-br from-neuron-gold/10 to-electric-indigo/10 p-8 transition-all hover:scale-105"
                        >
                            {/* Course Number */}
                            <div className="mb-4 font-formula text-6xl font-black text-neuron-gold/20">
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            {/* Course Info */}
                            <h3 className="font-formula text-2xl font-bold uppercase leading-tight text-white">
                                {course.title}
                            </h3>
                            <p className="mt-4 font-satoshi text-base leading-relaxed text-white/70">
                                {course.description}
                            </p>

                            {/* Stats */}
                            <div className="mt-6 space-y-2 border-t border-white/10 pt-6">
                                <div className="flex justify-between font-satoshi text-sm">
                                    <span className="text-white/50">Students:</span>
                                    <span className="text-neuron-gold">{course.students}</span>
                                </div>
                                <div className="flex justify-between font-satoshi text-sm">
                                    <span className="text-white/50">Duration:</span>
                                    <span className="text-white">{course.duration}</span>
                                </div>
                                <div className="flex justify-between font-satoshi text-sm">
                                    <span className="text-white/50">Languages:</span>
                                    <span className="text-white">{course.languages}</span>
                                </div>
                            </div>

                            {/* CTA */}
                            <button className="mt-6 w-full bg-neuron-gold py-3 font-formula text-sm font-bold uppercase text-void-black transition-all hover:bg-electric-indigo">
                                Enroll Now
                            </button>

                            {/* Decorative gradient */}
                            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-neuron-gold opacity-0 blur-3xl transition-opacity group-hover:opacity-20"></div>
                        </div>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="mt-20 text-center">
                    <button className="glassmorphism gpu-accelerated px-12 py-5 font-formula text-base font-bold uppercase text-neuron-gold transition-transform hover:scale-105">
                        Explore All Courses →
                    </button>
                </div>
            </div>

            {/* Corporate Training Banner */}
            <div className="mx-auto mt-32 max-w-7xl">
                <div className="glassmorphism relative overflow-hidden p-12">
                    <h3 className="font-formula text-4xl font-black uppercase text-white">
                        Corporate Training
                    </h3>
                    <p className="mt-4 max-w-2xl font-satoshi text-lg text-white/70">
                        Trusted by world-class organizations: Mercedes-Benz, Adidas, SurveyMonkey, Pinterest, Lyft.
                    </p>
                    <button className="mt-6 bg-neuron-gold px-8 py-4 font-formula text-sm font-bold uppercase text-void-black transition-transform hover:scale-105">
                        Request Corporate Program
                    </button>

                    {/* Decorative */}
                    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-electric-indigo opacity-10 blur-3xl"></div>
                </div>
            </div>
        </section>
    );
}
