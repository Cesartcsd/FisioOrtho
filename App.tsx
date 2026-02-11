import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SiteLayout from './layouts/SiteLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';
import CollectionDetailPage from './pages/CollectionDetailPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="sobre-nos" element={<AboutPage />} />
          <Route path="servicos" element={<ServicesPage />} />
          <Route path="projetos" element={<ProjectsPage />} />
          <Route path="contato" element={<ContactPage />} />
          <Route path="colecoes/:slug" element={<CollectionDetailPage />} />
          <Route path="politica-de-privacidade" element={<PrivacyPage />} />
          <Route path="termos-de-uso" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
