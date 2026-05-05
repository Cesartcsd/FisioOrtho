import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS, PRODUCT_CATEGORIES, WHATSAPP_LINK } from '../constants';
import SeoHead from '../components/seo/SeoHead';
import { ROUTE_SEO } from '../seo/routeSeo';
import { ShoppingBag } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'Todos') return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <SeoHead seo={ROUTE_SEO.products} />
      <section className="pt-36 pb-24 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">Nosso Catálogo</h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Encontre equipamentos ortopédicos, acessórios e suportes essenciais para a sua reabilitação e conforto. 
              Venda e locação com a orientação técnica da nossa equipe.
            </p>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {PRODUCT_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-brand-dark text-white shadow-md'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-primary hover:text-brand-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={product.id}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group flex flex-col"
                >
                  <div className="relative aspect-[4/3] bg-white p-6 flex items-center justify-center overflow-hidden border-b border-gray-100">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-brand-light/80 backdrop-blur-sm rounded-full text-[10px] font-bold tracking-wider text-brand-dark shadow-sm uppercase">
                        {product.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">
                      {product.category}
                    </div>
                    <h3 className="font-serif text-xl text-gray-900 mb-3">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">{product.description}</p>

                    <a
                      href={`${WHATSAPP_LINK} Gostaria de consultar a disponibilidade do produto: ${product.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-gray-50 hover:bg-brand-primary hover:text-white text-brand-dark rounded-xl font-semibold transition-colors text-sm border border-gray-200 hover:border-brand-primary"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Consultar
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Nenhum produto encontrado nesta categoria.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
