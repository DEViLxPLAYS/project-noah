"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const bioNodes = [
    {
        title: "Lebanon",
        location: "Beirut, Lebanon",
        date: "1990s",
        description: "Born in Lebanon, beginnings in a world of complexity and cultural richness.",
    },
    {
        title: "Ottawa",
        location: "Ottawa, Canada",
        date: "2000s",
        description: "Immigrated to Canada, navigating a new life and finding voice in a foreign land.",
    },
    {
        title: "Toastmasters",
        location: "International",
        date: "2015+",
        description: "6+ awards in under 12 months. Mastered the art of oratory at Area and Division levels.",
    },
    {
        title: "Kinetic Pace",
        location: "Global",
        date: "2016",
        description: "Founded corporate training company, working with Mercedes-Benz, Adidas, Pinterest, and more.",
    },
    {
        title: "Lurnus Academy",
        location: "Online",
        date: "2018",
        description: "Built education empire: 100k+ students across 170+ countries in 55 languages.",
    },
    {
        title: "Dubai",
        location: "Dubai, UAE",
        date: "2020+",
        description: "Established Merriby Real Estate in the heart of luxury: Palm Jumeirah, Business Bay, Marina.",
    },
];

export default function Timeline() {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current || !containerRef.current) return;

        const section = sectionRef.current;
        const container = containerRef.current;
        const nodes = container.querySelectorAll(".bio-node");

        // Horizontal scroll animation
        const scrollTween = gsap.to(container, {
            x: () => -(container.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: () => `+=${container.scrollWidth}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            },
        });

        // Animate each node on reveal
        nodes.forEach((node, index) => {
            gsap.fromTo(
                node,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: node,
                        containerAnimation: scrollTween,
                        start: "left 80%",
                        end: "left 50%",
                        scrub: 1,
                    },
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative h-screen overflow-hidden bg-void-black" id="timeline">
            <div ref={containerRef} className="flex h-full items-center gap-20 px-20">
                {/* Section Header */}
                <div className="flex h-full min-w-[40vw] flex-col justify-center">
                    <h2 className="font-formula text-7xl font-black uppercase text-neuron-gold">
                        The Journey
                    </h2>
                    <p className="mt-6 max-w-xl font-satoshi text-lg text-white/70">
                        Born in Lebanon and raised in Ottawa, Noah Merriby rewired his life from a silence of
                        isolation into a voice that moves crowds. Award-winning Toastmaster, creator of Lurnus
                        Academy (100k+ students), author of <em>Why The F*ck Do We Exist</em>, and founder of
                        Merriby Real Estate in Dubai.
                    </p>
                </div>

                {/* Timeline Nodes */}
                {bioNodes.map((node, index) => (
                    <div
                        key={index}
                        className="bio-node glassmorphism gpu-accelerated group relative min-w-[400px] p-8 transition-all hover:border-neuron-gold"
                    >
                        <div className="mb-4 flex items-start justify-between">
                            <span className="font-formula text-5xl font-black text-neuron-gold">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="rounded-full bg-neuron-gold/10 px-3 py-1 font-satoshi text-xs uppercase tracking-wide text-neuron-gold">
                                {node.date}
                            </span>
                        </div>

                        <h3 className="font-formula text-3xl font-bold uppercase text-white">
                            {node.title}
                        </h3>
                        <p className="mt-2 font-satoshi text-sm text-neuron-gold/80">{node.location}</p>
                        <p className="mt-4 font-satoshi text-base leading-relaxed text-white/70">
                            {node.description}
                        </p>

                        {/* Decorative line */}
                        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-neuron-gold to-electric-indigo transition-all duration-500 group-hover:w-full"></div>
                    </div>
                ))}
            </div>
        </section>
    );
}
