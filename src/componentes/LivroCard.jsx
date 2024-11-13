// src/components/LivroCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function LivroCard({ livro, onAdicionarCarrinho,id }) {


    
  return (
    <div className="col-md-4 mb-4" id={id}>
      <div className="card">
        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Imagem do Livro" />
        <div className="card-body">
          <h5 className="card-title">{livro.titulo}</h5>
          <p className="card-text">{livro.descricao}</p>
          <p className="card-text">Preço: {livro.preco}</p>
          <div className="d-flex justify-content-between">
            <Link className="btn btn-primary" to={`/livros/${livro.id}`}>
              Ver Detalhes
            </Link>
            <button className="btn btn-success" onClick={() => onAdicionarCarrinho(livro)}>
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LivroCard;
