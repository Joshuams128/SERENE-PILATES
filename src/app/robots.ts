import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/tribal'],
    },
    sitemap: 'https://www.serenepilates.ca/sitemap.xml',
  };
}
