import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navigation from "@/components/navigation/Navigation";

// Google Fonts - professional and high-quality
const bebasNeue = Bebas_Neue({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-formula",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-satoshi",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Noah Merriby — State of Creation | Speaker, Author, Educator, Dubai Real Estate",
    description: "Noah Merriby — author of Why The F*ck Do We Exist, founder of Lurnus Academy (100k+ students), and Merriby Real Estate (Dubai). Courses, books & investment advisory.",
    keywords: ["Noah Merriby", "Speaker", "Author", "Educator", "Real Estate Dubai", "Neuroplasticity", "Purpose"],
    authors: [{ name: "Noah Merriby" }],
    icons: {
        icon: "/icon.png",
        apple: "/apple-icon.png",
    },
    openGraph: {
        title: "Noah Merriby — State of Creation",
        description: "Author, Educator, Speaker & Real Estate Leader",
        type: "website",
        siteName: "State of Creation",
        images: [
            {
                url: "/icon.png",
                width: 512,
                height: 512,
                alt: "Noah Merriby",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Noah Merriby — State of Creation",
        description: "Author, Educator, Speaker & Real Estate Leader",
        images: ["/icon.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: "Noah Merriby",
                            url: "https://noahmerriby.com",
                            jobTitle: "Author; Educator; Founder, Merriby Real Estate",
                            sameAs: [
                                "https://twitter.com/noahmerriby",
                                "https://linkedin.com/in/noahmerriby"
                            ],
                        }),
                    }}
                />
            </head>
            <body>
                <Navigation />
                <SmoothScroll>{children}</SmoothScroll>
            </body>
        </html>
    );
}
