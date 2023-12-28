import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactCircularProgressbar from 'react-circular-progressbar';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [reactCircularProgressbar],
    },
  },
});