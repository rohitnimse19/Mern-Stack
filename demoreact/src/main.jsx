import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Component1 from './components/Component1.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Component1/>
    <App />
  </StrictMode>,
)
