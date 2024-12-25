// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     domains: ['cdn.sanity.io', 'images.twinkl.co.uk'], // Allow images from Sanity's CDN
    
//   },
// };

// export default nextConfig;







import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io', 'images.twinkl.co.uk'], // Allow images from Sanity's CDN
  },
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
  },
};

export default nextConfig;
