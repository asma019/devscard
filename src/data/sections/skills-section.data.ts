import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  apolloGraphql,
  astro,
  chakraUi,
  cypress,
  eslint,
  firebase,
  mongoDb,
  nestJs,
  pnpm,
  postgreSql,
  prettier,
  react,
  sass,
  supabase,
  tailwindCss,
  typescript,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        react({
          level: 4,
          description:
            'Proficient in HTML5, crafting responsive layouts, semantic structures, and clean code for modern web development.',
        }),
        typescript({
          level: 4,
          description: 'Skilled in CSS3, creating responsive designs, animations, and visually appealing layouts with clean, maintainable code.',
        }),
        sass({
          level: 4,
          description: 'Nulla interdum pellentesque ultricies. Ut id eros commodo, ultrices ligula eu, elementum ante.',
        }),
        chakraUi({ level: 5 }),
        tailwindCss({ level: 3 }),
        prettier({ level: 5 }),
        eslint({
          level: 4,
          description:
            'Nulla tempor turpis at vehicula pharetra. Vestibulum tellus tortor, commodo et suscipit id, lobortis id nunc.',
        }),
        nestJs({
          level: 3,
          description:
            'Praesent feugiat ultricies iaculis. In posuere vehicula odio, sed consequat velit porta viverra.',
        }),
        postgreSql({ level: 2 }),
        mongoDb({ level: 1 }),
        firebase({ level: 1 }),
        pnpm({ level: 3 }),
      ],
    },
    {
      title: 'I want to learn',
      skills: [apolloGraphql(), astro(), supabase(), cypress()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:pl', name: 'Polish - native' },
        { icon: 'circle-flags:us', name: 'English - C1' },
        { icon: 'circle-flags:es-variant', name: 'Spanish - B1' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
