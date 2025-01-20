import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { extname, relative, resolve } from 'path'
import { glob } from 'glob'
import { fileURLToPath } from 'url';
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src'],
      rollupTypes: true,
      tsconfigPath: "./tsconfig.app.json",
    }),
    libInjectCss(),
  ],
  build: {
    chunkSizeWarningLimit: 1000,  // Set the limit to 1 MB
    copyPublicDir: true,
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'banana-components',
      formats: ['es'],
      fileName: 'banana-components',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react/jsx-runtime'],
      input: Object.fromEntries(
        glob.sync('src/**/*.{ts,tsx}', {
          ignore: ["src/**/*.d.ts"],
        }).map(file => [
          // The name of the entry point
          // lib/nested/foo.ts becomes nested/foo
          relative(
            'src',
            file.slice(0, file.length - extname(file).length)
          ),
          // The absolute path to the entry file
          // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
        manualChunks(id) {
          // Split vendor libraries into their own chunk
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      }
    },
  },
})
