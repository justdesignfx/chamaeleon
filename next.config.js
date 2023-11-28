/** @type {import('next').NextConfig} */
const path = require("path")

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jd-admin.chamaeleon.vc",
        pathname: "**",
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import 'styles/_functions';`,
  },
  webpack: (config, options) => {
    const { dir } = options

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            memo: true,
            dimensions: false,
            svgoConfig: {
              multipass: true,
              plugins: [
                "removeDimensions",
                "removeOffCanvasPaths",
                "reusePaths",
                "removeElementsByAttr",
                "removeStyleElement",
                "removeScriptElement",
                "prefixIds",
                "cleanupIds",
                {
                  name: "cleanupNumericValues",
                  params: {
                    floatPrecision: 1,
                  },
                },
                {
                  name: "convertPathData",
                  params: {
                    floatPrecision: 1,
                  },
                },
                {
                  name: "convertTransform",
                  params: {
                    floatPrecision: 1,
                  },
                },
                {
                  name: "cleanupListOfValues",
                  params: {
                    floatPrecision: 1,
                  },
                },
              ],
            },
          },
        },
      ],
    })

    return config
  },
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ]
  },
  redirects: async () => {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
