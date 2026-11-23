import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import blogSharePages from './scripts/blogSharePages.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), blogSharePages()],
})
