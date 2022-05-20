const withMarkdoc = require("@markdoc/next.js");

/** @type {import('next').NextConfig} */
const nextConfig = withMarkdoc({ mode: "server" })({
  reactStrictMode: true,
  pageExtensions: ["tsx", "md"],
});

module.exports = nextConfig
