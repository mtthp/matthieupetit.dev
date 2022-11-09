import dayjs from 'dayjs';
import 'dayjs/locale/en';
import 'dayjs/locale/fr';
import localeData from 'dayjs/plugin/localeData';
import { motion, useInView } from 'framer-motion';
import { Trans, useTranslation } from 'next-i18next-static-site';
import Image from 'next/image';
import { HTMLAttributes, useRef } from 'react';
import iconExperience from '../public/assets/icons/icon-experience.svg';
dayjs.extend(localeData);

export default function Resume({ className }: HTMLAttributes<HTMLElement> & { locale: string }) {
  const { t, i18n } = useTranslation('resume');
  const skillsRef = useRef(null);
  const skillsInView = useInView(skillsRef, { once: true });

  return (
    <section id="resume" className={['flex flex-col p-7 pt-20', className].join(' ')}>
      <motion.header
        className="transition-opacity duration-1000 ease-in-out dark:text-slate-200"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}>
        <h1 className="text-5xl font-semibold">{t('title')}</h1>
        <hr className="divider mt-4" />
      </motion.header>

      <div className="mt-12">
        <motion.h2
          className="flex flex-row items-center gap-3 text-2xl font-semibold transition-opacity duration-1000 ease-in-out dark:text-slate-200"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <Image
            className="shrink-0"
            width={40}
            height={40}
            src={iconExperience}
            alt={t('experience.picture')}
          />
          {t('experience.title')}
        </motion.h2>
        <div className="mt-8 pl-4">
          <motion.article
            className="relative flex flex-col border-l-2 border-gray-100 pl-5 pb-8 transition-opacity delay-100 duration-1000 dark:border-gray-600"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <span
              className="absolute left-[-0.425rem] top-0 h-3 w-3 rounded-full bg-indigo-600"
              style={{ boxShadow: '0 0 0 0.1875rem rgb(48 76 253 / 25%)' }}
            />
            <h3 className="relative top-[-0.4375rem] text-lg font-semibold dark:text-slate-300">
              {t('experience.startalers.title')}
            </h3>
            <span className="text-sm capitalize text-slate-500/75">
              {dayjs('2021-07').locale(i18n.language).format('MMMM YYYY')} —{' '}
              {dayjs('2021-12').locale(i18n.language).format('MMMM YYYY')}
            </span>
            <p className="mt-4">
              <Trans
                i18nKey="resume:experience.startalers.headline"
                components={{ bold: <strong className="dark:text-slate-300" /> }}
              />
            </p>
            <ul className="mt-3 list-disc pl-10">
              <li className="leading-6">{t('experience.startalers.jobs.engineering')}</li>
              <li className="leading-6">{t('experience.startalers.jobs.frontEnd')}</li>
              <li className="leading-6">{t('experience.startalers.jobs.backEnd')}</li>
              <li className="leading-6">{t('experience.startalers.jobs.ops')}</li>
              <li className="leading-6">{t('experience.startalers.jobs.docs')}</li>
              <li className="leading-6">{t('experience.startalers.jobs.design')}</li>
            </ul>
          </motion.article>

          <motion.article
            className="relative flex flex-col border-l-2 border-gray-100 pl-5 pb-8 transition-opacity duration-1000 dark:border-gray-600"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <span
              className="absolute left-[-0.425rem] top-0 h-3 w-3 rounded-full bg-indigo-600"
              style={{ boxShadow: '0 0 0 0.1875rem rgb(48 76 253 / 25%)' }}
            />
            <h3 className="relative top-[-0.4375rem] text-lg font-semibold dark:text-slate-300">
              {t('experience.neofacto.title')}
            </h3>
            <span className="text-sm capitalize text-slate-500/75">
              {dayjs('2020-04').locale(i18n.language).format('MMMM YYYY')} —{' '}
              {dayjs('2021-06').locale(i18n.language).format('MMMM YYYY')}
            </span>
            <p className="mt-4">
              <Trans
                i18nKey="resume:experience.neofacto.cityapp.headline"
                components={{ bold: <strong className="dark:text-slate-300" /> }}
              />
            </p>
            <ul className="mt-3 list-disc pl-10">
              <li className="leading-6">{t('experience.neofacto.cityapp.jobs.native')}</li>
              <li className="leading-6">{t('experience.neofacto.cityapp.jobs.engineering')}</li>
              <li className="leading-6">{t('experience.neofacto.cityapp.jobs.notifications')}</li>
              <li className="leading-6">{t('experience.neofacto.cityapp.jobs.beacons')}</li>
            </ul>

            <p className="mt-4">
              <Trans
                i18nKey="resume:experience.neofacto.agentm.headline"
                components={{ bold: <strong className="dark:text-slate-300" /> }}
              />
            </p>
            <ul className="mt-3 list-disc pl-10">
              <li className="leading-6">{t('experience.neofacto.agentm.jobs.native')}</li>
              <li className="leading-6">{t('experience.neofacto.agentm.jobs.ops')}</li>
            </ul>
          </motion.article>

          <motion.article
            className="relative flex flex-col border-l-2 border-gray-100 pl-5 pb-8 transition-opacity duration-1000 dark:border-gray-600"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <span
              className="absolute left-[-0.425rem] top-0 h-3 w-3 rounded-full bg-indigo-600"
              style={{ boxShadow: '0 0 0 0.1875rem rgb(48 76 253 / 25%)' }}
            />
            <h3 className="relative top-[-0.4375rem] text-lg font-semibold dark:text-slate-300">
              {t('experience.ing.title')}
            </h3>
            <span className="text-sm capitalize text-slate-500/75">
              {dayjs('2018-04').locale(i18n.language).format('MMMM YYYY')} —{' '}
              {dayjs('2020-04').locale(i18n.language).format('MMMM YYYY')}
            </span>
            <p className="mt-4">
              <Trans
                i18nKey="resume:experience.ing.headline"
                components={{ bold: <strong className="dark:text-slate-300" /> }}
              />
            </p>
            <ul className="mt-3 list-disc pl-10">
              <li className="leading-6">{t('experience.ing.jobs.engineering')}</li>
              <li className="leading-6">{t('experience.ing.jobs.frontEnd')}</li>
              <li className="leading-6">{t('experience.ing.jobs.testing')}</li>
              <li className="leading-6">{t('experience.ing.jobs.design')}</li>
              <li className="leading-6">{t('experience.ing.jobs.backEnd')}</li>
              <li className="leading-6">{t('experience.ing.jobs.ops')}</li>
            </ul>
          </motion.article>

          <motion.article
            className="relative flex flex-col border-l-2 border-gray-100/0 pl-5 pb-8 transition-opacity duration-1000"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <span
              className="absolute left-[-0.425rem] top-0 h-3 w-3 rounded-full bg-indigo-600"
              style={{ boxShadow: '0 0 0 0.1875rem rgb(48 76 253 / 25%)' }}
            />
            <h3 className="relative top-[-0.4375rem] text-lg font-semibold dark:text-slate-300">
              {t('experience.citizencam.title')}
            </h3>
            <span className="text-sm capitalize text-slate-500/75">
              {dayjs('2015-09').locale(i18n.language).format('MMMM YYYY')} —{' '}
              {dayjs('2018-03').locale(i18n.language).format('MMMM YYYY')}
            </span>
            <p className="mt-4">
              <Trans
                i18nKey="resume:experience.citizencam.headline"
                components={{ bold: <strong className="dark:text-slate-300" /> }}
              />
            </p>
            <ul className="mt-3 list-disc pl-10">
              <li className="leading-6">{t('experience.citizencam.jobs.backEnd')}</li>
              <li className="leading-6">{t('experience.citizencam.jobs.frontEnd')}</li>
              <li className="leading-6">{t('experience.citizencam.jobs.engineering')}</li>
              <li className="leading-6">{t('experience.citizencam.jobs.iot')}</li>
              <li className="leading-6">{t('experience.citizencam.jobs.native')}</li>
              <li className="leading-6">{t('experience.citizencam.jobs.agile')}</li>
            </ul>
          </motion.article>
        </div>
      </div>

      <div className="mt-8">
        <motion.h2
          className="flex flex-row items-center gap-3 text-2xl font-semibold transition-opacity duration-1000 ease-in-out dark:text-slate-200"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <Image
            className="shrink-0"
            width={40}
            height={40}
            src="/assets/icons/icon-education.svg"
            alt={t('education.picture')}
          />
          {t('education.title')}
        </motion.h2>

        <div className="mt-8 pl-4">
          <motion.article
            className="relative flex flex-col border-l-2 border-gray-100 pl-5 pb-8 transition-opacity delay-100 duration-1000 ease-in-out dark:border-gray-600"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <span
              className="absolute left-[-0.425rem] top-0 h-3 w-3 rounded-full bg-indigo-600"
              style={{ boxShadow: '0 0 0 0.1875rem rgb(48 76 253 / 25%)' }}
            />
            <h3 className="relative top-[-0.4375rem] text-lg font-semibold dark:text-slate-300">
              {t('education.university.title')}
            </h3>
            <span className="text-sm text-slate-500/75">{t('education.university.location')}</span>
            <span className="mt-2 text-sm capitalize text-slate-500/75">
              {dayjs('2013').format('YYYY')} — {dayjs('2016').format('YYYY')}
            </span>
            <p className="mt-4">
              <Trans
                i18nKey="resume:education.university.description"
                components={{ bold: <strong className="dark:text-slate-300" /> }}
              />
            </p>
          </motion.article>

          <motion.article
            className="relative flex flex-col border-l-2 border-gray-100/0 pl-5 pb-8 transition-opacity duration-1000 ease-in-out"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <span
              className="absolute left-[-0.425rem] top-0 h-3 w-3 rounded-full bg-indigo-600"
              style={{ boxShadow: '0 0 0 0.1875rem rgb(48 76 253 / 25%)' }}
            />
            <h3 className="relative top-[-0.4375rem] text-lg font-semibold dark:text-slate-300">
              {t('education.institute.title')}
            </h3>
            <span className="text-sm text-slate-500/75">{t('education.institute.location')}</span>
            <span className="mt-2 text-sm capitalize text-slate-500/75">
              {dayjs('2010').format('YYYY')} — {dayjs('2013').format('YYYY')}
            </span>
            <p className="mt-4">
              <Trans
                i18nKey="resume:education.institute.description"
                components={{ bold: <strong className="dark:text-slate-300" /> }}
              />
            </p>
          </motion.article>
        </div>
      </div>

      <div className="mt-8" ref={skillsRef}>
        <motion.h2
          className="flex flex-row items-center gap-3 text-2xl font-semibold transition-opacity duration-1000 ease-in-out dark:text-slate-200"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <Image
            className="shrink-0"
            width={40}
            height={40}
            src="/assets/icons/icon-dev.svg"
            alt={t('skills.picture')}
          />
          {t('skills.title')}
        </motion.h2>

        <div className="mt-8 rounded-3xl bg-gray-100 p-6 text-gray-700 dark:bg-slate-700/25 dark:text-slate-400 sm:p-8">
          <label htmlFor="frontend" className="block text-xs font-medium ">
            {t('skills.frontEnd')}
          </label>
          <motion.progress
            id="frontend"
            className="progress mt-1"
            value={skillsInView ? 90 : 0}
            max="100"
          />
          <label htmlFor="backend" className="mt-6 block text-xs font-medium ">
            {t('skills.backEnd')}
          </label>
          <progress
            id="backend"
            className="progress mt-1"
            value={skillsInView ? 75 : 0}
            max="100"
          />
          <label htmlFor="native" className="mt-6 block text-xs font-medium ">
            {t('skills.native')}
          </label>
          <progress id="native" className="progress mt-1" value={skillsInView ? 50 : 0} max="100" />
          <label htmlFor="social" className="mt-6 block text-xs font-medium ">
            {t('skills.social')}
          </label>
          <progress id="social" className="progress mt-1" value={skillsInView ? 70 : 0} max="100" />
          <label htmlFor="ops" className="mt-6 block text-xs font-medium">
            {t('skills.ops')}
          </label>
          <progress id="ops" className="progress mt-1" value={skillsInView ? 65 : 0} max="100" />
        </div>
      </div>
    </section>
  );
}
