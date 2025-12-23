import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              svgProps: {
                width: "16",
                height: "16",
              },
            },
          },
        ],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
