/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === "development";

// Report-only lets you watch for breakage in the browser console before enforcing.
const cspReportOnly = process.env.CSP_REPORT_ONLY === "true";

// The contact form posts here from the browser, so the origin must be allowed by connect-src.
const webhookOrigin = (() => {
  try {
    return new URL(process.env.NEXT_PUBLIC_WEBHOOK_URL).origin;
  } catch {
    return null;
  }
})();

const csp = [
  "default-src 'self'",
  // Next.js App Router emits inline bootstrap/flight scripts, so 'unsafe-inline' is required unless a
  // per-request nonce is generated in middleware, which opts every page out of static rendering.
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  // Inline <style> block in supply-chain-visuals.tsx plus React style={{...}} attributes.
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  ["connect-src 'self'", webhookOrigin, isDev ? "ws: wss:" : null]
    .filter(Boolean)
    .join(" "),
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "frame-src 'none'",
  "manifest-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  {
    key: cspReportOnly
      ? "Content-Security-Policy-Report-Only"
      : "Content-Security-Policy",
    value: csp,
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig = {
  poweredByHeader: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
