import { StrictMode } from 'react'

import { App } from '@/App'
import { GlobalStyled } from '@/styles'
import { createRoot } from 'react-dom/client'

import './i18n'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/700.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <GlobalStyled />
    <App />
  </StrictMode>
)
