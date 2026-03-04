import express from 'express'
import { createServer as createViteServer } from 'vite'
import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const isProd = process.env.NODE_ENV === 'production'
const PORT = process.env.PORT || 3000

async function createServer() {
  const app = express()

  let vite
  if (!isProd) {
    // ── DEVELOPMENT ──────────────────────────────────────────────────────────
    // Vite runs as middleware: it transforms files on demand and provides HMR.
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom', // tell Vite we handle HTML ourselves
    })
    app.use(vite.middlewares)
  } else {
    // ── PRODUCTION ────────────────────────────────────────────────────────────
    // Serve the pre-built static assets from dist/client/.
    const compression = (await import('compression')).default
    app.use(compression())
    app.use(
      '/assets',
      express.static(path.resolve(__dirname, 'dist/client/assets'), {
        maxAge: '1y', // fingerprinted assets can be cached forever
      }),
    )
  }

  // ── SSR handler — catches every request ────────────────────────────────────
  app.use('/{*splat}', async (req, res) => {
    const url = req.originalUrl
    try {
      let template
      let render

      if (!isProd) {
        // Load index.html fresh on every request so Vite edits are reflected.
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8')
        // Vite injects HMR client code and resolves bare module imports.
        template = await vite.transformIndexHtml(url, template)
        // Load the server entry through Vite so it's also hot-reloaded.
        const mod = await vite.ssrLoadModule('/src/entry-server.jsx')
        render = mod.render
      } else {
        // In production, use the pre-built server bundle.
        template = fs.readFileSync(
          path.resolve(__dirname, 'dist/client/index.html'),
          'utf-8',
        )
        const mod = await import('./dist/server/entry-server.js')
        render = mod.render
      }

      // Render the React tree to an HTML string.
      const appHtml = render(url)

      // Inject it into the HTML template.
      const html = template.replace('<!--app-html-->', appHtml)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (err) {
      if (!isProd && vite) {
        // Let Vite rewrite the stack trace so it points to your source files.
        vite.ssrFixStacktrace(err)
      }
      console.error(err.stack)
      res.status(500).end(err.message)
    }
  })

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
    console.log(`Mode: ${isProd ? 'production' : 'development (SSR + HMR)'}`)
  })
}

createServer()
