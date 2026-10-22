import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Diamkan peringatan "multiple lockfiles" bila ada package-lock.json
  // lain di folder induk workspace; root tracing tetap di folder project ini.
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
