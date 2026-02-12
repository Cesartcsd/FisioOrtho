import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SeoHead from '../components/seo/SeoHead';
import { COLLECTIONS, WHATSAPP_LINK } from '../constants';
import NotFoundPage from './NotFoundPage';
import { getCollectionSeoBySlug } from '../seo/routeSeo';
import Lightbox from '../components/Lightbox';

const CollectionDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const collection = useMemo(
    () => COLLECTIONS.find((item) => item.slug === slug),
    [slug],
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [slug]);

  const [activeColorId, setActiveColorId] = useState<string>('');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    if (collection?.colors?.length) {
      setActiveColorId(collection.colors[0].id);
      return;
    }

    setActiveColorId('');
  }, [collection]);

  if (!collection || !slug) {
    return <NotFoundPage />;
  }

  const seo = getCollectionSeoBySlug(slug);

  if (!seo) {
    return <NotFoundPage />;
  }

  const activeColor = collection.colors.find((color) => color.id === activeColorId) ?? collection.colors[0];
  const hasImages = (activeColor?.images?.length ?? 0) > 0;

  return (
    <>
      <SeoHead seo={seo} />

      <section className="pt-36 pb-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-10">
            <Link to="/#collections" className="text-sm text-brand-primary font-semibold hover:text-brand-dark transition-colors">
              Voltar para colecoes
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-start mb-12">
            <div>
              <p className="text-sm uppercase tracking-widest text-brand-primary font-semibold mb-4">{collection.category}</p>
              <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">{collection.title}</h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mb-8">{collection.description}</p>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-dark text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-primary transition-colors"
              >
                Falar com especialista
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 flex items-center justify-center">
              <img
                src={collection.imageUrl}
                srcSet={collection.imageWebpSrcSet}
                sizes={collection.imageSizes}
                alt={collection.title}
                loading="lazy"
                decoding="async"
                className="w-full h-[380px] md:h-[460px] lg:h-[560px] object-contain rounded-xl bg-white"
              />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="font-serif text-2xl text-gray-900 mb-4">Selecione a cor</h2>
            <div className="flex flex-wrap gap-3">
              {collection.colors.map((color) => {
                const isActive = color.id === activeColor?.id;

                return (
                  <button
                    key={color.id}
                    type="button"
                    onClick={() => setActiveColorId(color.id)}
                    className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-brand-dark text-white border-brand-dark'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-brand-primary hover:text-brand-primary'
                    }`}
                  >
                    {color.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="mb-4">
              <h3 className="font-serif text-xl text-gray-900">Galeria da cor: {activeColor?.name}</h3>
              <p className="text-sm text-gray-500 mt-1">Toque na cor para trocar o conjunto de imagens.</p>
            </div>

            {hasImages && activeColor ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeColor.images.map((image, index) => (
                  <article
                    key={image.src}
                    className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center cursor-zoom-in transition-transform hover:scale-[1.02]"
                    onClick={() => {
                      setPhotoIndex(index);
                      setLightboxOpen(true);
                    }}
                  >
                    <img
                      src={image.src}
                      srcSet={image.webpSrcSet}
                      sizes={image.sizes ?? '(max-width: 768px) 100vw, 33vw'}
                      alt={image.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-96 object-contain"
                    />
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center">
                <p className="text-gray-700 font-medium mb-2">Fotos desta cor serao adicionadas em breve.</p>
                <p className="text-sm text-gray-500">
                  Cor selecionada: <span className="font-semibold text-gray-700">{activeColor?.name}</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {hasImages && activeColor && (
        <Lightbox
          images={activeColor.images.map((img) => img.src)}
          titles={activeColor.images.map((img) => img.alt)}
          currentIndex={photoIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNext={() => setPhotoIndex((prev) => (prev + 1) % activeColor.images.length)}
          onPrev={() => setPhotoIndex((prev) => (prev - 1 + activeColor.images.length) % activeColor.images.length)}
        />
      )}
    </>
  );
};

export default CollectionDetailPage;
