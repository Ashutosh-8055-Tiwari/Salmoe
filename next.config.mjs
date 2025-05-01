/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  experimental: {
    instrumentationHook: false, 
  },
};

export default nextConfig;
