import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        logoPulse: {
          "0%, 100%": { opacity: "0.7", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.12)" },
        },
        exhaust: {
          "0%": { opacity: "0.5", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1.25)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.7", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.12)" },
        },
        exhaustPulse: {
          "0%": { opacity: "0.5", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1.2)" },
        },
        rocketBounce: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.5" },
          "50%": { transform: "translateY(6px)", opacity: "1" },
        },
        orbRotate: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        orbPulse: {
          "0%, 100%": { opacity: "0.8", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
      },
      animation: {
        logoPulse: "logoPulse 2.4s ease-in-out infinite",
        exhaust: "exhaust 0.6s ease-in-out infinite alternate",
        "exhaust-delayed": "exhaust 0.6s ease-in-out 0.3s infinite alternate",
        glowPulse: "glowPulse 1.8s ease-in-out infinite",
        exhaustPulse: "exhaustPulse 0.6s ease-in-out infinite alternate",
        "exhaustPulse-delayed": "exhaustPulse 0.6s ease-in-out 0.3s infinite alternate",
        rocketBounce: "rocketBounce 1.8s ease-in-out infinite",
        orbRotate7: "orbRotate 7s linear infinite",
        orbRotate13r: "orbRotate 13s linear infinite reverse",
        orbRotate22: "orbRotate 22s linear infinite",
        orbPulse: "orbPulse 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
