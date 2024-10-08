/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue, js, ts, jsx, tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'blue-0': '#007BFF',
        'blue-1' : '#0056b3',
        'white-0': '#f4f4f4',
      },
      'boxShadow':'0 0 10px rgba(0, 0, 0, 0.1)',
    },
  },
  plugins: [],
}

