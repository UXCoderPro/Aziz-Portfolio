// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      fontFamily: {
        amiri: ['"Amiri"', "serif"],
        publicSans: ['"Public Sans"', "sans-serif"],
      },
      colors: {
        blue: {
          DEFAULT: "#000319", // your main blue
          200: "#3692de",
          300: "rgba(255, 255, 255, 0.125)",
          400: "#E4ECFF",
          light: "#3692DE", // light blue
          pink: "#F051A3", // pink
          sky: "#6DB5F9", // sky blue
        },
        text: {
          DEFAULT: "#FFFFFF", // your main Text
          light: "#BEC1DD", // light text
          dark: "#52638D", // dark text
        },
      },
      backgroundImage: {
        "purple-gradient":
          "linear-gradient(270deg, #A47CF3 -3.12%, #683FEA 103.08%)",
        "blue-gradient":
          "linear-gradient(270deg,#000924 0%,#061959 37.28%,#071955 60.56%,#000924 100%)",
        "blue-bg": "linear-gradient(180deg,#0A1E4F -14.4%,#000319 89.77%)",
        "btn-purple":
          "radial-gradient(53.25% 53.26% at 50.15% 97.4%, #A47CF3 0%, #683FEA 100%)",
        "btn-black": "linear-gradient(90deg,#161A31 3.4%,#06091F 100%)",
        "instagram-bg":
          "radial-gradient(111.73% 111.73% at 69.27% 94.6%, rgba(140,58,170,0.00) 64%, #8C3AAA 100%), radial-gradient(126.96% 126.96% at 6.47% 97.81%, #FA8F21 9%, #D82D7E 78%)",
        "sky-gradient":
          "linear-gradient(180deg,rgba(109,181,249,0.00) 12.5%,rgba(109,181,249,0.80) 27.5%,#6DB5F9 50%,rgba(109,181,249,0.80) 72.5%,rgba(109,181,249,0.00) 87.5%)",
        "project-bg":
          "radial-gradient(178.15% 81.78% at 76.95% 84.57%, #0A1E4F 0%, #020118 100%)",
        "blue-gradient-100":
          "linear-gradient(90deg, rgba(180, 217, 252, 0) 12.5%, #6db5f9 50%, rgba(180, 217, 252, 0) 87.5% )",
        "black-gradient":
          "linear-gradient(103deg,#04071D 16.66%,#0C0E23 81.61%)",
      },
      boxShadow: {
        "purple-custom":
          "0 1px 4px 0 rgba(255,255,255,0.40) inset, 0 -4px 0 0 rgba(0,0,0,0.20) inset, 0 4px 180px 0 #9917FF, 0 3px 0 0 rgba(0,0,0,0.07)",
      },
    },
  },
  plugins: [],
};
