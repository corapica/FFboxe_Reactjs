import React from 'react'
import './App.css'
import Routes from './components/config/routes'
import { ThemeProvider } from 'styled-components'
import theme from './components/config/theme'

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Routes></Routes>
      </ThemeProvider>
    </div>
  )
}

export default App
