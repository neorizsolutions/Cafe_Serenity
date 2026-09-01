import { Metadata } from 'next';
import { SEO_DEFAULTS, BUSINESS_NAME } from '../constants';

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

