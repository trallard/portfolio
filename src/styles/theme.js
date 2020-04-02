const theme = {
  colors: {
    dark: '#141759',
    darkestNavy: '#39216e',
    darkNavy: '#39216e',
    navy: '#41257d', // dark purple
    lightNavy: '#492A8C', // light purple
    darkGrey: '#333f58',
    mediumGrey: '#2d3952',
    grey: '#4c5772',
    lightGrey: '#606a86',
    slate: '#a0a8c0',
    lightSlate: '#bbc0d2',
    lightestSlate: '#c8cddb',
    offWhite: '#fbfafd',
    white: '#fafcff',
    pink: '#FF647F',
    yellow: '#FFC464',
    orange: '#FF9E64',
    // green: '#04D9D9', // blue
    green: '#F2B2AC', //pink
    blue: '#71AFFF',
    darkBlue: '#1D7FFC',
    highlight: 'rgba(41, 61, 90, 0.99)',
    transGreen: 'rgba(100, 255, 218, 0.07)',
    transNavy: 'rgba(10, 25, 47, 0.7)',
    shadowNavy: 'rgba(2, 12, 27, 0.7)',
  },

  fonts: {
    Calibre:
      'Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
    SFMono: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace',
  },

  fontSizes: {
    xs: '12px',
    smish: '13px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '22px',
    h3: '32px',
  },

  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

  borderRadius: '3px',
  navHeight: '100px',
  navScrollHeight: '70px',
  margin: '20px',

  tabHeight: 42,
  tabWidth: 120,
  radius: 3,

  gradient: `linear-gradient(0.4turn, #64d6ff, #64ffda)`,

  loaderDelay: `6`,

  hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,
};

export default theme;
