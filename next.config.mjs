import bundleAnalyzer from '@next/bundle-analyzer';
import nextra from 'nextra';
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false
  }
})

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

export default withNextra(
  withBundleAnalyzer({
    reactStrictMode: false,
    cleanDistDir: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
    experimental: {
      optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
    },
  }));
