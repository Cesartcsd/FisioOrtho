import React from 'react';
import SeoHead from '../components/seo/SeoHead';
import { BRAND_NAME, CONTACT_EMAIL } from '../constants';
import { ROUTE_SEO } from '../seo/routeSeo';

const TermsPage: React.FC = () => {
  return (
    <>
      <SeoHead seo={ROUTE_SEO.terms} />
      <section className="pt-36 pb-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">Termos de Uso</h1>
          <p className="text-gray-600 mb-10">Última atualização: 06/02/2026</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="font-semibold text-2xl text-gray-900 mb-3">1. Aceitação</h2>
              <p>
                Ao acessar este site, você concorda com estes termos e com as leis aplicáveis. Caso não concorde,
                interrompa a navegação.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-2xl text-gray-900 mb-3">2. Uso do conteúdo</h2>
              <p>
                Textos, imagens e demais materiais pertencem a {BRAND_NAME} e não podem ser reproduzidos sem autorização.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-2xl text-gray-900 mb-3">3. Orçamentos e propostas</h2>
              <p>
                Informações de preço e prazo apresentadas no site são referenciais. Condições finais dependem de análise técnica,
                medidas e escopo confirmado com o cliente.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-2xl text-gray-900 mb-3">4. Limitação de responsabilidade</h2>
              <p>
                O site pode sofrer indisponibilidade temporária por manutenção ou fatores externos. A {BRAND_NAME} não garante
                funcionamento ininterrupto do ambiente digital.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-2xl text-gray-900 mb-3">5. Contato</h2>
              <p>
                Dúvidas sobre estes termos podem ser enviadas para{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-primary hover:text-brand-dark transition-colors">
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsPage;
