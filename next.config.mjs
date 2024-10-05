/** @type {import('next').NextConfig} */

/** @type {import('next').NextConfig} */

// next.config.mjs
const nextConfig = {
    // Other Next.js configurations...
    webpack(config) {
      // Find the existing rule handling images
      const fileLoaderRule = config.module.rules.find((rule) =>
        rule.test?.test?.('.svg')
      );
  
      // Modify the existing rule to ignore .svg files
      if (fileLoaderRule) {
        fileLoaderRule.exclude = /\.svg$/;
      }
  
      // Add a new rule to handle .svg files with @svgr/webpack
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: true, // Optional: optimize SVG for use as an icon
            },
          },
        ],
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  