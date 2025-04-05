import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <App />
  // removed StrictMode because it calls useEffects twice and API only allows 1 call/5 secs
)
