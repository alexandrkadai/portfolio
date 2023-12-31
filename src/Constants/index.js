import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  githubicon,
  linkedin,
  phone,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

export const socLinks = [
  {
    id: 'github',
    icon: githubicon,
    link: 'https://github.com/alexandrkadai'
  },
  {
    id: 'linkedin',
    icon: linkedin,
    link: 'https://www.linkedin.com/in/kadaialexandr/'
  },
  {
    id: 'phonenumber',
    icon: phone,
    link: 'tel:+380636035319'
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Open Minded',
    icon: mobile,
  },
  {
    title: 'Positivly Charged',
    icon: backend,
  },
  {
    title: 'Fast Learner',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'FreeLancer ',
    company_name: 'GrillBar.com.ua',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'April 2023 - June 2023',
    points: [
      'Developing and maintaining web applications for Kiev city grill bar',
      'Collaborating with  designers, product managers, and product owner to create high-quality product.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
    ],
  },
  {
    title: 'React.js Developer',
    company_name: 'HelpUkraineFoundation',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'October 2022 - April 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies from scratch.',
      'Collaborating with cross-functional teams including designers and back-end developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Vue.js and React.js Developer',
    company_name: 'UnicorneSpace',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'October 2021 - March 2022',
    points: [
      'Developing and maintaining web applications using React.js and Vue.js.',
      'Working with a great team of developers and designers.',
      'Implementing responsive design and ensuring cross-browser compatibility, making applications from scratch, and fixing bugs from existing.',
      'Participating in problem solving and fiding approach to solve code implementation in best way.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Personal Teacher',
    icon: shopify,
    iconBg: '#383E56',
    date: 'September 2021 - December 2021',
    points: [
      'Creating an education program to teach and develop skills.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'React.js Developer',
    company_name: 'Eurotelecom',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'Feburary 2021 - April 2021',
    points: [
      'Developing and maintaining web applications for Ukrainian Company Eurotelecom.',
      'Collaborating with  designers, product managers, and other developers to create high-quality web-site.',
      'Implementing responsive design and ensuring cross-browser compatibility, with animations.',
      'Participating in code reviews and providing deploy of the website',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
