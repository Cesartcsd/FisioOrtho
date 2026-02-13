import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
    {
        id: 1,
        question: 'O que é um kit porta?',
        answer:
            'O kit porta pronta é um conjunto completo que chega à obra pronto para instalação, proporcionando praticidade, rapidez e excelente acabamento, sem a necessidade de ajustes complexos.',
    },
    {
        id: 2,
        question: 'A SOROPORTAS trabalha com portas para acabamento?',
        answer:
            'Nossos produtos já são entregues prontos e acabados, eliminando a necessidade de pintura e reduzindo tempo e custo na obra.',
    },
    {
        id: 3,
        question: 'A SOROPORTAS possui portas maciças?',
        answer:
            'Sim! Trabalhamos com três tipos de preenchimento — colmeia, sólida e sarrafeada — para atender diferentes necessidades de resistência e custo-benefício.',
    },
    {
        id: 4,
        question: 'Qual material a SOROPORTAS utiliza?',
        answer: 'Utilizamos MDF Ultra, garantindo alta qualidade, durabilidade e excelente padrão de acabamento.',
    },
    {
        id: 5,
        question: 'Quais cores de portas a SOROPORTAS oferece?',
        answer: 'Disponibilizamos um leque completo com 15 opções de cores, ideais para diversos estilos de ambientes.',
    },
    {
        id: 6,
        question: 'A SOROPORTAS trabalha com rodapés?',
        answer: 'Sim! Oferecemos rodapés em MDF Ultra e Poliestireno, unindo resistência, estética e fácil manutenção.',
    },
    {
        id: 7,
        question: 'Qual marca de portas a SOROPORTAS trabalha?',
        answer:
            'Somos uma loja multimarcas, atuando atualmente com ênfase na marca Concrem, referência em qualidade, durabilidade e confiabilidade no mercado.',
    },
    {
        id: 8,
        question: 'A SOROPORTAS possui produtos à pronta entrega?',
        answer:
            'Sim! Mantemos estoque de kit porta branca à pronta entrega, garantindo agilidade no atendimento e na obra.',
    },
    {
        id: 9,
        question: 'A SOROPORTAS realiza a instalação das portas?',
        answer: 'Sim! Contamos com equipe especializada para oferecer o serviço',
    },
];

const FAQ: React.FC = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-10%' });
    const [openItems, setOpenItems] = useState<number[]>([1]);

    const toggleItem = (id: number) => {
        setOpenItems((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    return (
        <section id="faq" className="py-28 bg-white relative overflow-hidden" ref={sectionRef}>
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-light/50 rounded-full blur-3xl -translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left - Header */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                        className="lg:sticky lg:top-32"
                    >
                        <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary tracking-widest uppercase mb-4">
                            <span className="w-8 h-[2px] bg-brand-primary"></span>
                            Dúvidas Frequentes
                        </span>

                        <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
                            Tire suas{' '}
                            <span className="relative inline-block">
                                dúvidas
                                <motion.span
                                    className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-primary to-brand-dark"
                                    initial={{ scaleX: 0 }}
                                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                                    transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
                                />
                            </span>
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Respondemos as perguntas mais comuns sobre nossos produtos e serviços. Não encontrou o que procura?
                        </p>

                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-brand-dark text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-primary transition-all duration-300"
                        >
                            Fale com um especialista
                        </a>
                    </motion.div>

                    {/* Right - Accordion */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
                        className="space-y-4"
                    >
                        {FAQ_ITEMS.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
                                className="border border-gray-200 rounded-xl overflow-hidden hover:border-brand-primary/30 transition-colors duration-300"
                            >
                                <button
                                    onClick={() => toggleItem(item.id)}
                                    className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
                                    <span
                                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                                            openItems.includes(item.id)
                                                ? 'bg-brand-primary text-white rotate-0'
                                                : 'bg-gray-100 text-gray-600'
                                        }`}
                                    >
                                        {openItems.includes(item.id) ? (
                                            <Minus className="w-4 h-4" />
                                        ) : (
                                            <Plus className="w-4 h-4" />
                                        )}
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {openItems.includes(item.id) && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
