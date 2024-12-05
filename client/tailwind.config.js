/** @type {import('tailwindcss').Config} */



export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"], // Define dónde buscar clases de Tailwind
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        "our-white": 'var(--our-white)',
        "our-green": 'var(--our-green)',
        "primary": 'var(--our-blue)',
        "darker-blue": 'var(--our-darker-blue)',
        "our-red": 'var(--our-red)',
      },
    },
  },
  plugins: [],
};
