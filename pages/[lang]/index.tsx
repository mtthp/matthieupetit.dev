import { getAllLanguageSlugs, getLanguage, useTranslation } from 'next-i18next-static-site';
import Head from 'next/head';
import About from '../../components/about';
import Contact from '../../components/contact';
import Portfolio from '../../components/portfolio';
import Resume from '../../components/resume';

export default function SinglePage({ locale }: { locale: string }) {
  const { t } = useTranslation('sidebar');

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Matthieu Petit - {t('status')}</title>
      </Head>
      <About />
      <Resume className="mt-8" locale={locale} />
      <Portfolio className="mt-8" />
      <Contact className="mt-8" />
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
