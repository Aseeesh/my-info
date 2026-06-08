import CopyPlugin from "copy-webpack-plugin";
import { createRequire } from "node:module";
import path from "path";
import env from "./src/utils/env.mjs";

/** @type {import("next").NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
  env,
  images: {
    unoptimized: true,
    loader: "custom",
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  // Comment out experimental if it causes issues
  // experimental: {
  //   nextScriptWorkers: true,
  // },
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  transpilePackages: ["next-image-export-optimizer"],
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.resolve.fallback = { fs: false };
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.join(
              path.dirname(
                createRequire(import.meta.url).resolve(
                  "pdfjs-dist/package.json",
                ),
              ),
              "cmaps",
            ),
            to: "cmaps/",
          },
          {
            from: path.join(
              path.dirname(
                createRequire(import.meta.url).resolve(
                  "pdfjs-dist/package.json",
                ),
              ),
              "standard_fonts",
            ),
            to: "standard_fonts/",
          },
        ],
      }),
    );

    return config;
  },
};

export default nextConfig;
