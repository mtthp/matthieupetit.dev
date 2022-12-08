import { useTranslation } from 'next-i18next-static-site';
import { usePlausible } from 'next-plausible';
import Link from 'next/link';
import React, { useEffect } from 'react';

type PlausibleEvents = {
  '404': never;
};

export default function NotFound() {
  const { t } = useTranslation('404');
  const plausible = usePlausible<PlausibleEvents>();

  useEffect(() => {
    plausible('404');
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="min-h-full p-7 md:grid md:place-items-center lg:px-8">
      <div className="mx-auto max-w-max">
        <main className="sm:flex">
          <p className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">404</p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                {t('title')}
              </h1>
              <p className="mt-1 text-base text-gray-500">{t('description')}</p>
            </div>
            <div className="mt-10 flex flex-row flex-wrap gap-3 sm:border-l sm:border-transparent sm:pl-6">
              <Link
                href="/"
                className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                {t('actions.home')}
              </Link>
              <a
                href="mailto:p.matthieu@me.com"
                className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                {t('actions.contact')}
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
