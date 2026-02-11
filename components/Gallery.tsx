import React, { useRef, useState } from 'react';
import { GALLERY_IMAGES, GALLERY_ITEMS, PROJECT_STATS, WHATSAPP_LINK } from '../constants';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Eye } from 'lucide-react';
import Lightbox from './Lightbox';

const GALLERY_TITLES = GALLERY_ITEMS.map((item) => item.title);

const Gallery: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(5px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  return (
    <>
      <Lightbox
        images={GALLERY_IMAGES}
        titles={GALLERY_TITLES}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />

      <section id="gallery" className="py-28 bg-white overflow-hidden relative" ref={sectionRef}>
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-brand-light/20 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
              animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="max-w-xl"
            >
              <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary tracking-widest uppercase mb-4">
                <span className="w-8 h-[2px] bg-brand-primary"></span>
                Portfolio real
              </span>

              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4 leading-tight">
                Ambientes{' '}
                <span className="relative inline-block">
                  transformados
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[3px] bg-gradient-to-r from-brand-primary to-brand-dark"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : { width: 0 }}
                    transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
                  />
                </span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                Veja como nossas portas se comportam em projetos reais de arquitetura, com foco em acabamento e proporção.
              </p>
            </motion.div>

            <motion.a
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-brand-dark text-white px-6 py-3 rounded-full font-medium hover:bg-brand-primary transition-all duration-300"
            >
              Quero um resultado assim
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {GALLERY_ITEMS.map((item, index) => (
              <motion.div
                key={item.src}
                variants={itemVariants}
                onClick={() => openLightbox(index)}
                className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                  index === 0 || index === 3 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-[4/3]'
                }`}
              >
                <div className="image-reveal w-full h-full">
                  <img
                    src={item.src}
                    srcSet={item.webpSrcSet}
                    sizes={item.sizes}
                    loading="lazy"
                    decoding="async"
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex justify-end">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      Ver projeto
                    </span>
                  </div>

                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white/80 text-sm mb-2">Projeto #{index + 1}</p>
                    <h3 className="text-white text-xl font-serif">{item.title}</h3>
                  </div>
                </div>

                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white font-serif text-lg border border-white/20">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {PROJECT_STATS.map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-brand-light/30 border border-brand-primary/10">
                <p className="font-serif text-3xl md:text-4xl text-brand-dark font-semibold">{stat.number}</p>
                <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
