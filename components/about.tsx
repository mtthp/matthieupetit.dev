import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'next-i18next-static-site';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import iconApp from '../public/assets/icons/icon-app.svg';
import iconDesign from '../public/assets/icons/icon-design.svg';
import iconDev from '../public/assets/icons/icon-dev.svg';

export default function About() {
  const { t } = useTranslation('about');
  const typedTitleElement = useRef<HTMLSpanElement>(null);
  const typedTitleInView = useInView(typedTitleElement, { once: true });

  useEffect(() => {
    if (!typedTitleElement.current || !typedTitleInView) return;

    const typed = new Typed(typedTitleElement.current, {
      strings: [t('titles.first'), t('titles.second'), t('titles.third'), t('titles.fourth')],
      startDelay: 1000,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
    });

    return () => {
      typed.destroy();
    };
  }, [t, typedTitleInView]);

  return (
    <section id="about" className="flex flex-col p-7 pt-20">
      <motion.header
        className="transition-all duration-1000"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}>
        <h1 className="text-5xl font-semibold">
          <span ref={typedTitleElement} />
        </h1>
        <hr className="divider mt-4" />
      </motion.header>
      <article className="mt-12 font-thin leading-6 antialiased">
        <motion.p
          className="transition-all delay-100 duration-1000"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          {t('myself.summary')}
        </motion.p>
        <motion.p
          className="mt-5 transition-all delay-200 duration-1000"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          {t('myself.role')}
        </motion.p>
      </article>

      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 transition-all delay-150 duration-1000">
        <h2 className="text-2xl font-semibold">{t('expertise.title')}</h2>
        <ul className="mt-6 flex flex-row flex-wrap items-center justify-center gap-6">
          <motion.li
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-5 flex w-64 max-w-md flex-auto flex-col items-center gap-3 rounded-3xl border-4 border-slate-100 p-6 text-center transition-all duration-1000">
            <Image alt={t('expertise.development.picture')} src={iconDev} height={40} width={40} />
            <h3 className="text-xl font-semibold">{t('expertise.development.title')}</h3>
            <p className="leading-6">{t('expertise.development.description')}</p>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex w-64 max-w-md flex-auto flex-col items-center gap-3 rounded-3xl border-4 border-slate-100 p-6 text-center transition-all duration-1000">
            <Image alt={t('expertise.mobile.picture')} src={iconApp} height={40} width={40} />
            <h3 className="text-xl font-semibold">{t('expertise.mobile.title')}</h3>
            <p className="leading-6">{t('expertise.mobile.description')}</p>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex w-64 max-w-md flex-auto flex-col items-center gap-3 rounded-3xl border-4 border-slate-100 p-6 text-center transition-all duration-1000">
            <Image
              alt={t('expertise.design.description')}
              src={iconDesign}
              height={40}
              width={40}
            />
            <h3 className="text-xl font-semibold">{t('expertise.design.title')}</h3>
            <p className="leading-6">{t('expertise.design.description')}</p>
          </motion.li>
        </ul>
      </motion.article>
    </section>
  );
}
