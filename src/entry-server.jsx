import { renderToString } from 'react-dom/server'
import App from './App.jsx'

// Called by server.js for every incoming request.
// Returns the fully rendered HTML string for the page.
export function render() {
  return renderToString(<App />)
}
