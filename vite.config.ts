import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 3000 },
  base: "https://Sargeras02.github.io/RIP-WeStatsApp",
  plugins: [react()],
})