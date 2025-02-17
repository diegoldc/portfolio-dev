import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"], // Cambia la fuente predeterminada
      },
      colors: {
        'deep-purple': '#673AB7',
        "light-purple": "#d8b4fe",
        "logo-purple" : "#352842",
        "page-purple": "#63e",
      },
      backfaceVisibility: {
        hidden: 'hidden',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
      perspective: {
        1000: '1000px',
      }
    },
  },
  variants: {
    extend: {
      backfaceVisibility: ['responsive', 'hover', 'focus'],
      transform: ['hover', 'focus']
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
  
}
