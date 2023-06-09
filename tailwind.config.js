/** @type {import('tailwindcss').Config} */
//  /**   @type {import('flowbite')} */
// import plugin from './node_modules/flowbite'
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},  
  },
  plugins: [require('flowbite/plugin')],
}

