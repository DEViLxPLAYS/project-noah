"use client";

import Link from "next/link";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden" id="home">
            <HeroGeometric
                badge=""
                title1="Noah Merriby"
                title2="2CC - 7 Figure Club - 250K+ Students
                "
            >
                {/* CTA Button */}
                <div className="mt-8 flex justify-center items-center">
                    <Link href="/airbnb-partnership">
                        <button className="group relative overflow-hidden px-12 py-6 rounded-xl font-formula text-lg font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-105 bg-gradient-to-r from-[#FF5A5F] to-[#FF385C] hover:shadow-2xl hover:shadow-[#FF5A5F]/50 backdrop-blur-sm">
                            <span className="relative z-10">Airbnb Partnership Program</span>
                        </button>
                    </Link>
                </div>
            </HeroGeometric>
        </section>
    );
}
