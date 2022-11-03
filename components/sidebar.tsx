import { RadioGroup } from '@headlessui/react';
import {
  CalendarIcon,
  DevicePhoneMobileIcon,
  DocumentIcon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import { mdiGithub } from '@mdi/js';
import Icon from '@mdi/react';
import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import { useTranslation } from 'next-i18next-static-site';
import Link from 'next/link';
import { classNames } from '../lib/classnames';
dayjs.extend(LocalizedFormat);

export default function SideBar({ className }: React.HTMLAttributes<HTMLElement>) {
  const { t, i18n } = useTranslation('sidebar');

  const onChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    window.history.replaceState(null, '', `/${lang}`);
  };

  return (
    <aside className={classNames('rounded-3xl bg-slate-50', className)}>
      <div className="sticky top-0 mx-auto flex w-72 flex-col gap-6 p-10 text-center text-gray-600 max-sm:px-0">
        <div className="mask mask-squircle">
          <svg className="mx-auto h-32 w-32" viewBox="0 0 188 188">
            <image
              xlinkHref="/assets/images/profile.webp"
              height="100%"
              width="100%"
              aria-label={t('profile.description')}
            />
          </svg>
        </div>
        <h3 className="flex items-center justify-center gap-x-3 text-3xl tracking-tight sm:flex-col">
          Matthieu
          <span className="block font-bold">Petit</span>
        </h3>
        <span className="self-center rounded-full bg-slate-200 py-2 px-4">{t('status')}</span>

        <RadioGroup
          value={i18n.language as string}
          onChange={onChangeLanguage}
          className="group mx-auto flex gap-1 self-start rounded-lg bg-slate-100 p-0.5 transition-colors">
          {['en', 'fr'].map((locale) => (
            <RadioGroup.Option
              key={`locale-${locale}`}
              value={locale}
              as="button"
              className={({ checked }) =>
                classNames(
                  checked
                    ? 'bg-white shadow-sm ring-1 ring-black ring-opacity-5'
                    : 'hover:bg-white/80',
                  'flex items-center rounded-md p-1.5 pl-2.5 pr-3.5 text-sm font-medium text-gray-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100',
                )
              }>
              {({ active, checked }) => (
                <RadioGroup.Label
                  as="span"
                  className={classNames(
                    checked ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900',
                    'text-gray-600 group-hover:text-gray-900',
                  )}>
                  {t(`locales.${locale}`)}
                </RadioGroup.Label>
              )}
            </RadioGroup.Option>
          ))}
        </RadioGroup>

        <ul className="flex flex-col gap-4 text-gray-600">
          <li className="flex flex-row flex-nowrap items-center gap-3 overflow-hidden text-ellipsis whitespace-nowrap">
            <CalendarIcon className="h-6 w-6 shrink-0" />
            <span>{i18n.language && dayjs('1992-03-19').locale(i18n.language).format('LL')}</span>
          </li>
          <li className="flex flex-row flex-nowrap items-center gap-3 overflow-hidden text-ellipsis whitespace-nowrap">
            <Link
              className="flex flex-row flex-nowrap items-center gap-3 overflow-hidden text-ellipsis whitespace-nowrap transition-colors hover:text-indigo-600"
              href="#contact">
              <MapPinIcon className="h-6 w-6 shrink-0" />
              <span>{t('location')}</span>
            </Link>
          </li>
          <li>
            <a
              className="flex flex-row flex-nowrap items-center gap-3 overflow-hidden text-ellipsis whitespace-nowrap transition-colors hover:text-indigo-600"
              href="mailto:p.matthieu@me.com">
              <EnvelopeIcon className="h-6 w-6 shrink-0" />
              <span>p.matthieu@me.com</span>
            </a>
          </li>
          <li>
            <a
              className="flex flex-row flex-nowrap items-center gap-3 overflow-hidden text-ellipsis whitespace-nowrap transition-colors hover:text-indigo-600"
              href="tel:+33604430975">
              <DevicePhoneMobileIcon className="h-6 w-6 shrink-0" />
              <span>+33 604 430 975</span>
            </a>
          </li>
          <li>
            <a
              className="flex flex-row flex-nowrap items-center gap-3 overflow-hidden text-ellipsis whitespace-nowrap transition-colors hover:text-indigo-600"
              href="https://github.com/mtthp/">
              <Icon className="shrink-0" path={mdiGithub} size={1} />
              <span>mtthp</span>
            </a>
          </li>
        </ul>

        <a href="/assets/docs/Matthieu-Petit-Resume.pdf">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-md border border-transparent bg-indigo-600 py-3 px-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <DocumentIcon className="h-6 w-6 shrink-0" />
            <span>{t('download')}</span>
          </button>
        </a>
      </div>
    </aside>
  );
}
