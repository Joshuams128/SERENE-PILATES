import { Metadata } from 'next';

export const defaultSEO = {
  title: 'Serene Pilates | Pilates Studio in Scarborough, Ontario',
  description: 'Transform your body and mind at Serene Pilates, Scarborough\'s premier Pilates studio. Offering Reformer, Mat, and specialized classes for all fitness levels. Join us at 1275 Morningside Ave.',
  keywords: 'pilates, reformer pilates, mat pilates, yoga, scarborough pilates, fitness studio, wellness, ontario pilates, pilates classes, serene pilates',
  image: 'https://serenepilates.ca/og-image.jpg',
  siteUrl: 'https://serenepilates.ca',
};

export const pageSEO = {
  home: {
    title: 'Serene Pilates | Pilates Studio in Scarborough, Ontario',
    description: 'Transform your body and mind at Serene Pilates, Scarborough\'s premier Pilates studio. Offering Reformer, Mat, and specialized classes for all fitness levels.',
    keywords: 'pilates, reformer pilates, mat pilates, scarborough pilates, fitness studio, wellness',
  },
  classes: {
    title: 'Class Types | Serene Pilates Scarborough',
    description: 'Explore our diverse Pilates class offerings including Reformer, Mat, Jump Board, Barre, and specialized sessions. Classes for all fitness levels at Serene Pilates.',
    keywords: 'reformer pilates classes, mat pilates, barre classes, pilates jump board, prenatal pilates, scarborough fitness classes',
  },
  about: {
    title: 'About Us - Serene Pilates',
    description: 'Your trusted Pilates sanctuary in Scarborough, Ontario — dedicated to nurturing wellness, strength, and serenity through mindful movement.',
    keywords: 'about serene pilates, pilates studio scarborough, wellness studio, fitness community',
  },
  pricing: {
    title: 'Membership Pricing | Serene Pilates Scarborough',
    description: 'Flexible membership options at Serene Pilates including Reformer, Mat, and Serene Blend packages. Find the perfect plan for your fitness journey.',
    keywords: 'pilates membership, pilates pricing, scarborough gym membership, reformer pilates cost, fitness packages',
  },
  booking: {
    title: 'Book a Class | Serene Pilates Scarborough',
    description: 'Book your Pilates class at Serene Pilates. Browse our schedule and reserve your spot in Reformer, Mat, or specialty classes.',
    keywords: 'book pilates class, pilates schedule, reserve class, scarborough pilates booking',
  },
  contact: {
    title: 'Contact Us | Serene Pilates Scarborough',
    description: 'Get in touch with Serene Pilates. Visit us at 1275 Morningside Ave, Unit 30, Scarborough or call (647) 478-2400. We\'re here to help!',
    keywords: 'contact serene pilates, pilates studio location, scarborough pilates address, pilates studio hours',
  },
  faq: {
    title: 'FAQ | Serene Pilates Scarborough',
    description: 'Find answers to common questions about Serene Pilates classes, memberships, policies, and more. Everything you need to know before your first class.',
    keywords: 'pilates faq, pilates questions, pilates studio policies, class information, membership questions',
  },
  careers: {
    title: 'Teach at Serene | Careers at Serene Pilates Scarborough',
    description: 'Join the Serene Pilates team. We are looking for passionate Reformer Pilates, Mat Pilates, and Yoga instructors in Scarborough, Ontario.',
    keywords: 'pilates instructor jobs, yoga teacher jobs, pilates careers, teach pilates scarborough, fitness instructor hiring',
  },
};

/**
 * Generate metadata for a page
 * Usage in page.tsx:
 * export const metadata = createMetadata('about');
 */
export function createMetadata(
  page: keyof typeof pageSEO,
  customMetadata?: Partial<Metadata>
): Metadata {
  const pageData = pageSEO[page];
  
  return {
    title: pageData.title,
    description: pageData.description,
    keywords: pageData.keywords,
    authors: [{ name: 'Serene Pilates' }],
    openGraph: {
      title: pageData.title,
      description: pageData.description,
      url: `${defaultSEO.siteUrl}/${page === 'home' ? '' : page}`,
      siteName: 'Serene Pilates',
      images: [
        {
          url: defaultSEO.image,
          width: 1200,
          height: 630,
          alt: 'Serene Pilates Studio',
        },
      ],
      locale: 'en_CA',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageData.title,
      description: pageData.description,
      images: [defaultSEO.image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    ...customMetadata,
  };
}
