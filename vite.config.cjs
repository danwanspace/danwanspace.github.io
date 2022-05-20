const {defineConfig} = require("vite")


module.exports = defineConfig({
  esbuild: {
    jsxFactory: 'createElement',
    jsxFragment: 'Fragment'
  },
  resolve: {
    alias: [
    ],
  },
  css: {
    preprocessorOptions: {
      less: { javascriptEnabled: true }
    }
  },
  define: {
    __DEV__: true
  },
  build: {
    target: 'chrome100',
    outDir: 'docs'
  },
})
