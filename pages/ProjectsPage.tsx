import React from 'react';
import Gallery from '../components/Gallery';
import SeoHead from '../components/seo/SeoHead';
import { ROUTE_SEO } from '../seo/routeSeo';

const ProjectsPage: React.FC = () => {
  return (
    <>
      <SeoHead seo={ROUTE_SEO.projects} />
      <section className="pt-36 pb-8 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">Projetos realizados</h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Seleção de ambientes reais com portas instaladas pela Soroportas. Aqui você avalia acabamento,
            proporção e comportamento das soluções no contexto arquitetônico.
          </p>
        </div>
      </section>
      <Gallery />
    </>
  );
};

export default ProjectsPage;
