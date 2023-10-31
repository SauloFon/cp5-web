import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Sobre_tema from './pages/sobre_tema';
import Sobre from './pages/sobre';
import React, { useState } from 'react';
import { Container,Button,lightTheme,darkTheme } from './Estilos/Estilo';
import { ThemeProvider } from 'styled-components';
import Cep from './pages/cep';

function App() {
  const [theme,setTheme]= useState('light')
  const mudarTheme = () => {
      setTheme(mudar => mudar === 'light'? 'dark' : 'light')
  }
  return (
    <> 
    <ThemeProvider theme={theme ==='light' ? lightTheme : darkTheme}>
    <Button onClick={mudarTheme}>TEMA CLARO / ESCURO</Button>
    <hr/>
    <Container>
                  <BrowserRouter>
                    <Routes>
                          <Route path='/' element={<Home />} />
                          <Route path='/sobre_tema' element={<Sobre_tema />} />
                          <Route path='/cep' element={<Cep />} />
                          <Route path='/sobre' element={<Sobre />} />
                    </Routes>
                  </BrowserRouter>
    </Container>
    </ThemeProvider>
    </>
  );
}

export default App;
