import type { Config } from "tailwindcss";

/**
 * Hello Clinica — Design System (FROZEN, per Clinica_File_04_Design_System.md
 * and PROJECT_CONSTITUTION.md). These values must not be altered by future
 * phases. Components reference these tokens only — no inline hex values.
 */
const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem", // 24px — mobile gutter
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Brand palette (frozen)
        "medical-blue": "#0F4C81",
        "deep-blue": "#1E3A5F",
        "accent-blue": "#4FC3F7",
        "brand-bg": "#F8FAFC",

        // Shadcn UI semantic tokens mapped to brand palette via CSS variables
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      borderRadius: {
        // Cards = 24px (frozen); buttons = "rounded XL"
        card: "24px",
        xl: "calc(var(--radius))",
        lg: "calc(var(--radius) - 2px)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
      },
      boxShadow: {
        // Card shadow + hover lift (frozen "Shadow Large" + "Hover Lift")
        card: "0 10px 30px -12px rgba(15, 76, 129, 0.18)",
        "card-hover": "0 24px 48px -16px rgba(15, 76, 129, 0.28)",
        focus: "0 0 0 3px rgba(79, 195, 247, 0.45)",
      },
      backgroundImage: {
        // Frozen gradient
        "brand-gradient":
          "linear-gradient(135deg, #0F4C81 0%, #1E3A5F 55%, #4FC3F7 100%)",
      },
      spacing: {
        // 8px grid extensions for section rhythm (48 / 80 / 120)
        "section-mobile": "48px",
        "section-tablet": "80px",
        "section-desktop": "120px",
      },
      transitionDuration: {
        // Page transitions = 300ms (frozen)
        page: "300ms",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
