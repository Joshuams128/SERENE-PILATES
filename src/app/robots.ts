import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/tribal', '/contact/thank-you'],
    },
    sitemap: 'https://www.serenepilates.ca/sitemap.xml',
  };
}
