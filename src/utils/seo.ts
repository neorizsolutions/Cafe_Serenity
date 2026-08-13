import { Metadata } from 'next';
import { SEO_DEFAULTS, CONTACT_DETAILS, BUSINESS_NAME } from '../constants';

interface MetadataProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description,
  path = '',
  image,
  noIndex = false,
}: MetadataProps = {}): Metadata {
  const metaTitle = title ? `${title} | ${BUSINESS_NAME}` : SEO_DEFAULTS.title;
  const metaDescription = description || SEO_DEFAULTS.description;
  const canonicalUrl = `${SEO_DEFAULTS.baseUrl}${path}`;
  const ogImage = image || SEO_DEFAULTS.ogImage;

  return {
    metadataBase: new URL(SEO_DEFAULTS.baseUrl),
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: SEO_DEFAULTS.siteName,
      images: [
        {
          url: ogImage,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

// JSON-LD Structured Data Schema Exporters
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': BUSINESS_NAME,
    'url': SEO_DEFAULTS.baseUrl,
    'logo': `${SEO_DEFAULTS.baseUrl}/brand/cafe-serenity-logo.svg`,
    'sameAs': [],
  };
}

export function getLocalBusinessSchema(city?: string) {
  const cityName = city ? ` - ${city}` : '';
  return {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    'name': `${BUSINESS_NAME}${cityName}`,
    'image': `${SEO_DEFAULTS.baseUrl}/images/hero-display.webp`,
    'telephone': CONTACT_DETAILS.phone,
    'email': CONTACT_DETAILS.email,
    'priceRange': '₹₹',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': CONTACT_DETAILS.address.street,
      'addressLocality': city || CONTACT_DETAILS.address.locality,
      'addressRegion': CONTACT_DETAILS.address.state,
      'postalCode': CONTACT_DETAILS.address.zipCode,
      'addressCountry': 'IN',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': CONTACT_DETAILS.geo.lat.toString(),
      'longitude': CONTACT_DETAILS.geo.lng.toString(),
    },
    'url': `${SEO_DEFAULTS.baseUrl}/delivery/${(city || 'kochi').toLowerCase()}`,
    'fssaiNumber': CONTACT_DETAILS.fssaiNumber,
  };
}

export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `${SEO_DEFAULTS.baseUrl}${item.path}`,
    })),
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer,
      },
    })),
  };
}

export function getProductSchema(plan: { name: string; description: string; price: number }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': plan.name,
    'description': plan.description,
    'offers': {
      '@type': 'Offer',
      'price': plan.price.toString(),
      'priceCurrency': 'INR',
      'availability': 'https://schema.org/InStock',
    },
  };
}

export function getArticleSchema(article: { title: string; excerpt: string; slug: string; date: string; author: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': article.title,
    'description': article.excerpt,
    'url': `${SEO_DEFAULTS.baseUrl}/blog/${article.slug}`,
    'datePublished': article.date,
    'author': {
      '@type': 'Person',
      'name': article.author,
    },
  };
}
