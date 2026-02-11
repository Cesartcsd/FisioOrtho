import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '../../constants';
import { RouteSEO } from '../../types';

interface SeoHeadProps {
  seo: RouteSEO;
}

const SeoHead: React.FC<SeoHeadProps> = ({ seo }) => {
  const canonicalUrl = `${SITE_URL}${seo.canonicalPath}`;
  const ogType = seo.ogType ?? 'website';
  const robots = seo.robots ?? 'index,follow';
  const ogImage = seo.ogImage ?? `${SITE_URL}/assets/hero/hero-main-1280.webp`;
  const twitterCard = seo.twitterCard ?? 'summary_large_image';

  return (
    <Helmet prioritizeSeoTags>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Soroportas" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={ogImage} />

      {seo.jsonLd?.map((schema, index) => (
        <script key={`${seo.canonicalPath}-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SeoHead;
