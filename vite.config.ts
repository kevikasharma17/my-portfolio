import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  assetsInclude: [
    '**/*.jpg', 
    '**/*.JPG', 
    '**/*.png', 
    '**/*.PNG',
    '**/*.pdf',
    '**/*.PDF',
    '**/*.pptx',
    '**/*.PPTX',
    '**/*.mp4',
    '**/*.MP4'
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    assetsInlineLimit: 0, // Don't inline any assets
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]'
      }
    },
  },
});
