import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Bullying",
  assetPrefix: "/Bullying/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
