import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Home from './paginas/Home';
import ListaLivros from './paginas/ListaLivros';
import DetalhesLivro from './paginas/DetalhesLivro';
import NaoEncontrada from './paginas/NaoEncontrada';
import Template from './componentes/tamplete';
import {Routes, Route} from 'react-router-dom';




function App() {

  return (
    <div>
      <Template>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/livros" element={<ListaLivros />} />
          <Route path="/livros/:id" element={<DetalhesLivro />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </Template>
      
    </div>
  );
}

export default App
