import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        sm: "320px", //small screens(mobile devices)
        md: "768px", //medium screens(tablet devices)
        lg: "1024px", //large screens(laptop devices)
        xl: "1280px", //extra large screens(desktop devices)
        "2xl": "1536px", //extra extra large screens(desktop devices)
      },
    },
  },

  plugins: [],
  safelist: ["slick-dots", "slick-active"],
} satisfies Config;
