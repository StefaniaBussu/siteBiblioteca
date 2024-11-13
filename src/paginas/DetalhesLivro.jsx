import React from 'react';
import { useParams } from 'react-router-dom';
import dadosLivros from '../assets/DadosLivros';
// src/páginas/ListaLivros.js
import { useState } from 'react';
import ModalCarrinho from '../componentes/ModalCarrinho';


function DetalhesLivro() {
  const { id } = useParams();
  const livro = dadosLivros.find((livro) => livro.id === parseInt(id));

  const [mostrarModal, setMostrarModal] = useState(false);
  const [livroAdicionado, setLivroAdicionado] = useState(null);

  const handleAdicionarCarrinho = (livro) => {
    setLivroAdicionado(livro);
    setMostrarModal(true);
  };

  const handleFecharModal = () => {
    setMostrarModal(false);
  };
  
  return (
    <div className="container-fluid d-flex flex-column align-items-center mt-5">
      <img src={livro.img} alt={livro.titulo} />
      <h2>Detalhes do Livro</h2>
      <p>ID do livro: {id}</p>
      <p>Título: {livro.titulo}</p>
      <p>Descricão: {livro.descricao}</p>
      <p>Preço: {livro.preco}</p>
      <p>Estoque: {livro.estoque}</p>
      <p>Quantidade de Páginas: {livro.quatidadePag}</p>
      <button className="btn btn-success mt-3"  onClick={() => onAdicionarCarrinho(livro)}>Adicionar ao Carrinho</button>

      <ModalCarrinho show={mostrarModal} onClose={handleFecharModal} />
    </div>
  );
}

export default DetalhesLivro;
