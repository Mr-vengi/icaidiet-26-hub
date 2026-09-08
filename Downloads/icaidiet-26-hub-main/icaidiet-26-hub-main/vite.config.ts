import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tanstackStart(), react(), tsconfigPaths(), tailwindcss()],
  build: {
    cssMinify: false,
  },
  server: {
    allowedHosts: ['icaidiet-26-hub.onrender.com'],
  },
  preview: {
    allowedHosts: ['icaidiet-26-hub-4.onrender.com'],
  },
})
