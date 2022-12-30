import React from 'react'
import ReactDOM from 'react-dom/client'
import { MuiForm } from './MuiForm'
import StandardForm from './StandardForm'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <StandardForm /> */}
    <MuiForm/>
  </React.StrictMode>,
)
