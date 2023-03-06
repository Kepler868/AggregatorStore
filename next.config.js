/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["courses-top.ru"],
  },
  webpack(config) {
    const { options: loaderOptions } = config.module.rules.find((rule) => rule.test && rule.test.test(".svg"));
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: /icon/,
      use: ["@svgr/webpack"],
    });
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: [/icon/] },
      loader: "next-image-loader",
      options: loaderOptions,
    });
    return config;
  },
};
