import type { Config } from "tailwindcss";

/**
 * Hello Clinica — Design System.
 *
 * PALETTE OVERRIDE (File 17 — Amendment Register v1.2, owner-authorized):
 * the original medical-blue palette is replaced by the MSHQ-mirrored palette.
 * Token NAMES are intentionally preserved (medical-blue / deep-blue /
 * accent-blue) so existing components need no edits; only their VALUES change:
 *   medical-blue -> Deep Teal  #0C3C4C  (primary brand / structural)
 *   deep-blue    -> Petrol     #082C38  (darker brand)
 *   accent-blue  -> Cyan       #17A2B8  (accent)
 *   coral        -> Coral      #C2461A  (primary CTA; AA-compliant on white)
 * Future phases must not revert these to the pre-override blues.
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
        // Brand palette (MSHQ-mirrored — names preserved, values overridden)
        "medical-blue": "#0C3C4C", // Deep Teal (primary/structural brand)
        "deep-blue": "#082C38", // Petrol (darker brand)
        "accent-blue": "#17A2B8", // Cyan (accent)
        "brand-bg": "#F4F7F8", // light neutral section background
        coral: {
          DEFAULT: "#C2461A", // primary CTA — AA (4.9:1) with white text
          dark: "#A93C15", // CTA hover/active
          bright: "#F2683C", // non-text accent only (fails AA as text bg)
        },

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
        card: "24px",
        xl: "calc(var(--radius))",
        lg: "calc(var(--radius) - 2px)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
      },
      boxShadow: {
        // Card shadow + hover lift (teal-tinted to match override)
        card: "0 10px 30px -12px rgba(12, 60, 76, 0.18)",
        "card-hover": "0 24px 48px -16px rgba(12, 60, 76, 0.28)",
        focus: "0 0 0 3px rgba(23, 162, 184, 0.45)",
      },
      backgroundImage: {
        // Overridden gradient: teal -> petrol -> cyan
        "brand-gradient":
          "linear-gradient(135deg, #0C3C4C 0%, #082C38 55%, #17A2B8 100%)",
      },
      spacing: {
        "section-mobile": "48px",
        "section-tablet": "80px",
        "section-desktop": "120px",
      },
      transitionDuration: {
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
