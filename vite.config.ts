import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@app': resolve(__dirname, 'src/App'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@entities': resolve(__dirname, 'src/entities'),
      '@features': resolve(__dirname, 'src/features'),
      '@componentsCvEditor': resolve(
        __dirname,
        'src/features/cv-editor/components',
      ),
      '@shared': resolve(__dirname, 'src/shared'),
    },
  },
  build: {
    outDir: 'dist', // ← всё попадёт в ./dist вместо src/
    emptyOutDir: true, // ← очищает папку dist перед сборкой
    sourcemap: false,
  },
});

//"Этого хватает для dev режима для builde нужны alice"

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';
// import tsconfigPaths from 'vite-tsconfig-paths';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [tsconfigPaths(), react()],
// });
