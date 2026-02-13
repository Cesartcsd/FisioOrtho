import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, MapPin, Clock, Phone, Mail } from 'lucide-react';
import {
  BRAND_NAME,
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  WHATSAPP_LINK,
} from '../constants';

const Footer: React.FC = () => {
  const location = useLocation();

  const sectionHref = (anchor: string): string => {
    if (location.pathname === '/') {
      return anchor;
    }

    return `/${anchor}`;
  };

  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-12">
          <div className="col-span-1 lg:col-span-1">
            <h2 className="font-serif text-2xl font-bold mb-6">{BRAND_NAME}</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Soluções premium em portas de madeira. Unimos marcenaria especializada e precisão técnica para entregar
              confiança no resultado final.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-brand-primary">Navegação</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre-nos" className="hover:text-white transition-colors">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/projetos" className="hover:text-white transition-colors">
                  Projetos
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-brand-primary">Atendimento</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <p className="font-medium text-white mb-1">Horário</p>
                  <p className="text-sm text-gray-300">Segunda a sexta-feira: 07:30 às 17:00</p>
                  <p className="text-sm text-gray-300">Sábado: 09:00 às 12:00</p>
                  <p className="text-sm text-gray-300">Domingo: Fechado</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <p className="font-medium text-white mb-1">Atendimento local</p>
                  <p className="text-sm text-gray-300">{CONTACT_ADDRESS}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <p className="font-medium text-white mb-1">Telefone</p>
                  <p className="text-sm text-gray-300">{CONTACT_PHONE_DISPLAY}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <p className="font-medium text-white mb-1">E-mail</p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-brand-dark px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Iniciar conversa no WhatsApp
              </a>
              <a
                href={sectionHref('#collections')}
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
              >
                Ver modelos
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-8 text-xs text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {BRAND_NAME}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/politica-de-privacidade" className="hover:text-white transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/termos-de-uso" className="hover:text-white transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
