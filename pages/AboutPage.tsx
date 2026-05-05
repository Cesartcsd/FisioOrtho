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
                <p>Há mais de 10 anos transformando a saúde e a qualidade de vida.</p>
                <p>Realizamos uma avaliação clínica minuciosa para o diagnóstico exato.</p>
                <p>Tratamentos personalizados com base em evidências científicas.</p>
                <p>Protocolos focados em resultados reais e duradouros.</p>
              </div>
            </div>

            <figure className="mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm lg:mx-0 lg:justify-self-end">
              <div className="aspect-[4/5] w-full bg-white flex items-center justify-center">
                <img
                  src="/assets/gallery/dra-jessica.jpeg"
                  srcSet="/assets/gallery/dra-jessica-480.webp 480w, /assets/gallery/dra-jessica-768.webp 768w, /assets/gallery/dra-jessica-1024.webp 1024w"
                  sizes="(max-width: 768px) 100vw, 400px"
                  alt="Foto da Dra. Jéssica Arantes"
                  className="h-full w-full object-cover"
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
                Transformar a qualidade de vida e o bem-estar dos nossos pacientes com tratamentos
                <br />
                que unem ciência, fisioterapia de alto padrão e cuidado humano, oferecendo uma experiência segura
                <br />
                do início ao fim da reabilitação.
              </p>
            </article>
            <article className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg md:min-h-[260px]">
              <h2 className="font-semibold text-xl tracking-tight text-gray-900 mb-4">Nossa Visão</h2>
              <p className="text-gray-600 leading-relaxed">
                Ser a clínica mais lembrada e confiável da região quando o assunto for saúde, reabilitação e
                <br />
                fisioterapia especializada, reconhecida pela excelência no atendimento, agilidade
                <br />
                nos resultados e compromisso real com cada paciente.
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
                  <p className="font-semibold text-gray-900">Compromisso com a sua saúde</p>
                  <p>
                    Entendemos que não entregamos apenas tratamentos, mas participamos da construção de sua
                    <br />
                    qualidade de vida.
                  </p>
                </li>
                <li>
                  <p className="font-semibold text-gray-900">Qualidade que gera tranquilidade</p>
                  <p>Trabalhamos com produtos e parceiros que entregam segurança e durabilidade.</p>
                </li>
                <li>
                  <p className="font-semibold text-gray-900">Agilidade no alívio da dor</p>
                  <p>Sabemos que sua saúde é essencial e buscamos soluções práticas para o seu dia a dia.</p>
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
            <h2 className="font-serif text-3xl mb-3">Vamos agendar sua avaliação?</h2>
            <p className="text-gray-200 mb-6">
              Nossa equipe orienta a melhor solução para sua recuperação ou cuidado estético.
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
