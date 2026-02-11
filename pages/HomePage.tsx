import React from 'react';
import Hero from '../components/Hero';
import Collections from '../components/Collections';
import Features from '../components/Features';
import Process from '../components/Process';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import SeoHead from '../components/seo/SeoHead';
import { ROUTE_SEO } from '../seo/routeSeo';

const HomePage: React.FC = () => {
  return (
    <>
      <SeoHead seo={ROUTE_SEO.home} />
      <Hero />
      <Collections />
      <Features />
      <Process />
      <Gallery />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default HomePage;
