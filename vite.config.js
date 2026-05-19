import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main:       resolve(__dirname, 'index.html'),
        experience: resolve(__dirname, 'experience.html'),
        projects:   resolve(__dirname, 'projects.html'),
        skills:     resolve(__dirname, 'skills.html'),
      }
    }
  }
})