import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthContext from './components/context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContext>
    <App />
  </AuthContext>,
)
