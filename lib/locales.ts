import { languages, namespaces } from 'next-i18next-static-site';

const locales = languages.reduce((acc, locale) => {
  return {
    ...acc,
    [locale]: namespaces.reduce((namespacesAcc, namespace) => {
      return {
        ...namespacesAcc,
        [namespace]: require(`../locales/${locale}/${namespace}.json`),
      };
    }, {}),
  };
}, {});

export default locales;
