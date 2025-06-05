// vite.config.js
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 👇 bạn có thể comment plugin devtools nếu không cần
// import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    // vueDevTools(), // 👈 Tắt nếu không cần popup debug
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    hmr: {
      overlay: false, // ✅ Tắt overlay lỗi hiện trên UI
    }
  },
  build: {
    sourcemap: false, // ✅ Tắt hiển thị đường dẫn file khi inspect
  }
})
