import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, linkedin, twitter } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpeg'),
  fullName: 'Mehedi Hasan',
  role: 'WordPress Developer and Writer',
  details: [
    { label: 'Phone', value: '+8801957594446', url: 'tel:+8801957594446' },
    { label: 'Email', value: 'hello@mehedi.click', url: 'mailto:hello@mehedi.click' },
    { label: 'From', value: 'Khulna, Bangladesh' },
    { label: 'Age', value: '18 Year old' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '+8801957594446' },
    { label: 'Email', value: 'hello@mehedi.click' },
    { label: 'LinkedIn', value: '/in/mehedibs2', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/asma019', url: 'https://github.com' },
    { label: 'Website', value: 'mehedi.click', url: '/', fullRow: true },
  ],
  description:
    'My name is Mehedi Hasan, an 18-year-old from Khulna, Bangladesh. I’m pursuing a **Diploma in Computer Science**, set to graduate in 2027. Alongside my studies, I work as a part-time freelancer and content writer, specializing in WordPress website optimization, development, and professional freelancing services.',
  tags: [{ name: 'Open for freelance' }, { name: 'Available for mentoring' }, { name: 'Working on side project' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Mehedi_Hasan.pdf',
  },
  links: [facebook({ url: 'https://www.facebook.com/mehedibs2' }), github({ url: '#' }), linkedin({ url: '#' }), twitter({ url: '#' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
