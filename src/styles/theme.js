const theme = {
  colors: {
    dark: '#141759',
    darkestPurple: '#29125B',
    darkPurple: '#31176A',
    Purple: '#3A1C7A',
    lightPurple: '#442489',
    transPurple: 'rgba(165, 37, 125, 0.7)',
    Pink: '#F2B2AC',
    highlight: 'rgba(242, 214, 128, 0.99)',
    transPink: 'rgba(242, 178, 172, 0.07)',
    shadowPurple: 'rgba(40, 23, 79, 0.7)',
    darkGrey: '#333f58',
    mediumGrey: '#2d3952',
    grey: '#4c5772',
    lightGrey: '#606a86',
    lightestGrey: '#737d9b',
    Blue: '#8ba2d5',
    lightBlue: '#ACBDE2',
    lightestBlue: '#D6DEEF',
    offWhite: '#ECEFF5',
    white: '#fafcff',
  },

  fonts: {
    MainFont:
      'Sofia Pro Soft, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
    MonoFont:
      'Attribute mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace',
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

  // general transitions for the whole site - allows for them to be uniform
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

  loaderDelay: `5`,

  hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,
};

export default theme;
