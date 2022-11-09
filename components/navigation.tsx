import { useTranslation } from 'next-i18next-static-site';
import { useEffect, useState } from 'react';

export default function Navigation({ className }: React.HTMLAttributes<HTMLElement>) {
  const { t } = useTranslation('navigation');
  const [hash, setHash] = useState<string>('');

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };
    setHash(window.location.hash);

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <nav className={['flex flex-row flex-nowrap justify-end', className].join(' ')}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="h-16 self-stretch text-white dark:text-slate-900"
        viewBox="0 0 135.5 70">
        <path
          fill="currentColor"
          d="M64 48.3333C40.3125 70 0 70 0 70h135.5V0h-8.673C104.41 0 85.7045 15.5842 74.3306 34.9015 71.281 40.0808 67.8169 44.8421 64 48.3333z"
        />
      </svg>
      <ul className="z-10 flex h-16 flex-row items-center gap-2 rounded-tr-3xl bg-white pt-4 pr-10 font-medium uppercase tracking-wider dark:bg-slate-900 dark:text-slate-400">
        <li>
          <a
            href="#about"
            className={[
              'rounded-xl py-2 px-4 transition-colors',
              hash.includes('#about') ? 'bg-indigo-600 text-white' : 'hover:text-indigo-600',
            ].join(' ')}
            aria-current={hash.includes('#about') ? 'page' : false}>
            {t('about')}
          </a>
        </li>
        <li>
          <a
            href="#resume"
            className={[
              'rounded-xl py-2 px-4 transition-colors',
              hash.includes('#resume') ? 'bg-indigo-600 text-white' : 'hover:text-indigo-600',
            ].join(' ')}
            aria-current={hash.includes('#resume') ? 'page' : false}>
            {t('resume')}
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className={[
              'rounded-xl py-2 px-4 transition-colors',
              hash.includes('#portfolio') ? 'bg-indigo-600 text-white' : 'hover:text-indigo-600',
            ].join(' ')}
            aria-current={hash.includes('#portfolio') ? 'page' : false}>
            {t('portfolio')}
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={[
              'rounded-xl py-2 px-4 transition-colors',
              hash.includes('#contact') ? 'bg-indigo-600 text-white' : 'hover:text-indigo-600',
            ].join(' ')}
            aria-current={hash.includes('#contact') ? 'page' : false}>
            {t('contact')}
          </a>
        </li>
      </ul>
    </nav>
  );
}
