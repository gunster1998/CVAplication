import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {},
  plugins: [tsconfigPaths(), react()],
});

// alias: {
//   '@': path.resolve(__dirname, './src'),
//   '@assets': path.resolve(__dirname, './src/assets'),
//   '@entities': path.resolve(__dirname, './src/entities'),
//   '@shared': path.resolve(__dirname, './src/shared'),
//   '@features': path.resolve(__dirname, './src/features'),
// },
