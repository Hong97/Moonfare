import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // SSR-specific: bundle react-icons into the server output rather than
  // requiring it from node_modules at runtime (avoids ESM/CJS interop issues).
  ssr: {
    noExternal: ['react-icons'],
  },
})
