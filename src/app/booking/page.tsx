"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Mail, Phone, User, MessageSquare, Briefcase } from "lucide-react";

export default function BookingPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        alert("Thank you! Your booking request has been submitted. Noah will contact you soon.");
        setIsSubmitting(false);
        setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            date: "",
            message: "",
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen bg-[#030303] py-20">
            {/* Back Button */}
            <div className="container mx-auto px-4 md:px-6 mb-8">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-white/60 hover:text-neuron-gold transition-colors font-formula text-sm uppercase tracking-wide"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>
            </div>

            {/* Booking Form */}
            <div className="container mx-auto px-4 md:px-6 max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12"
                >
                    <h1 className="font-formula text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        Book a <span className="text-neuron-gold">Consultation</span>
                    </h1>
                    <p className="text-white/60 mb-8 font-satoshi">
                        Transform your vision into reality. Schedule a consultation with Noah Merriby.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2 font-formula uppercase tracking-wide">
                                <User className="w-4 h-4 inline mr-2" />
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-neuron-gold transition-colors"
                                placeholder="John Doe"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2 font-formula uppercase tracking-wide">
                                <Mail className="w-4 h-4 inline mr-2" />
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-neuron-gold transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2 font-formula uppercase tracking-wide">
                                <Phone className="w-4 h-4 inline mr-2" />
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-neuron-gold transition-colors"
                                placeholder="+1 (555) 000-0000"
                            />
                        </div>

                        {/* Service Type */}
                        <div>
                            <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-2 font-formula uppercase tracking-wide">
                                <Briefcase className="w-4 h-4 inline mr-2" />
                                Service Type
                            </label>
                            <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neuron-gold transition-colors"
                            >
                                <option value="" className="bg-void-black">Select a service...</option>
                                <option value="consulting" className="bg-void-black">Business Consulting</option>
                                <option value="speaking" className="bg-void-black">Speaking Engagement</option>
                                <option value="real-estate" className="bg-void-black">Real Estate Consultation</option>
                                <option value="coaching" className="bg-void-black">Personal Coaching</option>
                                <option value="partnership" className="bg-void-black">Partnership Opportunity</option>
                            </select>
                        </div>

                        {/* Preferred Date */}
                        <div>
                            <label htmlFor="date" className="block text-sm font-medium text-white/80 mb-2 font-formula uppercase tracking-wide">
                                <Calendar className="w-4 h-4 inline mr-2" />
                                Preferred Date
                            </label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neuron-gold transition-colors"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2 font-formula uppercase tracking-wide">
                                <MessageSquare className="w-4 h-4 inline mr-2" />
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-neuron-gold transition-colors resize-none"
                                placeholder="Tell us about your project or consultation needs..."
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full gpu-accelerated group relative overflow-hidden bg-neuron-gold px-8 py-4 font-formula text-sm font-bold uppercase tracking-wide text-void-black transition-all hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                            <span className="relative z-10">
                                {isSubmitting ? "Submitting..." : "Submit Booking Request"}
                            </span>
                            <div className="absolute inset-0 bg-electric-indigo opacity-0 transition-opacity group-hover:opacity-100"></div>
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
