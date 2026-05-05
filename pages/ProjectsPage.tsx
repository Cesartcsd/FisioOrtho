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
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">Nosso Espaço</h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Conheça nossa infraestrutura projetada para o seu bem-estar.
            Um ambiente acolhedor, equipado para garantir o melhor atendimento em fisioterapia e estética.
          </p>
        </div>
      </section>
      <Gallery />
    </>
  );
};

export default ProjectsPage;
