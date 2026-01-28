"use client";

import Link from "next/link";
import NextImage from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, TrendingUp, Users, DollarSign, Globe, Calendar } from "lucide-react";

export default function AirbnbPartnershipPage() {
    const benefits = [
        {
            icon: DollarSign,
            title: "Revenue Optimization",
            description: "Maximize your property's earning potential with strategic pricing and occupancy management."
        },
        {
            icon: TrendingUp,
            title: "Market Insights",
            description: "Access exclusive data and analytics from 250K+ students and global real estate network."
        },
        {
            icon: Users,
            title: "Guest Management",
            description: "Professional guest screening, communication, and 5-star review optimization."
        },
        {
            icon: Globe,
            title: "Global Reach",
            description: "Leverage Noah's international network across 170+ countries for maximum visibility."
        }
    ];

    const programFeatures = [
        "Complete property listing optimization & photography",
        "Dynamic pricing algorithm for maximum ROI",
        "24/7 guest communication & support",
        "Professional cleaning & maintenance coordination",
        "Legal compliance & insurance guidance",
        "Performance analytics & monthly reporting",
        "Access to exclusive host community & resources",
        "Priority support from Noah Merriby's team"
    ];

    return (
        <div className="min-h-screen bg-black">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF5A5F]/20 via-black to-[#FF385C]/10" />

                {/* Back Button */}
                <div className="absolute top-6 left-6 z-20">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-white/60 hover:text-[#FF5A5F] transition-colors font-formula text-sm uppercase tracking-wide"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>

                <div className="relative z-10 container mx-auto px-4 md:px-6 text-center pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center"
                    >
                        {/* Airbnb Logo */}
                        <div className="relative w-32 h-32 md:w-40 md:h-40 mb-8">
                            <NextImage
                                src="https://i.postimg.cc/htPrdZtp/Untitled-design-(1).png"
                                alt="Airbnb Partnership"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                        <h1 className="font-formula text-5xl sm:text-6xl md:text-8xl font-black uppercase text-[#FFD700] mb-6 tracking-tight">
                            Airbnb Partnership
                            <br />
                            Program
                        </h1>
                        <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto font-satoshi">
                            Transform your property into a high-performing asset with expert guidance from Noah Merriby
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="relative py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    {/* Program Overview */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-20"
                    >
                        <div className="glassmorphism p-8 md:p-12 rounded-2xl">
                            <h2 className="font-formula text-3xl md:text-4xl font-bold text-white mb-6">
                                Why Partner With Noah Merriby?
                            </h2>
                            <p className="text-lg text-white/70 leading-relaxed font-satoshi mb-6">
                                With years of experience in Dubai's luxury real estate market and a proven track record of
                                building global communities (100k+ students across 170+ countries), Noah brings unparalleled
                                expertise to Airbnb property management. This partnership program combines cutting-edge technology,
                                market intelligence, and hands-on expertise to help property owners achieve exceptional returns.
                            </p>
                            <p className="text-lg text-white/70 leading-relaxed font-satoshi">
                                Whether you're a first-time host or managing multiple properties, our comprehensive approach
                                ensures your Airbnb business operates at peak performance while you focus on what matters most.
                            </p>
                        </div>
                    </motion.div>

                    {/* Benefits Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mb-20"
                    >
                        <h2 className="font-formula text-3xl md:text-4xl font-bold text-[#FF5A5F] mb-12 text-center">
                            Partnership Benefits
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    className="glassmorphism p-8 rounded-xl hover:border-[#FF5A5F] transition-all group"
                                >
                                    <benefit.icon className="w-12 h-12 text-[#FF5A5F] mb-4 group-hover:scale-110 transition-transform" />
                                    <h3 className="font-formula text-2xl font-bold text-white mb-3">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-white/70 font-satoshi">
                                        {benefit.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Program Features */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mb-20"
                    >
                        <h2 className="font-formula text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                            What's Included
                        </h2>
                        <div className="glassmorphism p-8 md:p-12 rounded-2xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {programFeatures.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.7 + index * 0.05 }}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2 className="w-6 h-6 text-[#FF5A5F] flex-shrink-0 mt-1" />
                                        <span className="text-white/80 font-satoshi text-lg">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="mb-20"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="glassmorphism p-8 rounded-xl text-center border-[#FF5A5F]/20">
                                <div className="font-formula text-5xl font-black text-[#FF5A5F] mb-2">250K+</div>
                                <div className="text-white/60 font-satoshi uppercase tracking-wide text-sm">Students Worldwide</div>
                            </div>
                            <div className="glassmorphism p-8 rounded-xl text-center border-[#FF5A5F]/20">
                                <div className="font-formula text-5xl font-black text-[#FFD700] mb-2">170+</div>
                                <div className="text-white/60 font-satoshi uppercase tracking-wide text-sm">Countries Reached</div>
                            </div>
                            <div className="glassmorphism p-8 rounded-xl text-center border-[#FF5A5F]/20">
                                <div className="font-formula text-5xl font-black text-[#FF5A5F] mb-2">7-Fig</div>
                                <div className="text-white/60 font-satoshi uppercase tracking-wide text-sm">Club Member</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="text-center"
                    >
                        <div className="glassmorphism p-12 rounded-2xl bg-gradient-to-r from-[#FF5A5F]/10 to-[#FF385C]/10 border-[#FF5A5F]/20">
                            <Calendar className="w-16 h-16 text-[#FF5A5F] mx-auto mb-6" />
                            <h2 className="font-formula text-3xl md:text-4xl font-bold text-white mb-4">
                                Ready to Get Started?
                            </h2>
                            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto font-satoshi">
                                Schedule a consultation with Noah to discuss how the Airbnb Partnership Program
                                can transform your property investment.
                            </p>
                            <Link href="/booking">
                                <button className="bg-gradient-to-r from-[#FF5A5F] to-[#FF385C] px-12 py-5 rounded-xl font-formula text-lg font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF5A5F]/50">
                                    Book a Consultation
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
