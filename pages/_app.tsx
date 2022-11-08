import '../styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import {
  I18nProvider,
  languages,
  defaultLanguage,
  namespaces,
  defaultNamespace,
} from 'next-i18next-static-site';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../components/layout';
import locales from '../lib/locales';

const MyApp = ({ Component, pageProps }: AppProps) => {
  // i18n options
  const i18n = {
    languages,
    defaultLanguage,
    namespaces,
    defaultNamespace,
    locales,
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="address=no" />
        <meta name="author" content="Matthieu Petit" />
        <meta name="description" content="Online resume" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="matthieupetit.dev" />
        <meta name="twitter:title" content="Matthieu Petit" />
        <meta name="twitter:description" content="Online resume" />

        <meta property="og:title" content="Matthieu Petit" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="matthieupetit.dev" />
        <meta property="og:description" content="Online resume" />
        <meta property="og:site_name" content="Matthieu Petit" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#fceae5" />
        {/* <meta name="theme-color" content="#fceae5" /> */}
      </Head>
      <Script
        defer
        data-domain="matthieupetit.dev"
        src="https://plausible.matthieupetit.dev/js/plausible.js"
      />

      <div className="background fixed top-0 bottom-0 left-0 right-0 z-[-1] h-screen w-screen max-sm:hidden" />
      <I18nProvider i18n={i18n}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </I18nProvider>
    </>
  );
};

export default appWithTranslation(MyApp);
