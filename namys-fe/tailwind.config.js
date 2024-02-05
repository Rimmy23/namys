/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'main': '#e9ede9',
        'footer': '#4f4f4f',
        'background': '#8e908e',
        'card': '#DCDEE0'
              },
              gridTemplateRows: {
                '[auto,auto,1fr]': 'auto auto 1fr',
              },
      backgroundImage: {
        'logo' : "url('./src/images/Namys.png')",
    },   
  },
  },
  plugins: ['@tailwindcss/aspect-ratio', ],
}

