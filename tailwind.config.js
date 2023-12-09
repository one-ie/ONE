/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // Customizing font sizes
      fontSize: {
        xs: '.75rem', // 12px
        sm: '.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
        '6xl': '4rem', // 64px
        '7xl': '5rem', // 80px
        // Add more sizes as needed
      },
    },
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      display: ['ui-sans-serif', 'system-ui'],
      body: ['ui-sans-serif', 'system-ui'],
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],

  // daisyUI config
  daisyui: {
    themes: [
      {
        ONE: {
          primary: '#1d3963',
          'focus-primary': '#102646',
          'border-primary': '#ffffff',
          'content-primary': '#d9d9d9',
          secondary: '#394e32',
          'focus-secondary': '#23321e',
          'border-secondary': '#23321e',
          'content-secondary': '#ffffff',
          accent: '#ffffff',
          'border-accent': '#4b5563',
          neutral: '#111111',
          'focus-neutral': '#111111',
          'border-neutral': '#ffffff',
          'content-neutral': '#ffffff',
          // Base Colors for Background
          'base-100': '#111', // Main Color
          'base-200': '#222', // Slightly Darker or Lighter
          'base-300': '#333', // Even more dark or light
          // Info Colors
          info: '#77a2f8',
          success: '#21dec5',
          warning: '#c17915',
          error: '#f22618',
          //Font
          fontFamily: {
            sans: [
              '-apple-system',
              'BlinkMacSystemFont',
              'Segoe UI',
              'Roboto',
              'Oxygen',
              'Ubuntu',
              'Cantarell',
              'Fira Sans',
              'Droid Sans',
              'Helvetica Neue',
              'sans-serif',
            ],
          },
          // Styles
          '--rounded-box': '1rem', // border radius rounded-box utility class, used in card and other large boxes
          '--rounded-btn': '3.5rem', // border radius rounded-btn utility class, used in buttons and similar element
          '--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
          '--animation-btn': '0.25s', // duration of animation when you click on button
          '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
          '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
          '--border-btn': '1px', // border width of buttons
          '--tab-border': '1px', // border width of tabs
          '--tab-radius': '0.5rem', // border radius of tabs
        },
        TWO: {
           primary: '#1d3963',
          'focus-primary': '#102646',
          'border-primary': '#ffffff',
          'content-primary': '#d9d9d9',
          secondary: '#394e32',
          'focus-secondary': '#23321e',
          'border-secondary': '#23321e',
          'content-secondary': '#ffffff',
          accent: '#111111',
          'border-accent': '#4b5563',
          neutral: '#ffffff',
          'focus-neutral': '#111111',
          'border-neutral': '#ffffff',
          'content-neutral': '#ffffff',
          // Base Colors for Background
          'base-100': '#fff', // Main Color
          'base-200': '#eee', // Slightly Darker or Lighter
          'base-300': '#d8d8d8', // Even more dark or light
          // Info Colors
          info: '#77a2f8',
          success: '#21dec5',
          warning: '#c17915',
          error: '#f22618',
          //Font
          fontFamily: {
            sans: [
              '-apple-system',
              'BlinkMacSystemFont',
              'Segoe UI',
              'Roboto',
              'Oxygen',
              'Ubuntu',
              'Cantarell',
              'Fira Sans',
              'Droid Sans',
              'Helvetica Neue',
              'sans-serif',
            ],
          },
          // Styles
          '--rounded-box': '1rem', // border radius rounded-box utility class, used in card and other large boxes
          '--rounded-btn': '3.5rem', // border radius rounded-btn utility class, used in buttons and similar element
          '--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
          '--animation-btn': '0.25s', // duration of animation when you click on button
          '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
          '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
          '--border-btn': '1px', // border width of buttons
          '--tab-border': '1px', // border width of tabs
          '--tab-radius': '0.5rem', // border radius of tabs
        },
      },
      'ONE',
      'TWO',
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
    ],
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    darkTheme: 'ONE',
  },
}
