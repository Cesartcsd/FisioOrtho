import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_SEO } from '../seo/routeSeo';
import SeoHead from '../components/seo/SeoHead';
import { WHATSAPP_LINK } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <>
      <SeoHead seo={ROUTE_SEO.about} />
      <section className="pt-36 pb-24 bg-gradient-to-b from-brand-light/30 to-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,430px)] lg:items-start mb-12">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">Sobre nós</h1>
              <div className="text-gray-700 text-lg leading-relaxed space-y-2">
                <p>Há mais de 14 anos transformando ambientes.</p>
                <p>Fazemos visita técnica para tirar todas as dúvidas.</p>
                <p>Atendimento personalizado para seu ambiente.</p>
                <p>Trabalhamos com instaladores qualificados e credenciados.</p>
              </div>
            </div>

            <figure className="mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm lg:mx-0 lg:justify-self-end">
              <div className="aspect-[4/5] w-full bg-white flex items-center justify-center">
                <img
                  src="/assets/about/dono.jpg"
                  alt="Foto do dono da Soroportas"
                  className="h-full w-full object-contain"
                  decoding="async"
                  loading="eager"
                />
              </div>
            </figure>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <article className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg md:min-h-[260px]">
              <h2 className="font-semibold text-xl tracking-tight text-gray-900 mb-4">Nossa Missão</h2>
              <p className="text-gray-600 leading-relaxed">
                Transformar ambientes e realizar projetos residenciais com portas e soluções em acabamentos
                <br />
                que unem qualidade, praticidade e confiança, oferecendo ao cliente uma experiência segura
                <br />
                do início da escolha até a entrega final da obra.
              </p>
            </article>
            <article className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg md:min-h-[260px]">
              <h2 className="font-semibold text-xl tracking-tight text-gray-900 mb-4">Nossa Visão</h2>
              <p className="text-gray-600 leading-relaxed">
                Ser a empresa mais lembrada e confiável da região quando o assunto for portas prontas e
                <br />
                soluções para interiores residenciais, reconhecida pela excelência no atendimento, agilidade
                <br />
                nas entregas e compromisso real com cada projeto de nossos cliente
              </p>
            </article>
            <article className="md:col-span-2 rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
              <h2 className="font-semibold text-xl tracking-tight text-gray-900 mb-5">Nossos Valores</h2>
              <ul className="space-y-5 text-gray-600 leading-relaxed">
                <li>
                  <p className="font-semibold text-gray-900">Confiança em primeiro lugar</p>
                  <p>Cada venda é tratada com responsabilidade, transparência e respeito ao cliente.</p>
                </li>
                <li>
                  <p className="font-semibold text-gray-900">Compromisso com o lar das pessoas</p>
                  <p>
                    Entendemos que não vendemos apenas portas, mas participamos da construção de sonhos e
                    <br />
                    histórias.
                  </p>
                </li>
                <li>
                  <p className="font-semibold text-gray-900">Qualidade que gera tranquilidade</p>
                  <p>Trabalhamos com produtos e parceiros que entregam segurança e durabilidade.</p>
                </li>
                <li>
                  <p className="font-semibold text-gray-900">Agilidade que facilita a obra</p>
                  <p>Sabemos que prazo é essencial e buscamos soluções práticas para o dia a dia do cliente.</p>
                </li>
                <li>
                  <p className="font-semibold text-gray-900">Atendimento próximo e humano</p>
                  <p>Escutar, orientar e acompanhar cada cliente com atenção e clareza.</p>
                </li>
                <li>
                  <p className="font-semibold text-gray-900">Evolução constante</p>
                  <p>Buscamos sempre melhorar processos, produtos e atendimento para entregar mais valor.</p>
                </li>
              </ul>
            </article>
          </div>

          <div className="rounded-2xl bg-brand-dark text-white p-8 md:p-10">
            <h2 className="font-serif text-3xl mb-3">Vamos falar sobre o seu projeto?</h2>
            <p className="text-gray-200 mb-6">
              Nossa equipe técnica responde rapidamente e orienta a melhor solução para o seu ambiente.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-white text-brand-dark font-semibold hover:bg-gray-100 transition-colors"
              >
                Falar no WhatsApp
              </a>
              <Link
                to="/servicos"
                className="inline-flex items-center px-6 py-3 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Ver serviços
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
