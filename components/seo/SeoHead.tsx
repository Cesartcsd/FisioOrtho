import React, { useEffect } from 'react';
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

  useEffect(() => {
    const upsertMeta = (attribute: 'name' | 'property', key: string, content: string): void => {
      let meta = document.head.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, key);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    document.title = seo.title;
    upsertMeta('name', 'description', seo.description);
    upsertMeta('name', 'robots', robots);

    upsertMeta('property', 'og:locale', 'pt_BR');
    upsertMeta('property', 'og:type', ogType);
    upsertMeta('property', 'og:site_name', 'FisioOrthopédicos');
    upsertMeta('property', 'og:title', seo.title);
    upsertMeta('property', 'og:description', seo.description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', ogImage);

    upsertMeta('name', 'twitter:card', twitterCard);
    upsertMeta('name', 'twitter:title', seo.title);
    upsertMeta('name', 'twitter:description', seo.description);
    upsertMeta('name', 'twitter:image', ogImage);

    const existingJsonLd = document.head.querySelectorAll('script[data-seo-jsonld="true"]');
    existingJsonLd.forEach((node) => node.remove());

    seo.jsonLd?.forEach((schema) => {
      const script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-seo-jsonld', 'true');
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [canonicalUrl, ogImage, ogType, robots, seo]);

  return null;
};

export default SeoHead;
