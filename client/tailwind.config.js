/** @type {import('tailwindcss').Config} */



export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"], // Define dónde buscar clases de Tailwind
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
};
