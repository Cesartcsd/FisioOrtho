import React from 'react';
import SeoHead from '../components/seo/SeoHead';
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  WHATSAPP_LINK,
} from '../constants';
import { ROUTE_SEO } from '../seo/routeSeo';

const ContactPage: React.FC = () => {
  return (
    <>
      <SeoHead seo={ROUTE_SEO.contact} />
      <section id="contact" className="pt-36 pb-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">Contato</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-10 max-w-3xl">
            Atendemos por WhatsApp, telefone e e-mail. O atendimento presencial acontece com hora marcada.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <article className="rounded-2xl border border-gray-200 p-6">
              <h2 className="font-semibold text-xl text-gray-900 mb-3">Telefone e WhatsApp</h2>
              <p className="text-gray-700 mb-1">{CONTACT_PHONE_DISPLAY}</p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-brand-primary font-semibold hover:text-brand-dark transition-colors"
              >
                Abrir conversa no WhatsApp
              </a>
            </article>

            <article className="rounded-2xl border border-gray-200 p-6">
              <h2 className="font-semibold text-xl text-gray-900 mb-3">E-mail</h2>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-700 hover:text-brand-primary transition-colors">
                {CONTACT_EMAIL}
              </a>
              <p className="text-gray-500 text-sm mt-3">Resposta em horário comercial.</p>
            </article>

            <article className="rounded-2xl border border-gray-200 p-6">
              <h2 className="font-semibold text-xl text-gray-900 mb-3">Localização</h2>
              <p className="text-gray-600">{CONTACT_ADDRESS}</p>
            </article>

            <article className="rounded-2xl border border-gray-200 p-6">
              <h2 className="font-semibold text-xl text-gray-900 mb-3">Horário de atendimento</h2>
              <p className="text-gray-700">Segunda a sexta-feira: 07:30 às 17:00</p>
              <p className="text-gray-700">Sábado: 09:00 às 12:00</p>
              <p className="text-gray-700">Domingo: Fechado</p>
            </article>
          </div>

          <div className="rounded-2xl bg-brand-dark text-white p-8 md:p-10">
            <h2 className="font-serif text-3xl mb-3">Receba orientação técnica</h2>
            <p className="text-gray-200 mb-6">
              Compartilhe seu projeto e nossa equipe ajuda a definir o modelo mais adequado para sua obra.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white text-brand-dark font-semibold hover:bg-gray-100 transition-colors"
            >
              Falar com especialista
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
