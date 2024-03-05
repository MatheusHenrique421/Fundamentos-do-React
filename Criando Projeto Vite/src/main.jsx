import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


//recebe o elemento HTML pai, que está no arquivo index.html e faz encadeiamento do componente com ele
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Componente react, que é o arquivo App.jsx  */}
    <App />
  </React.StrictMode>,
)
