import React, { useEffect, useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { BRAND_NAME, WHATSAPP_LINK, BRAND_LOGOS } from '../constants';

interface NavbarProps {
  onOpenQuote?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDefaultLogoError, setIsDefaultLogoError] = useState(false);
  const [isLightLogoError, setIsLightLogoError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const pageLinks = [
    { name: 'Início', href: '/' },
    { name: 'Sobre nós', href: '/sobre-nos' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Projetos', href: '/projetos' },
    { name: 'Contato', href: '/contato' },
  ];

  const sectionLinks = [
    { name: 'Modelos', href: '#collections' },
    { name: 'Diferenciais', href: '#features' },
    { name: 'FAQ', href: '#faq' },
  ];

  const sectionHref = (anchor: string): string => {
    if (location.pathname === '/') {
      return anchor;
    }

    return `/${anchor}`;
  };

  const shouldShowLogo = isScrolled ? !isDefaultLogoError : !isLightLogoError;
  const linkColorClass = isScrolled ? 'text-gray-600 hover:text-brand-dark' : 'text-gray-200 hover:text-white';

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 py-3'
          : 'bg-gradient-to-b from-black/40 to-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          to="/"
          className={`flex items-center gap-3 font-serif text-2xl font-bold tracking-tight ${
            isScrolled ? 'text-brand-dark' : 'text-white'
          }`}
        >
          {shouldShowLogo && (
            <img
              src={isScrolled ? BRAND_LOGOS.default : BRAND_LOGOS.light}
              alt="Simbolo Soroportas"
              className="h-8 md:h-9 w-auto object-contain shrink-0"
              onError={() => {
                if (isScrolled) {
                  setIsDefaultLogoError(true);
                } else {
                  setIsLightLogoError(true);
                }
              }}
            />
          )}
          <span>{BRAND_NAME}</span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {pageLinks.map((link) => (
            <Link key={link.name} to={link.href} className={`text-sm font-medium transition-colors ${linkColorClass}`}>
              {link.name}
            </Link>
          ))}

          {sectionLinks.map((link) => (
            <a key={link.name} href={sectionHref(link.href)} className={`text-sm font-medium transition-colors ${linkColorClass}`}>
              {link.name}
            </a>
          ))}

          {onOpenQuote && (
            <button
              onClick={onOpenQuote}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isScrolled ? 'text-brand-dark hover:text-brand-primary' : 'text-white/90 hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              Orçamento
            </button>
          )}

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              isScrolled ? 'bg-brand-dark text-white hover:bg-brand-primary' : 'bg-white text-brand-dark hover:bg-gray-100'
            }`}
          >
            Fale Conosco
          </a>
        </div>

        <button className="lg:hidden text-current" onClick={() => setIsMobileMenuOpen((prev) => !prev)} aria-label="Abrir menu">
          {isMobileMenuOpen ? <X className={isScrolled ? 'text-gray-900' : 'text-white'} /> : <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-8 px-6 flex flex-col gap-6 lg:hidden">
          {pageLinks.map((link) => (
            <Link key={link.name} to={link.href} className="text-gray-800 text-lg font-medium border-b border-gray-100 pb-2">
              {link.name}
            </Link>
          ))}

          {sectionLinks.map((link) => (
            <a
              key={link.name}
              href={sectionHref(link.href)}
              className="text-gray-700 text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-dark text-white text-center py-3 rounded-md font-medium"
          >
            Falar no WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
