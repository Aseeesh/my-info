// next.config.js
import CopyPlugin from "copy-webpack-plugin";
import { createRequire } from "node:module";
import path from "path";
import env from "./src/utils/env.mjs";

/** @type {import("next").NextConfig} */
const nextConfig = {
  basePath: "",
  assetPrefix: "",
  env,
  images: {
    unoptimized: true,
    loader: "custom",
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  output: "export",
  distDir: "out",
  trailingSlash: true,
  reactStrictMode: true,
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
  transpilePackages: ["next-image-export-optimizer"],

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  webpack: (config, { isServer }) => {
    config.resolve.alias.canvas = false;
    config.resolve.fallback = { fs: false };

    // Copy static images to output
    if (!isServer) {
      config.plugins.push(
        new CopyPlugin({
          patterns: [
            {
              from: path.join(process.cwd(), "public/images"),
              to: "images/",
              noErrorOnMissing: true,
            },
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
    }

    return config;
  },
};

export default nextConfig;
