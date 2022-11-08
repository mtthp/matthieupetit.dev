import Cal from '@calcom/embed-react';
import { useInView } from 'framer-motion';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useTranslation } from 'next-i18next-static-site';
import { useEffect, useRef } from 'react';

export default function Contact({ className }: React.HTMLAttributes<HTMLElement>) {
  const { t } = useTranslation('contact');
  const mapRef = useRef<any>(null);
  const mapContainerRef = useRef<any>(null);
  const mapContainerInView = useInView(mapContainerRef, { once: true });

  const calContainerRef = useRef<any>(null);
  const calContainerInView = useInView(calContainerRef, { once: true });

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

      <article ref={calContainerRef} className="mt-8">
        <h2 className="text-2xl font-semibold">{t('form.title')}</h2>
        {calContainerInView && (
          <Cal
            className="mt-6 min-h-[600px]"
            calLink="mtthp"
            config={{ styles: 'background-color: black;' }}
          />
        )}
      </article>
    </section>
  );
}
