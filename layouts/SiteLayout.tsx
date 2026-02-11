import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import CustomCursor from '../components/CustomCursor';
import QuoteModal from '../components/QuoteModal';

const SiteLayout: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.dispatchEvent(new Event('prerender-ready'));
  }, [location.pathname]);

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900 selection:bg-brand-primary selection:text-white">
      <CustomCursor />
      <Navbar onOpenQuote={() => setIsQuoteModalOpen(true)} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
};

export default SiteLayout;
