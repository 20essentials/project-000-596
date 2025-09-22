import './global.css'
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  return (
    <div
      className="h-screen w-full overflow-hidden"
      style={{
        backgroundImage: "url('assets/bg.svg')",
        backgroundSize: '100px',
        backgroundPosition: 'top'
      }}
    />
  )
}

const root = createElement('div')
document.body.appendChild(root)
createRoot(root).render(<App />)
