// src/components/ModalCarrinho.js
import React from 'react';

function ModalCarrinho({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="modal show d-block" tabindex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Carrinho</h5>
            <button type="button" className="close" aria-label="Fechar" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Produto adicionado ao carrinho!</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Fechar
            </button>
            <button type="button" className="btn btn-primary" onClick={onClose}>
              Ir para o Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCarrinho;
