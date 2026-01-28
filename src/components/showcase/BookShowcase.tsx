"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function BookShowcase() {
    const sectionRef = useRef<HTMLElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        if (!sectionRef.current) return;

        const trigger = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            pin: ".book-container",
            onUpdate: (self) => {
                setScrollProgress(self.progress);
            },
        });

        return () => {
            trigger.kill();
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative h-[300vh] bg-gradient-to-b from-void-black to-electric-indigo/20" id="books">
            <div className="book-container sticky top-0 flex h-screen items-center justify-center px-6">
                <div className="grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Book Visual */}
                    <div className="relative flex items-center justify-center">
                        <div
                            className="gpu-accelerated relative"
                            style={{
                                transform: `perspective(1000px) rotateY(${scrollProgress * 30 - 15}deg) scale(${1 + scrollProgress * 0.2})`,
                                transition: "transform 0.1s ease-out",
                            }}
                        >
                            {/* 3D Book Effect */}
                            <div className="relative h-[500px] w-[350px]">
                                {/* Book Cover */}
                                <div className="absolute inset-0 overflow-hidden rounded-lg shadow-2xl shadow-neuron-gold/20">
                                    <div className="h-full w-full bg-gradient-to-br from-neuron-gold via-electric-indigo to-neuron-gold p-1">
                                        <div className="flex h-full w-full items-center justify-center bg-void-black">
                                            <div className="text-center p-8">
                                                <h3 className="font-formula text-4xl font-black uppercase text-neuron-gold">
                                                    Why The F*ck
                                                    <br />
                                                    Do We Exist?
                                                </h3>
                                                <p className="mt-4 font-satoshi text-sm text-white/60">Noah Merriby</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Book Spine */}
                                <div
                                    className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-neuron-gold/80 to-neuron-gold"
                                    style={{
                                        transform: "rotateY(-90deg)",
                                        transformOrigin: "left center",
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    {/* Book Content */}
                    <div className="flex flex-col justify-center">
                        <h2 className="font-formula text-6xl font-black uppercase leading-tight text-neuron-gold">
                            Why The F*ck
                            <br />
                            Do We Exist?
                        </h2>

                        <p className="mt-6 font-satoshi text-xl leading-relaxed text-white/80">
                            A disruptive take on purpose: <strong className="text-neuron-gold">don&apos;t search for meaning—create it</strong>. A bridge between logotherapy and modern execution.
                        </p>

                        <blockquote className="mt-8 border-l-4 border-neuron-gold pl-6 font-satoshi italic text-white/60">
                            &quot;Purpose is not discovered in the stars or in ancient texts. It is forged in the
                            crucible of daily action, deliberate choice, and relentless refinement.&quot;
                        </blockquote>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <button className="gpu-accelerated bg-neuron-gold px-8 py-4 font-formula text-sm font-bold uppercase text-void-black transition-transform hover:scale-105">
                                Buy the Book
                            </button>
                            <button className="glassmorphism gpu-accelerated px-8 py-4 font-formula text-sm font-bold uppercase text-white transition-transform hover:scale-105">
                                Read Excerpt
                            </button>
                        </div>

                        {/* Progress Indicator */}
                        <div className="mt-12">
                            <div className="h-1 w-full bg-white/10">
                                <div
                                    className="h-full bg-gradient-to-r from-neuron-gold to-electric-indigo transition-all"
                                    style={{ width: `${scrollProgress * 100}%` }}
                                ></div>
                            </div>
                            <p className="mt-2 font-satoshi text-xs text-white/40">
                                Scroll to explore · {Math.round(scrollProgress * 100)}%
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
