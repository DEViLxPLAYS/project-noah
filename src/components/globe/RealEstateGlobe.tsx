"use client";

import { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";

const listings = [
    {
        id: 1,
        title: "Palm Jumeirah Penthouse",
        location: "Palm Jumeirah",
        price: "$4.2M",
        roi: "8.5% Annual ROI",
        position: [0.3, 0.4, 0.5],
    },
    {
        id: 2,
        title: "Business Bay Tower",
        location: "Business Bay",
        price: "$2.8M",
        roi: "9.2% Annual ROI",
        position: [-0.2, 0.3, 0.6],
    },
    {
        id: 3,
        title: "Dubai Marina Suite",
        location: "Dubai Marina",
        price: "$3.5M",
        roi: "7.8% Annual ROI",
        position: [0.1, 0.5, 0.4],
    },
];

function Globe() {
    const globeRef = useRef<THREE.Mesh>(null);

    return (
        <group>
            {/* Main Globe */}
            <Sphere ref={globeRef} args={[2, 64, 64]}>
                <meshStandardMaterial
                    color="#050505"
                    wireframe
                    transparent
                    opacity={0.3}
                    emissive="#D4AF37"
                    emissiveIntensity={0.1}
                />
            </Sphere>

            {/* Inner Glow */}
            <Sphere args={[1.98, 32, 32]}>
                <meshBasicMaterial color="#4B0082" transparent opacity={0.1} />
            </Sphere>

            {/* Location Markers */}
            {listings.map((listing) => (
                <group key={listing.id}>
                    {/* Marker Point */}
                    <mesh position={listing.position as [number, number, number]}>
                        <sphereGeometry args={[0.05, 16, 16]} />
                        <meshBasicMaterial color="#D4AF37" />
                    </mesh>

                    {/* Beam Effect */}
                    <mesh position={listing.position as [number, number, number]}>
                        <cylinderGeometry args={[0.01, 0.01, 0.5, 8]} />
                        <meshBasicMaterial color="#D4AF37" transparent opacity={0.5} />
                    </mesh>
                </group>
            ))}

            {/* Ambient Light */}
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#D4AF37" />
        </group>
    );
}

export default function RealEstateGlobe() {
    return (
        <section className="relative min-h-screen bg-gradient-to-b from-void-black to-electric-indigo/10 py-32 px-6" id="real-estate">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    {/* Globe Visualization */}
                    <div className="relative h-[600px]">
                        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                            <Suspense fallback={null}>
                                <Globe />
                                <OrbitControls
                                    enableZoom={false}
                                    enablePan={false}
                                    autoRotate
                                    autoRotateSpeed={0.5}
                                />
                            </Suspense>
                        </Canvas>

                        {/* Overlay Info */}
                        <div className="absolute top-10 left-10 glassmorphism p-6">
                            <p className="font-satoshi text-sm uppercase tracking-wide text-neuron-gold">
                                Focus: UAE
                            </p>
                            <p className="mt-2 font-formula text-2xl font-bold text-white">Dubai Real Estate</p>
                        </div>
                    </div>

                    {/* Listings Content */}
                    <div className="flex flex-col justify-center">
                        <h2 className="font-formula text-6xl font-black uppercase text-neuron-gold">
                            Merriby
                            <br />
                            Real Estate
                        </h2>
                        <p className="mt-6 font-satoshi text-xl text-white/80">
                            Premium listings in the heart of Dubai's luxury districts.
                        </p>

                        {/* Listings */}
                        <div className="mt-12 space-y-6">
                            {listings.map((listing) => (
                                <div
                                    key={listing.id}
                                    className="gpu-accelerated group glassmorphism cursor-pointer p-6 transition-all hover:scale-105 hover:border-neuron-gold"
                                >
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="font-formula text-2xl font-bold text-white">
                                                {listing.title}
                                            </h3>
                                            <p className="mt-1 font-satoshi text-sm text-neuron-gold/80">
                                                {listing.location}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-formula text-3xl font-black text-neuron-gold">
                                                {listing.price}
                                            </div>
                                            <div className="mt-1 font-satoshi text-xs text-white/60">
                                                {listing.roi}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover Effect */}
                                    <div className="mt-4 h-0 overflow-hidden transition-all group-hover:h-10">
                                        <button className="w-full bg-neuron-gold py-2 font-formula text-xs font-bold uppercase text-void-black">
                                            View Details →
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <button className="mt-8 bg-neuron-gold px-8 py-4 font-formula text-sm font-bold uppercase text-void-black transition-transform hover:scale-105">
                            Explore All Listings
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
