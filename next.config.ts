import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Chrome multiplies `sizes` by the device pixel ratio, so a full-bleed
    // photo asked for the 3840 bucket on any retina screen: 1.4 MB. Capping
    // the ladder at 2560 keeps a 2x desktop near native and cuts that to
    // ~400 kB. Nothing on the site is painted wider than 2560 device px.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2560],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
};

export default nextConfig;
