"use strict";

/** @type {import('next').NextConfig} */
var nextConfig = {
  reactStrictMode: true
};
module.exports = {
  images: {
    domains: ["courses-top.ru"]
  },
  webpack: function webpack(config) {
    var _config$module$rules$ = config.module.rules.find(function (rule) {
      return rule.test && rule.test.test(".svg");
    }),
        loaderOptions = _config$module$rules$.options;

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: /icon/,
      use: ["@svgr/webpack"]
    });
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: {
        not: [/icon/]
      },
      loader: "next-image-loader",
      options: loaderOptions
    });
    return config;
  }
};