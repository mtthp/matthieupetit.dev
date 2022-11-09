import { getAllLanguageSlugs, getLanguage, useTranslation } from 'next-i18next-static-site';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Suspense } from 'react';
import About from '../../components/about';
import Loader from '../../components/loader';

const Resume = dynamic(() => import('../../components/resume'), { suspense: true });
const Portfolio = dynamic(() => import('../../components/portfolio'), { suspense: true });
const Contact = dynamic(() => import('../../components/contact'), { suspense: true });

export default function SinglePage({ locale }: { locale: string }) {
  const { t } = useTranslation('sidebar');

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Matthieu Petit - {t('status')}</title>
      </Head>
      <About />
      <Suspense fallback={<Loader className="mx-auto my-6" />}>
        <Resume className="mt-8" locale={locale} />
      </Suspense>
      <Suspense fallback={<Loader className="mx-auto my-6" />}>
        <Portfolio className="mt-8" />
      </Suspense>
      <Suspense fallback={<Loader className="mx-auto my-6" />}>
        <Contact className="mt-8" />
      </Suspense>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllLanguageSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const language = getLanguage(params.lang);
  return {
    props: {
      locale: language,
    },
  };
}
