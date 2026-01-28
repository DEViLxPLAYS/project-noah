"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Timeline", href: "#timeline" },
    { name: "Books", href: "#books" },
    { name: "Courses", href: "#courses" },
    { name: "Real Estate", href: "#real-estate" },
    { name: "Speaking", href: "#speaking" },
    { name: "Contact", href: "#contact" },
];

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const activeSection = useActiveSection();
    const router = useRouter();
    const pathname = usePathname();

    const scrollToSection = (href: string) => {
        const sectionId = href.replace("#", "");

        // If we're not on the home page, navigate to home page with hash
        if (pathname !== "/") {
            router.push(`/${href}`);
            setIsMobileMenuOpen(false);
            return;
        }

        // If we're on home page, scroll to section
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            {/* Desktop Navigation */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
                <div className="bg-void-black/60 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 shadow-2xl">
                    <div className="flex items-center gap-2">
                        {navLinks.map((link) => {
                            const sectionId = link.href.replace("#", "");
                            const isActive = activeSection === sectionId;
                            return (
                                <button
                                    key={link.name}
                                    onClick={() => scrollToSection(link.href)}
                                    className="relative px-6 py-2.5 rounded-full font-formula text-sm font-medium uppercase tracking-wide transition-all"
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-gradient-to-r from-neuron-gold to-electric-indigo rounded-full"
                                            initial={false}
                                            transition={{
                                                type: "spring",
                                                stiffness: 380,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                    <span
                                        className={`relative z-10 ${isActive
                                            ? "text-void-black font-bold"
                                            : "text-white/70 hover:text-white"
                                            }`}
                                    >
                                        {link.name}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 md:hidden bg-void-black/80 backdrop-blur-md border-b border-white/10">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="font-formula text-xl font-bold text-neuron-gold tracking-tight">
                            NOAH
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-white/80 hover:text-neuron-gold transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed top-16 left-0 right-0 md:hidden z-50 bg-void-black/95 backdrop-blur-lg border-b border-white/10"
                    >
                        <div className="container mx-auto px-4 py-6">
                            <div className="flex flex-col gap-2">
                                {navLinks.map((link, index) => {
                                    const sectionId = link.href.replace("#", "");
                                    const isActive = activeSection === sectionId;
                                    return (
                                        <motion.button
                                            key={link.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            onClick={() => scrollToSection(link.href)}
                                            className={`relative px-6 py-3 rounded-full font-formula text-lg font-medium uppercase tracking-wide text-left transition-all ${isActive
                                                ? "bg-gradient-to-r from-neuron-gold to-electric-indigo text-void-black font-bold"
                                                : "text-white/70 hover:text-white hover:bg-white/5"
                                                }`}
                                        >
                                            {link.name}
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
