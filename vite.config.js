import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // 设置文件路径的别名
      "~": path.resolve(__dirname, "src")
    }
  },
  server:{
    port: "8999",
    proxy:{
      // 配置发起请求时的域名代理
      '/api': {
        target: 'http://ceshi13.dishait.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },

  plugins: [
    vue(),
    WindiCSS(),
  ],
})
