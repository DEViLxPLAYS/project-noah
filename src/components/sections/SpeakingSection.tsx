"use client";

import { useState } from "react";

export default function SpeakingSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        organization: "",
        eventType: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In production, integrate with Calendly or send to API
        console.log("Booking request:", formData);
        alert("Booking request submitted! We'll be in touch soon.");
    };

    return (
        <section className="relative min-h-screen bg-void-black py-32 px-6" id="speaking">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    {/* Left: Speaking Info */}
                    <div>
                        <h2 className="font-formula text-7xl font-black uppercase text-neuron-gold">
                            Speaking
                            <br />& Keynotes
                        </h2>

                        <p className="mt-6 font-satoshi text-xl leading-relaxed text-white/80">
                            Energetic keynotes (60–90 min), executive workshops (half/full day), and corporate
                            training modules that transform mindsets and drive measurable growth.
                        </p>

                        {/* Speaking Topics */}
                        <div className="mt-12 space-y-4">
                            <div className="glassmorphism p-6">
                                <h3 className="font-formula text-xl font-bold uppercase text-neuron-gold">
                                    Neuroplasticity & Leadership
                                </h3>
                                <p className="mt-2 font-satoshi text-sm text-white/60">
                                    Rewire your organization's mindset for exponential growth.
                                </p>
                            </div>

                            <div className="glassmorphism p-6">
                                <h3 className="font-formula text-xl font-bold uppercase text-neuron-gold">
                                    Creating Purpose
                                </h3>
                                <p className="mt-2 font-satoshi text-sm text-white/60">
                                    From existential drift to intentional creation.
                                </p>
                            </div>

                            <div className="glassmorphism p-6">
                                <h3 className="font-formula text-xl font-bold uppercase text-neuron-gold">
                                    Building Personal Brands
                                </h3>
                                <p className="mt-2 font-satoshi text-sm text-white/60">
                                    LinkedIn, Instagram, and modern influence architecture.
                                </p>
                            </div>
                        </div>

                        {/* Press Kit Download */}
                        <button className="mt-8 glassmorphism gpu-accelerated w-full py-4 font-formula text-sm font-bold uppercase text-neuron-gold transition-transform hover:scale-105">
                            Download Press Kit & Speaker Reel ↓
                        </button>
                    </div>

                    {/* Right: Booking Form */}
                    <div className="glassmorphism p-10">
                        <h3 className="font-formula text-3xl font-bold uppercase text-white">
                            Book Noah
                        </h3>
                        <p className="mt-2 font-satoshi text-sm text-white/60">
                            Fill out the form below to request a speaking engagement.
                        </p>

                        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                            <div>
                                <label className="font-satoshi text-sm uppercase tracking-wide text-white/70">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="mt-2 w-full border border-white/10 bg-void-black px-4 py-3 font-satoshi text-white focus:border-neuron-gold focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="font-satoshi text-sm uppercase tracking-wide text-white/70">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="mt-2 w-full border border-white/10 bg-void-black px-4 py-3 font-satoshi text-white focus:border-neuron-gold focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="font-satoshi text-sm uppercase tracking-wide text-white/70">
                                    Organization
                                </label>
                                <input
                                    type="text"
                                    value={formData.organization}
                                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                                    className="mt-2 w-full border border-white/10 bg-void-black px-4 py-3 font-satoshi text-white focus:border-neuron-gold focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="font-satoshi text-sm uppercase tracking-wide text-white/70">
                                    Event Type *
                                </label>
                                <select
                                    required
                                    value={formData.eventType}
                                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                                    className="mt-2 w-full border border-white/10 bg-void-black px-4 py-3 font-satoshi text-white focus:border-neuron-gold focus:outline-none"
                                >
                                    <option value="">Select...</option>
                                    <option value="keynote">Keynote (60-90 min)</option>
                                    <option value="workshop-half">Workshop (Half Day)</option>
                                    <option value="workshop-full">Workshop (Full Day)</option>
                                    <option value="corporate">Corporate Training Module</option>
                                </select>
                            </div>

                            <div>
                                <label className="font-satoshi text-sm uppercase tracking-wide text-white/70">
                                    Message *
                                </label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="mt-2 w-full border border-white/10 bg-void-black px-4 py-3 font-satoshi text-white focus:border-neuron-gold focus:outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-neuron-gold py-4 font-formula text-sm font-bold uppercase text-void-black transition-transform hover:scale-105"
                            >
                                Submit Booking Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
