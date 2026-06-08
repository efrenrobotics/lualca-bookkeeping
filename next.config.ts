import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // A stray lockfile in a parent dir confuses workspace-root inference; pin it
  // to this project so build traces (and Vercel) resolve correctly.
  outputFileTracingRoot: import.meta.dirname,
};

export default withNextIntl(nextConfig);
