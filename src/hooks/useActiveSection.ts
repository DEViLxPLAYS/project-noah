"use client";

import { useEffect, useState } from "react";

export function useActiveSection() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                "home",
                "timeline",
                "books",
                "courses",
                "real-estate",
                "speaking",
                "contact"
            ];

            const scrollPosition = window.scrollY + 100; // Offset for navbar height

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        handleScroll(); // Call once on mount
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return activeSection;
}
