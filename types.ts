export interface CollectionItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  imageWebpSrcSet?: string;
  imageSizes?: string;
  colors: CollectionColorOption[];
}

export interface CollectionColorImage {
  src: string;
  alt: string;
  webpSrcSet?: string;
  sizes?: string;
}

export interface CollectionColorOption {
  id: string;
  name: string;
  images: CollectionColorImage[];
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  location: string;
}

export interface ProductItem {
  id: string;
  name: string;
  description: string;
  category: string;
  tag: string;
  imageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface RouteSEO {
  title: string;
  description: string;
  canonicalPath: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  robots?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  jsonLd?: Array<Record<string, unknown>>;
}
