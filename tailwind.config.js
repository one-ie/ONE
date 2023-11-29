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
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  
 // daisyUI config
  daisyui: {
    themes: [
      {
        ONE: {
          primary: '#1c1917',
          secondary: '#312e81',
          accent: '#365314',
          neutral: 'red',
          'base-100': '#111',
          info: '#77a2f8',
          success: '#21dec5',
          warning: '#c17915',
          error: '#f22618',
        },
        TWO: {
          primary: '#1D3963',
          secondary: '#394E32',
          accent: '#365314',
          neutral: 'red',
          'base-100': 'white',
          info: '#77a2f8',
          success: '#21dec5',
          warning: '#c17915',
          error: '#f22618',
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
  },
}
