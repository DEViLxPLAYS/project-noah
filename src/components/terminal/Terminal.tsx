"use client";

import { useState } from "react";

export default function Terminal() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([
        {
            role: "assistant",
            content: "Welcome to the Vibe Terminal. Ask me about purpose, neuroplasticity, or your next move.",
        },
    ]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = input.trim();
        setInput("");
        setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
        setIsLoading(true);

        // Simulate AI response (in production, connect to reasoning model API)
        setTimeout(() => {
            const response = generateResponse(userMessage);
            setMessages((prev) => [...prev, { role: "assistant", content: response }]);
            setIsLoading(false);
        }, 1500);
    };

    const generateResponse = (query: string): string => {
        const lowerQuery = query.toLowerCase();

        if (lowerQuery.includes("purpose") || lowerQuery.includes("why") || lowerQuery.includes("exist")) {
            return `Your purpose isn't hiding in the cosmos—it's forged in action.\n\n**Framework:**\n1. **Discover** - Identify what drains vs. energizes you\n2. **Construct** - Build daily rituals around energy sources\n3. **Anchor** - Lock purpose into measurable outcomes\n\n**Micro-action:** Tonight, list 3 moments this week when you felt fully alive. That's your compass.`;
        }

        if (lowerQuery.includes("neuroplasticity") || lowerQuery.includes("brain") || lowerQuery.includes("habit")) {
            return `Your brain is plastic—rewire it deliberately.\n\n**3-Day Protocol:**\n- Day 1: Identify ONE habit to break. Write why it no longer serves you.\n- Day 2: Replace it with a 2-minute ritual. Set a timer. Do it.\n- Day 3: Stack the ritual onto an existing habit (e.g., after coffee).\n\nRepetition builds neural highways. Start small. Scale relentlessly.`;
        }

        if (lowerQuery.includes("course") || lowerQuery.includes("academy") || lowerQuery.includes("learn")) {
            return `Lurnus Academy has transformed 100k+ lives across 170+ countries.\n\n**Top picks:**\n- Neuroplasticity Formula 3.0\n- Instagram Growth Masterclass\n- LinkedIn Authority Builder\n\nReady to start? Explore courses above or book a consultation.`;
        }

        return `Interesting question. Here's the truth: clarity comes from creation, not contemplation.\n\n**Next step:** Take one bold action today toward your goal. Document the result. Adjust tomorrow.\n\nNeed something specific? Ask about purpose, habits, or growth strategies.`;
    };

    return (
        <section className="relative min-h-screen bg-gradient-to-b from-void-black to-electric-indigo/20 py-32 px-6">
            <div className="mx-auto max-w-5xl">
                <div className="text-center">
                    <h2 className="font-formula text-7xl font-black uppercase text-neuron-gold">
                        Vibe Code
                        <br />
                        Your Future
                    </h2>
                    <p className="mt-6 font-satoshi text-xl text-white/70">
                        Ask the terminal about purpose, neuroplasticity, or your next bold move.
                    </p>
                </div>

                {/* Terminal Window */}
                <div className="mt-12 overflow-hidden border border-neuron-gold/30 bg-void-black shadow-2xl shadow-neuron-gold/10">
                    {/* Terminal Header */}
                    <div className="flex items-center gap-2 border-b border-neuron-gold/30 bg-neuron-gold/10 px-4 py-3">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        <span className="ml-4 font-satoshi text-xs text-neuron-gold">
                            terminal@state-of-creation
                        </span>
                    </div>

                    {/* Terminal Content */}
                    <div className="h-[500px] overflow-y-auto p-6 font-mono text-sm">
                        {messages.map((msg, idx) => (
                            <div key={idx} className="mb-4">
                                <div className="mb-1 font-satoshi text-xs uppercase tracking-wide text-neuron-gold/70">
                                    {msg.role === "user" ? "You:" : "Noah's Terminal:"}
                                </div>
                                <div className="whitespace-pre-wrap font-satoshi text-white/90">
                                    {msg.content}
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="mb-4 font-satoshi text-white/50">
                                <span className="animate-pulse">Thinking...</span>
                            </div>
                        )}
                    </div>

                    {/* Terminal Input */}
                    <form onSubmit={handleSubmit} className="border-t border-neuron-gold/30 bg-void-black p-4">
                        <div className="flex items-center gap-2">
                            <span className="font-satoshi text-neuron-gold">$</span>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type your question..."
                                className="flex-1 bg-transparent font-satoshi text-white outline-none placeholder:text-white/30"
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="bg-neuron-gold px-4 py-2 font-formula text-xs font-bold uppercase text-void-black transition-opacity hover:opacity-80 disabled:opacity-50"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
