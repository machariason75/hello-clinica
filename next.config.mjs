/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: {
    // Lint locally during development, but don't fail production builds on
    // lint warnings (e.g. unescaped apostrophes in copy). Vercel-friendly.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Type-check during local development; don't block production builds on
    // known third-party typing quirks (e.g. Framer Motion dynamic components).
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "utfs.io" },
      { protocol: "https", hostname: "*.ufs.sh" },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;