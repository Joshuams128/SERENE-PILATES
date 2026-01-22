import Script from 'next/script';

export default function StructuredData() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "Serene Pilates",
    "image": "https://serenepilates.ca/og-image.jpg",
    "@id": "https://serenepilates.ca",
    "url": "https://serenepilates.ca",
    "telephone": "+16474782400",
    "email": "concierge@serenepilates.ca",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1275 Morningside Ave, Unit 30",
      "addressLocality": "Scarborough",
      "addressRegion": "ON",
      "postalCode": "M1B 3W1",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.8116,
      "longitude": -79.1932
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "06:30",
        "closes": "12:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "17:30",
        "closes": "20:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "07:30",
        "closes": "12:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "16:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/serenepilatesstudios/",
      "https://www.facebook.com/share/1LShwszRC7/",
      "https://www.tiktok.com/@serenepilates"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Serene Pilates",
    "description": "Premier Pilates studio in Scarborough offering Reformer Pilates, Mat Pilates, and Yoga classes for all levels.",
    "url": "https://serenepilates.ca",
    "telephone": "+16474782400",
    "email": "concierge@serenepilates.ca",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1275 Morningside Ave, Unit 30",
      "addressLocality": "Scarborough",
      "addressRegion": "ON",
      "postalCode": "M1B 3W1",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.8116,
      "longitude": -79.1932
    }
  };

  return (
    <>
      <Script
        id="business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
