import React from 'react';
import { Link } from 'react-router-dom';
import SeoHead from '../components/seo/SeoHead';
import { COLLECTIONS, FEATURES, WHATSAPP_LINK } from '../constants';
import { ROUTE_SEO } from '../seo/routeSeo';

const ServicesPage: React.FC = () => {
  return (
    <>
      <SeoHead seo={ROUTE_SEO.services} />
      <section className="pt-36 pb-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">Serviços e soluções</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-12 max-w-3xl">
            Oferecemos consultoria técnica, portas sob medida, instalação profissional e acabamento premium para
            projetos residenciais e corporativos.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {COLLECTIONS.map((item) => (
              <article key={item.id} className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
                <img
                  src={item.imageUrl}
                  srcSet={item.imageWebpSrcSet}
                  sizes={item.imageSizes}
                  loading="lazy"
                  decoding="async"
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h2 className="font-semibold text-xl text-gray-900 mb-2">{item.title}</h2>
                  <p className="text-sm uppercase tracking-wide text-brand-primary mb-3">{item.category}</p>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <h2 className="font-serif text-3xl text-gray-900 mb-6">Diferenciais técnicos</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {FEATURES.map((feature) => (
              <article key={feature.id} className="rounded-2xl border border-gray-200 p-6 bg-gray-50/70">
                <h3 className="font-semibold text-xl text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </article>
            ))}
          </div>

          <div className="rounded-2xl border border-brand-primary/20 bg-brand-light/40 p-8">
            <h2 className="font-serif text-2xl text-gray-900 mb-3">Precisa de orientação técnica?</h2>
            <p className="text-gray-700 mb-5">
              Fale com nossa equipe para definir medidas, ferragens, acabamento e cronograma de instalação.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-brand-dark text-white font-semibold hover:bg-brand-primary transition-colors"
              >
                Solicitar atendimento
              </a>
              <Link
                to="/contato"
                className="inline-flex items-center px-6 py-3 rounded-full border border-brand-dark text-brand-dark font-semibold hover:bg-brand-dark hover:text-white transition-colors"
              >
                Ver contatos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
