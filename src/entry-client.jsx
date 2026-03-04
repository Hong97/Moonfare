import { hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// In SSR mode, the server has already rendered the HTML.
// hydrateRoot attaches React event handlers to that existing HTML
// instead of re-rendering from scratch.
hydrateRoot(document.getElementById('root'), <App />)
