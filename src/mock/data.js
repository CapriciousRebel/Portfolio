import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "Smith's Portfolio", // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'My Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Smith Pereira',
  subtitle: "I'm a software developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "I'm a sophomore pursuing Electronics and Communications Engineering from IIT Roorkee.",
  paragraphTwo:
    'My interests lie in web development and game development. For me, the joy of software development lies in seeing my work impact people’s lives, like seeing my friends enjoy the games I made or people benefit from the webapps I make...',
  paragraphThree:
    "I'm a developer at SDSLabs, a student run coding group at IIT Roorkee. Most of my technical learning has progressed while being a member of SDSLabs.",
  resume: 'https://drive.google.com/file/d/1c3PFLj3Rz71sP-54cSjwU6v6dX86RH_z/view', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'covidvaccinetracker.png',
    title: 'Covid Vaccine Tracker for India',
    info: 'A user friendly webapp written using ReactJS, deployed on github pages that keeps checking for the availability of a vaccination slot in the given pincode and then notifies the user with a sound.',
    info2:
      'Includes filters like type of vaccine, price of vaccine, allowed ages for the users to get notified only for the slot that suits them.',
    url: 'https://capriciousrebel.github.io/CovidVaccineTracker/#/',
    urltype: 'live',
    repo: 'https://github.com/CapriciousRebel/CovidVaccineTracker',
  },
  {
    id: nanoid(),
    img: 'analysisai.png',
    title: 'Analysis.ai',
    info: 'A traffic sign recognition application built at Inter IIT Tech Meet 2021 and won the Silver Medal.',
    info2:
      'Analyis.ai is designed to help an analyst build, augment and analyse datasets for traffic sign recognition.',
    url: 'https://drive.google.com/file/d/1gVdLHIEAb1FLye44VGJ-np3y0YUNrqzB/view?usp=sharing',
    urltype: 'demo',
    repo: 'https://github.com/sdslabs/BOSCH-TRAFFIC-SIGN-RECOGNITION-frontend',
  },
  {
    id: nanoid(),
    img: 'crescendo.png',
    title: 'CR3SC3NDO',
    info: 'An automated 3D music visualizer created at Inout 7.0',
    info2:
      'Crescendo creates amazing music videos in 2D and 3D (VR) by automatically splitting the instruments comprising a song, and then assigns each instrument to scenery in the video, hence, conveying the role each instrument plays in the song, showing the true essence of the song',
    url: 'https://vimeo.com/493341739',
    urltype: 'demo',
    repo: 'https://github.com/CapriciousRebel/crescendo-frontend',
  },
  {
    id: nanoid(),
    img: 'outrun.jpg',
    title: 'Outrun Chase',
    info: 'Outrun Chase is a retro-wave outrun themed racing/shooting game built at Hackathon HAB-59, continued under SDSLabs.',
    info2: '',
    url: 'https://www.youtube.com/watch?v=5Tt7xaWk7xc',
    urltype: 'trailer',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'studyportal.png',
    title: 'StudyPortal',
    info: 'StudyPortal is the knowledge hub of IITRoorkee, through which one can share open courseware files, videos, presentations, etc, developed by SDSLabs.',
    info2: '',
    url: 'https://study.sdslabs.co/',
    urltype: 'live',
    repo: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'code.capriciousrebel@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/CapriciousRebel',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/SmithPereira9',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/capriciousrebel/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
