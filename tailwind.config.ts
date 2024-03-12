import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            container : {
                center : true,
            },
            colors : {
                "primary" : "#1FAE12",
                "secondary" : "#0A2C04",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "home" : "url('/images/bg-inicio.png')",
                "homecel" : "url('/images/bg-iniciocel.png')",
                "about" : "url('/images/bg-about.svg')",
                "aboutcel" : "url('/images/bg-aboutcel.svg')",
                "footer" : "url('/images/bg-footer.png')",
                "turtle" : "url('/images/turtle.svg')",
                "hacemos" : "url('/images/bg-hacemos.png')",

            },
        },
    },
    plugins: [],
};
export default config;
