/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#0A0E17",
          soft: "#0F1420",
          surface: "#12172A",
        },
        cyan: {
          glow: "#22D3EE",
        },
        violet: {
          glow: "#A78BFA",
        },
        amber: {
          glow: "#FBBF24",
        },
        mint: {
          glow: "#34D399",
        },
        ink: {
          primary: "#E6EDF3",
          muted: "#8B96A5",
          faint: "#5B6578",
        },
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "neon-cyan": "0 0 24px -4px rgba(34, 211, 238, 0.45)",
        "neon-violet": "0 0 24px -4px rgba(167, 139, 250, 0.45)",
        "neon-amber": "0 0 24px -4px rgba(251, 191, 36, 0.4)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(10,14,23,0) 0%, #0A0E17 90%), linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "100% 100%, 32px 32px, 32px 32px",
      },
      keyframes: {
        typing: {
          "0%": { width: "0ch" },
          "100%": { width: "var(--type-width, 40ch)" },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        typing: "typing 3.2s steps(40, end) forwards",
        blink: "blink 0.9s step-end infinite",
        "float-slow": "floatSlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
