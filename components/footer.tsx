import { mdiDevTo, mdiLinkedin, mdiReddit, mdiTwitter } from '@mdi/js';
import Icon from '@mdi/react';
import { Trans, useTranslation } from 'next-i18next-static-site';

export default function Footer({ className }: React.HTMLAttributes<HTMLElement>) {
  const { t } = useTranslation('footer');
  return (
    <footer className={['flex flex-col flex-nowrap items-center', className].join(' ')}>
      <div className="mb-8 flex flex-row items-center justify-center gap-2 text-gray-600">
        <a
          className="transition-colors hover:text-indigo-600"
          href="https://dev.to/mtthp"
          title="Dev.to">
          <Icon path={mdiDevTo} size={1} />
        </a>
        <a
          className="transition-colors hover:text-indigo-600"
          href="https://www.reddit.com/user/mtthp"
          title="Reddit">
          <Icon path={mdiReddit} size={1} />
        </a>
        <a
          className="transition-colors hover:text-indigo-600"
          href="https://twitter.com/mtthp"
          title="Twitter">
          <Icon path={mdiTwitter} size={1} />
        </a>
        <a
          className="transition-colors hover:text-indigo-600"
          title="LinkedIn"
          href="https://www.linkedin.com/in/mtthp/">
          <Icon path={mdiLinkedin} size={1} />
        </a>
      </div>
      <span>{t('thanks')}</span>
      <span>
        <Trans
          i18nKey="footer:madeWith"
          components={{
            nextjs: (
              <a
                className="text-indigo-600 transition-colors hover:text-indigo-800"
                href="https://nextjs.org/"
              />
            ),
          }}
        />
      </span>
    </footer>
  );
}
