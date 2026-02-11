import React from 'react';
import { Link } from 'react-router-dom';
import SeoHead from '../components/seo/SeoHead';
import { ROUTE_SEO } from '../seo/routeSeo';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <SeoHead seo={ROUTE_SEO.notFound} />
      <section className="pt-36 pb-24 bg-white">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <p className="text-brand-primary font-semibold mb-2">Erro 404</p>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Página não encontrada</h1>
          <p className="text-gray-600 mb-8">
            O endereço informado não existe ou foi movido. Volte para a página inicial para continuar.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 rounded-full bg-brand-dark text-white font-semibold hover:bg-brand-primary transition-colors"
          >
            Ir para Início
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
