import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).
render(
  <StrictMode>
    <App />
  </StrictMode>,
)

//either use <strictMode> or not : na use karne se thoda light weight hojayega