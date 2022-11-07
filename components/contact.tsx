import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { useInView } from 'framer-motion';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useTranslation } from 'next-i18next-static-site';
import { FormEvent, useEffect, useRef, useState } from 'react';

export default function Contact({ className }: React.HTMLAttributes<HTMLElement>) {
  const { t } = useTranslation('contact');
  const mapRef = useRef<any>(null);
  const mapContainerRef = useRef<any>(null);
  const mapContainerInView = useInView(mapContainerRef, { once: true });
  const [hasSubmit, setSubmit] = useState<boolean>(false);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmit(true);
  };

  const buildMap = async () => {
    const mapboxgl = (await import('mapbox-gl')).default;
    mapboxgl.accessToken =
      'pk.eyJ1IjoibXR0aHAiLCJhIjoiY2twbHBnczc3MjdudTJwcml1dTFiZGNpNSJ9.ezBHPw4IUqVkpciAEsNCEQ';

    mapRef.current = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [6.1713572, 49.1186524], // starting position
      zoom: 13, // starting zoom
    });

    // create the popup
    const popup = new mapboxgl.Popup({ offset: 40 }).setText('Mairie de Metz - Hôtel de Ville');

    // create DOM element for the marker
    const el = document.createElement('div');
    el.id = 'marker';

    // create the marker
    new mapboxgl.Marker(el)
      .setLngLat([6.1713572, 49.1186524])
      .setPopup(popup) // sets a popup on this marker
      .addTo(mapRef.current);

    // Add zoom and rotation controls to the map.
    mapRef.current.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    // disable map zoom when using scroll
    mapRef.current.scrollZoom.disable();
  };

  useEffect(() => {
    if (!mapContainerInView || mapRef.current) return; // initialize map only once
    buildMap();
  }, [mapContainerInView]);

  return (
    <section id="contact" className={['flex flex-col p-7 pt-20', className].join(' ')}>
      <header>
        <h1 className="text-5xl font-semibold">{t('title')}</h1>
        <hr className="divider mt-4" />
      </header>

      <article className="mt-12">
        <div
          ref={mapContainerRef}
          id="map"
          className="h-96 max-w-full overflow-hidden rounded-2xl bg-slate-300"></div>
      </article>

      <article className="mt-8">
        <h2 className="text-2xl font-semibold">{t('form.title')}</h2>
        <form className="mt-6 flex flex-row flex-wrap gap-6" onSubmit={onSubmit}>
          <div className="min-w-[12rem] flex-1">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              {t('form.name.label')}
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              autoComplete="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm transition-colors hover:border-indigo-500/75 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div className="min-w-[12rem] flex-1">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              {t('form.email.label')}
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              autoComplete="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm transition-colors hover:border-indigo-500/75 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div className="w-full">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              {t('form.message.label')}
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                required
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm transition-colors hover:border-indigo-500/75 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea>
            </div>
            <p className="mt-2 text-xs text-gray-500">{t('form.message.description')}</p>
          </div>

          {hasSubmit && (
            <div className="flex-1 rounded-md  border-l-4 border-red-400 bg-red-50 py-2 px-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  {/* <!-- Heroicon name: solid/check-circle --> */}
                  <ExclamationCircleIcon className="h-6 w-6 shrink-0 text-red-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-red-700">
                    {t('form.onSubmit', { year: new Date().getFullYear() })}
                  </p>
                </div>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="ml-auto inline-flex justify-center gap-3 self-start rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <PaperAirplaneIcon className="h-6 w-6 shrink-0" />
            <span>{t('form.action')}</span>
          </button>
        </form>
      </article>
    </section>
  );
}
