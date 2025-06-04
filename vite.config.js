
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwind, autoprefixer],
    },},
    server:{
      port:5000,
    },
})
