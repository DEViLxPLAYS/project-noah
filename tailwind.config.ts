import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                void: {
                    black: '#050505',
                },
                neuron: {
                    gold: '#D4AF37',
                },
                electric: {
                    indigo: '#4B0082',
                },
            },
            fontFamily: {
                formula: ['var(--font-formula)', 'sans-serif'],
                satoshi: ['var(--font-satoshi)', 'sans-serif'],
            },
            letterSpacing: {
                'ultra-tight': '-0.05em',
                'mega-wide': '0.15em',
            },
        },
    },
    plugins: [],
};

export default config;
