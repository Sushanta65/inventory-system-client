import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import mainRouter from './routers/mainRouter'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={mainRouter}/>
  </StrictMode>,
)
