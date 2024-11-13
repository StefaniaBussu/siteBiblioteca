// src/Template.js
import React from 'react';
import { Link } from 'react-router-dom';

function Template({ children }) {
  return (
    <div>
      {/* Navbar do Bootstrap */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">Biblioteca Virtual</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/livros">Lista de Livros</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cadastro">Cadastro</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Conteúdo das páginas */}
      <div className="container mt-4">
        {children}
      </div>
    </div>
  );
}

export default Template;
