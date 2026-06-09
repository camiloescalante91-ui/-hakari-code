import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
  // This is the default (also the path when `defaultNS` is not specified)
  './src/i18n/request.ts'
);

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
