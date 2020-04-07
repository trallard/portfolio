module.exports = {
  siteTitle: 'Tania Allard | Software Engineer',
  siteDescription:
    'I am a Software Engineer and developer advocate based in Manchester, UK. I focus on all things data, scientific computing, community building and open source.',
  siteKeywords:
    'Tania Allard, open-source, data science, machine learning, scientific computing, cloud, community, MLOps',
  siteUrl: 'https://trallard.dev',
  siteLanguage: 'en_GB',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'Tania Allard',
  location: 'Manchester, UK',
  email: 'trallard@bitsandchips.me',
  github: 'https://github.com/trallard',
  twitterHandle: '@ixek',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/trallard',
    },
    {
      name: 'Linkedin',
      url: 'www.linkedin.com/in/taniaallard',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/ixek',
    },
    {
      name: 'Devto',
      url: 'https://dev.to/trallard',
    },
    {
      name: 'Star',
      url: 'https://',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Find me',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  // Theme colours
  PinkColor: '#F2B2AC',
  PurpleColor: '#502E99',
  darkPurpleColor: '#25155c',
  // I create scalable palettes with the following tool
  // http://davidjohnstone.net/pages/lch-lab-colour-gradient-picker#ffffff,492a8c,221341

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
