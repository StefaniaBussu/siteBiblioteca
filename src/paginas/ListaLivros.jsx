// src/páginas/ListaLivros.js
import { useState } from 'react';
import LivroCard from '../componentes/LivroCard';
import ModalCarrinho from '../componentes/ModalCarrinho';
import dadosLivros from '../assets/DadosLivros';

function ListaLivros() {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [livroAdicionado, setLivroAdicionado] = useState(null);

  const livros = dadosLivros;
  

  const handleAdicionarCarrinho = (livro) => {
    setLivroAdicionado(livro);
    setMostrarModal(true);
  };

  const handleFecharModal = () => {
    setMostrarModal(false);
  };

  return (
    <div className="container mt-5">
      <h2>Lista de Livros</h2>
      <div className="row">
        {livros.map((livro, index) => (
          <LivroCard id={`livro${index+1}`} key={livro.id} livro={livro} onAdicionarCarrinho={handleAdicionarCarrinho} />
        ))}
      </div>

      {/* Modal Carrinho */}
      <ModalCarrinho show={mostrarModal} onClose={handleFecharModal} />
    </div>
  );
}

export default ListaLivros;
