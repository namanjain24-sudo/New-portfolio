export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#MyProjects',
  },
  {
    id: 4,
    name: 'Work',
    href: '#work',
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
  {
    id: 6,
    name: 'Resume',
    href: 'assets/Resume-Naman Jain (12) (1).pdf',
    target: '_blank',
  },
];



export const myProjects = [
  {
    title: 'CryptoVision',
    desc: 'Developed a responsive web app to track real-time cryptocurrency data. Includes live price tickers, market cap analytics, and interactive charts. Built with modular React components and styled using Tailwind CSS for a modern UI/UX.',
    subdesc:
      'Built with modular React components and styled using Tailwind CSS for a modern UI/UX.',
    href: 'https://crypto-vision-ecru.vercel.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },

    ],
  },
  {
    title: 'Roadmap for developer',
    desc: 'This Developer Roadmap website, provides a structured learning path for developers. It visually guides users through essential technologies,',
    subdesc:
      'With this roadmap website user can view several roadmap for different technologies and also can view the roadmap for different languages,it is built with HTML, CSS, and JavaScript',
    href: 'https://roadmap-five-pi.vercel.app/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/js.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/html.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/css.png',
      },
    ],
  },
  {
    title: 'HomeScope360',
    desc: 'HomeScope360 is a platform that allows users to view their home in 360 degrees. It is built with React.js, TailwindCSS .',
    subdesc:'This website is under development,for now it is a static website.',
    href: 'https://roadmap-five-pi.vercel.app/',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Mern stack intern',
    duration: '2 months',
    title: "MERN Stack Developer Intern – Klariti Learning Innovations Working on real-world full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Collaborating with the team to develop scalable education-tech solutions. Gaining hands-on experience in responsive UI development, RESTful APIs, and Git-based workflows.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    // id: 2,
    // name:'more coming soon',
  // },
  // {
  //   id: 3,
  //   name: 'Notion',
  //   pos: 'Junior Web Developer',
  //   duration: '2019 - 2020',
  //   title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
  //   icon: '/assets/notion.svg',
  //   animation: 'salute',
  }
];
