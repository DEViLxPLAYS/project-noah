import Hero from "@/components/hero/Hero";
import Timeline from "@/components/timeline/Timeline";
import BookShowcase from "@/components/showcase/BookShowcase";
import CoursesSection from "@/components/showcase/CoursesSection";
import RealEstateGlobe from "@/components/globe/RealEstateGlobe";
import SpeakingSection from "@/components/sections/SpeakingSection";
import Terminal from "@/components/terminal/Terminal";
import Footer from "@/components/sections/Footer";

export default function Home() {
    return (
        <main className="relative">
            <Hero />
            <Timeline />
            <BookShowcase />
            <CoursesSection />
            <RealEstateGlobe />
            <SpeakingSection />
            <Terminal />
            <Footer />
        </main>
    );
}
