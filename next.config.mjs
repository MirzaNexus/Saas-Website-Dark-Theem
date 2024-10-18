/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, // Targets SVG files
      use: [
        {
          loader: "@svgr/webpack", // Use @svgr/webpack to transform SVG into a React component
          options: {
            svgo: false, // Disable SVGO optimization (optional)
          },
        },
      ],
    });
    return config; // Return the modified config
  },
};

export default nextConfig;
