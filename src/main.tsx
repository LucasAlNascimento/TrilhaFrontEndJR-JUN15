import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home/index.tsx'
import './styles/animations.scss'
import './styles/styles.scss'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
