import { RadioGroup } from '@headlessui/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next-static-site';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { XBlock, XMasonry } from 'react-xmasonry';
import { classNames } from '../lib/classnames';
import agentMPicture from '../public/assets/images/projects/agentm.webp';
import archilinkPicture from '../public/assets/images/projects/archilink.webp';
import citizenCamPicture from '../public/assets/images/projects/citizencam.webp';
import cityAppPicture from '../public/assets/images/projects/cityapp.webp';
import hassioAddonsPicture from '../public/assets/images/projects/hassio-addons.webp';
import resumeAssistantPicture from '../public/assets/images/projects/resume-assistant.webp';
import remoteRegiePicture from '/public/assets/images/projects/remote-regie.webp';
import startpagePicture from '/public/assets/images/projects/startpage.webp';

/**
 * @see https://cdn.dribbble.com/userupload/3904930/file/original-829c4b31d122a2640bee0103e434cdd4.png?compress=1&resize=752x
 */

enum Group {
  WEB = 'WEB',
  MOBILE = 'MOBILE',
  OPS = 'OPS',
  OPEN_SOURCE = 'OPEN_SOURCE',
}

const projects: {
  label: string;
  picture: StaticImageData;
  link?: string;
  groups: Group[];
}[] = [
  {
    label: 'cityapp - VDL',
    picture: cityAppPicture,
    link: 'https://www.vdl.lu/en/city/projects-and-commitments/smart-city/cityapp-vdl',
    groups: [Group.MOBILE],
  },
  {
    label: 'Resume Assistant',
    picture: resumeAssistantPicture,
    link: 'https://github.com/mtthp/ecv',
    groups: [Group.WEB, Group.OPEN_SOURCE],
  },
  {
    label: 'agentM',
    picture: agentMPicture,
    link: 'https://smartcitiesmag.lu/web/agentm-la-nouvelle-generation-davertissements-taxes/',
    groups: [Group.MOBILE],
  },
  {
    label: 'citizencam.tv',
    picture: citizenCamPicture,
    link: 'https://citizencam.tv',
    groups: [Group.WEB, Group.MOBILE],
  },
  {
    label: 'archi.link',
    picture: archilinkPicture,
    link: 'https://archi.link',
    groups: [Group.OPS],
  },
  {
    label: 'Home Assistant Addons',
    picture: hassioAddonsPicture,
    link: 'https://github.com/mtthp/hassio-addons',
    groups: [Group.OPS, Group.OPEN_SOURCE],
  },
  {
    label: 'Startpage',
    picture: startpagePicture,
    groups: [Group.WEB, Group.OPEN_SOURCE],
  },
  {
    label: 'Studio Renegade Remote Régie',
    picture: remoteRegiePicture,
    link: 'https://github.com/chriscamicas/girr',
    groups: [Group.WEB, Group.OPEN_SOURCE],
  },
];

export default function Portfolio({ className }: React.HTMLAttributes<HTMLElement>) {
  const { t } = useTranslation('portfolio');
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
  const [shouldRender, setShouldRender] = useState<boolean>(false);

  useEffect(() => {
    setShouldRender(true);
  }, []);

  return (
    <motion.section
      id="portfolio"
      className={classNames(
        'flex w-full flex-col pt-20 pb-7 transition-opacity duration-1000 ease-in-out',
        className,
      )}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}>
      <header className="px-7">
        <h1 className="text-5xl font-semibold">{t('title')}</h1>
        <hr className="divider mt-4" />
      </header>

      <RadioGroup
        value={selectedGroup}
        onChange={setSelectedGroup}
        className="group mx-7 mt-8 mb-3 flex gap-1 self-start rounded-lg bg-slate-100 p-0.5 transition-colors">
        {[
          { label: t(`categories.ALL`), value: null },
          ...Object.keys(Group).map((value) => ({ label: t(`categories.${value}`), value })),
        ].map(({ label, value }) => (
          <RadioGroup.Option
            key={`group-${label}`}
            value={value}
            as="button"
            className={({ checked }) =>
              classNames(
                checked
                  ? 'bg-white shadow-sm ring-1 ring-black ring-opacity-5'
                  : 'hover:bg-white/80',
                'flex items-center  rounded-md p-1.5 pl-2.5 pr-3.5 text-sm font-medium text-gray-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100',
              )
            }>
            {({ active, checked }) => (
              <RadioGroup.Label
                as="span"
                className={classNames(
                  checked ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900',
                  'text-gray-600 group-hover:text-gray-900',
                )}>
                {label}
              </RadioGroup.Label>
            )}
          </RadioGroup.Option>
        ))}
      </RadioGroup>

      {shouldRender && (
        <XMasonry>
          {projects
            .filter(({ groups }) => !selectedGroup || groups.includes(selectedGroup))
            .map((project) => (
              <XBlock key={project.label}>
                <motion.figure
                  className="w-full p-4 transition-opacity duration-150 ease-in-out"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}>
                  <Zoom>
                    <Image
                      className="rounded-xl"
                      src={project.picture}
                      loading="lazy"
                      data-zoom
                      alt={project.label}
                    />
                  </Zoom>
                  <figcaption className="mt-4">
                    <h5 className="text-lg font-semibold">
                      {project.link ? (
                        <a
                          className="text-indigo-600 underline-offset-2 hover:text-indigo-800 hover:underline"
                          href={project.link}>
                          {project.label}
                        </a>
                      ) : (
                        project.label
                      )}
                    </h5>
                    <span className="mt-1 text-sm text-slate-500/75">
                      {project.groups.map((group) => t(`categories.${group}`)).join(' - ')}
                    </span>
                  </figcaption>
                </motion.figure>
              </XBlock>
            ))}
        </XMasonry>
      )}
    </motion.section>
  );
}
