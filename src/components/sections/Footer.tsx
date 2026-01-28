"use client";

export default function Footer() {
    return (
        <footer className="relative bg-void-black py-20 px-6" id="contact">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <h3 className="font-formula text-3xl font-black uppercase text-neuron-gold">
                            State of
                            <br />
                            Creation
                        </h3>
                        <p className="mt-4 font-satoshi text-sm text-white/60">
                            Noah Merriby — Architect of Meaning
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-formula text-sm font-bold uppercase tracking-wide text-white">
                            Explore
                        </h4>
                        <ul className="mt-4 space-y-2 font-satoshi text-sm text-white/60">
                            <li>
                                <a href="#" className="transition-colors hover:text-neuron-gold">
                                    About Noah
                                </a>
                            </li>
                            <li>
                                <a href="#" className="transition-colors hover:text-neuron-gold">
                                    Lurnus Academy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="transition-colors hover:text-neuron-gold">
                                    Real Estate
                                </a>
                            </li>
                            <li>
                                <a href="#" className="transition-colors hover:text-neuron-gold">
                                    Speaking
                                </a>
                            </li>
                            <li>
                                <a href="#" className="transition-colors hover:text-neuron-gold">
                                    The Book
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-formula text-sm font-bold uppercase tracking-wide text-white">
                            Connect
                        </h4>
                        <ul className="mt-4 space-y-2 font-satoshi text-sm text-white/60">
                            <li>
                                <a href="#" className="transition-colors hover:text-neuron-gold">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" className="transition-colors hover:text-neuron-gold">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="#" className="transition-colors hover:text-neuron-gold">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="mailto:hello@noahmerriby.com" className="transition-colors hover:text-neuron-gold">
                                    hello@noahmerriby.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-formula text-sm font-bold uppercase tracking-wide text-white">
                            Join the Waitlist
                        </h4>
                        <p className="mt-2 font-satoshi text-xs text-white/60">
                            100k+ creators, thinkers, and builders.
                        </p>
                        <form className="mt-4">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full border border-white/10 bg-transparent px-4 py-3 font-satoshi text-sm text-white placeholder:text-white/30 focus:border-neuron-gold focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="mt-2 w-full bg-neuron-gold py-3 font-formula text-xs font-bold uppercase text-void-black transition-opacity hover:opacity-90"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Legal */}
                <div className="mt-16 flex flex-col items-center justify-between border-t border-white/10 pt-8 text-center font-satoshi text-xs text-white/40 md:flex-row">
                    <p>&copy; 2026 Noah Merriby. All rights reserved.</p>
                    <div className="mt-4 flex gap-6 md:mt-0">
                        <a href="#" className="transition-colors hover:text-neuron-gold">
                            Privacy Policy
                        </a>
                        <a href="#" className="transition-colors hover:text-neuron-gold">
                            Terms of Service
                        </a>
                        <a href="#" className="transition-colors hover:text-neuron-gold">
                            Cookie Settings
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
