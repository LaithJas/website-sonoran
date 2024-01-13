/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "gray-500": "#4b638e",
                "gray-20": "#F8F4EB",
                "gray-50": "#EFE6E6",
                "gray-700": "#727572", //gray
                "blue-100": "#4b638e",
                "blue-200": "#1a3361",
                "secondary-500": "#242222",// balck
            },
            backgroundImage: (theme) => ({
                "gradient-yellowred":
                    //FF616A
                    "linear-gradient(90deg, #FFFFFF 0%, #FFC837 100%)",
                "mobile-home": "url('./assets/HomePageGraphic.png')",
            }),
            fontFamily: {
                dmsans: ["DM Sans", "sans-serif"],
                montserrat: ["Montserrat", "sans-serif"],
            },
            content: {
                evolvetext: "url('./assets/MVDTextBlue.png')",
                abstractwaves: "url('./assets/AbstractWaves.png')",
                sparkles: "url('./assets/Sparkles.png')",
                circles: "url('./assets/Circles.png')",
            },
        },
        screens: {
            xs: "480px",
            sm: "768px",
            md: "1060px",
        },
    },
    plugins: [],
};
