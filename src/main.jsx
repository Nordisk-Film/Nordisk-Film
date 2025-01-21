// npm install react-router-dom
//npm install -D sass-embedded
// npm install styled-components
// Developer branch
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx'
import './Style/Style.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)
