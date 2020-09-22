import React from 'react';
import './App.css';
import { Container } from './styles/commons';
import Header from './Componets/Header';
import {BrowserRouter} from "react-router-dom";
import Router from './pages/Router';

function App() {
  return (
 
    <BrowserRouter>
      <Header />
      <Container>
        <Router />
      </Container>
    </BrowserRouter>


   

  );
}

export default App;
