import React from 'react';
import SeoHead from '../components/seo/SeoHead';
import { CONTACT_EMAIL, BRAND_NAME } from '../constants';
import { ROUTE_SEO } from '../seo/routeSeo';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <SeoHead seo={ROUTE_SEO.privacy} />
      <section className="pt-36 pb-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">Política de Privacidade</h1>
          <p className="text-gray-600 mb-10">Última atualização: 06/02/2026</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="font-semibold text-2xl text-gray-900 mb-3">1. Coleta de dados</h2>
              <p>
                A {BRAND_NAME} pode coletar dados enviados voluntariamente em contatos por WhatsApp, e-mail e formulários,
                como nome, telefone e detalhes do projeto.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-2xl text-gray-900 mb-3">2. Uso das informações</h2>
              <p>
                Utilizamos os dados para responder solicitações, elaborar propostas técnicas e melhorar a qualidade do atendimento.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-2xl text-gray-900 mb-3">3. Compartilhamento</h2>
              <p>
                Não comercializamos dados pessoais. Informações podem ser compartilhadas apenas quando necessário para execução
                do serviço ou cumprimento de obrigação legal.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-2xl text-gray-900 mb-3">4. Direitos do titular</h2>
              <p>
                O titular pode solicitar atualização, correção ou exclusão de dados pessoais por meio do e-mail {CONTACT_EMAIL}.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-2xl text-gray-900 mb-3">5. Contato</h2>
              <p>
                Para dúvidas sobre privacidade, entre em contato pelo e-mail{' '}
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

export default PrivacyPage;
