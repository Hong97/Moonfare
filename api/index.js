import express from 'express'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

const app = express()

// Serve all pre-built static assets (JS, CSS, images, etc.)
app.use(
  express.static(path.resolve(root, 'dist/client'), {
    index: false,       // don't serve index.html directly — SSR handles that
    maxAge: '1y',
  }),
)

// Cache the template and render function across warm invocations
const template = fs.readFileSync(path.resolve(root, 'dist/client/index.html'), 'utf-8')
let renderFn

// SSR handler for every other request
app.use('*', async (req, res) => {
  try {
    if (!renderFn) {
      const mod = await import('../dist/server/entry-server.js')
      renderFn = mod.render
    }
    const appHtml = renderFn(req.originalUrl)
    const html = template.replace('<!--app-html-->', appHtml)
    res.status(200).set('Content-Type', 'text/html').end(html)
  } catch (err) {
    console.error(err)
    res.status(500).end(err.message)
  }
})

export default app
