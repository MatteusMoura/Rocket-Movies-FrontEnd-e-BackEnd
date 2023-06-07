import React from 'react'
// permite desenvolva nossas interfaces, possibilita as sintaxes da jsx
import ReactDOM from 'react-dom/client'
// biblioteca para manipular os elementos da DOM
import { ThemeProvider } from 'styled-components'
// vai permitir usasr CSS in JS
import { AuthProvider } from './hooks/auth'

import GlobalStyle from './styles/global'
// importando minhas estilizações globais
import theme from './styles/theme'
// importando minha estilização personalizada
import { Routes } from './routes'
// PágUpa que vai aparecer na tela

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)