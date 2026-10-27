import { useId, useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { waLink, type TranslationKey } from '../i18n/translations';

/*
  Las preguntas y respuestas viven en translations.ts (claves faq.q1 / faq.a1, etc.).
  Para agregar una pregunta: sumá faq.q8 y faq.a8 en español e inglés, y una línea acá.
*/
const faqs: { q: TranslationKey; a: TranslationKey }[] = [
  { q: 'faq.q1', a: 'faq.a1' },
  { q: 'faq.q2', a: 'faq.a2' },
  { q: 'faq.q3', a: 'faq.a3' },
  { q: 'faq.q4', a: 'faq.a4' },
  { q: 'faq.q5', a: 'faq.a5' },
  { q: 'faq.q6', a: 'faq.a6' },
  { q: 'faq.q7', a: 'faq.a7' },
];

export function FaqSection() {
  const { t } = useLanguage();
  const WHATSAPP_URL = waLink(t('faq.waText'));
  // Solo una respuesta abierta a la vez; null = todas cerradas
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="relative py-20 lg:py-24 px-6 bg-cultiva-bg">
      <div className="site-container">
        <div className="text-center max-w-[720px] mx-auto mb-12">
          <span className="font-mono-label text-cultiva-green-dark tracking-[0.2em] block mb-4">
            {t('faq.label')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cultiva-text mb-4 tracking-tight">
            {t('faq.title')}
          </h2>
          <p className="text-cultiva-secondary text-base sm:text-lg">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="max-w-[820px] mx-auto flex flex-col gap-3">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            const buttonId = `${baseId}-q-${i}`;
            const panelId = `${baseId}-a-${i}`;
            return (
              <div
                key={item.q}
                className={`bg-cultiva-surface border rounded-2xl transition-colors duration-300 ${
                  isOpen ? 'border-cultiva-green/30' : 'border-cultiva-border'
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-cultiva-text text-base sm:text-lg font-semibold">
                      {t(item.q)}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-cultiva-green-dark transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                {/* Animación de alto con grid-rows: 0fr -> 1fr */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-cultiva-secondary text-sm sm:text-base leading-relaxed">
                      {t(item.a)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <p className="text-cultiva-muted text-sm mb-3">{t('faq.more')}</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cultiva-green text-white text-sm font-semibold shadow-[0_4px_14px_rgba(22,163,74,0.25)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            {t('faq.whatsapp')}
          </a>
        </div>
      </div>
    </section>
  );
}