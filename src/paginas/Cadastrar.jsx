// src/páginas/Cadastrar.js
import React, { useState } from 'react';

function Cadastrar() {
  // Estado para armazenar os valores do formulário e mensagens de erro
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    endereco: '',
    sexo: '',
    generos: [],
    mensagem: '',
  });

  const [erros, setErros] = useState({
    nome: '',
    email: '',
    telefone: '',
    endereco: '',
  });

  // Função para lidar com as mudanças nos campos do formulário
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: checked ? [...prevForm[name], value] : prevForm[name].filter((item) => item !== value),
      }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    }
  };

  // Função para validar o formulário
  const validateForm = () => {
    const newErros = {};

    if (!form.nome) newErros.nome = 'Nome é obrigatório';
    if (!form.email) newErros.email = 'Email é obrigatório';
    if (!form.telefone) newErros.telefone = 'Telefone é obrigatório';
    if (!form.endereco) newErros.endereco = 'Endereço é obrigatório';

    setErros(newErros);
    return Object.keys(newErros).length === 0;
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Formulário enviado com sucesso!');
      // Aqui você pode fazer o envio dos dados
    } else {
      alert('Preencha todos os campos obrigatórios.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        {/* Nome */}
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            required
          />
          {erros.nome && <div id="NomeErro" className="text-danger">{erros.nome}</div>}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          {erros.email && <div id="EmailErro" className="text-danger">{erros.email}</div>}
        </div>

        {/* Telefone */}
        <div className="mb-3">
          <label htmlFor="telefone" className="form-label">Telefone</label>
          <input
            type="tel"
            className="form-control"
            id="telefone"
            name="telefone"
            value={form.telefone}
            onChange={handleChange}
            required
          />
          {erros.telefone && <div id="TelefoneErro" className="text-danger">{erros.telefone}</div>}
        </div>

        {/* Endereço */}
        <div className="mb-3">
          <label htmlFor="endereco" className="form-label">Endereço</label>
          <input
            type="text"
            className="form-control"
            id="endereco"
            name="endereco"
            value={form.endereco}
            onChange={handleChange}
            required
          />
          {erros.endereco && <div id="EnderecoErro" className="text-danger">{erros.endereco}</div>}
        </div>

        {/* Sexo */}
        <div className="mb-3">
          <label className="form-label">Sexo</label>
          <div>
            <input
              type="radio"
              id="sexoM"
              name="sexo"
              value="M"
              checked={form.sexo === 'M'}
              onChange={handleChange}
            />
            <label htmlFor="sexoM" className="form-check-label">Masculino</label>
          </div>
          <div>
            <input
              type="radio"
              id="sexoF"
              name="sexo"
              value="F"
              checked={form.sexo === 'F'}
              onChange={handleChange}
            />
            <label htmlFor="sexoF" className="form-check-label">Feminino</label>
          </div>
        </div>

        {/* Gêneros de Literatura */}
        <div className="mb-3">
          <label className="form-label">Gêneros de Literatura Preferidos</label>
          <div>
            <input
              type="checkbox"
              id="fantasia"
              name="generos"
              value="Fantasia"
              checked={form.generos.includes('Fantasia')}
              onChange={handleChange}
            />
            <label htmlFor="fantasia" className="form-check-label">Fantasia</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="ficcao"
              name="generos"
              value="Ficção"
              checked={form.generos.includes('Ficção')}
              onChange={handleChange}
            />
            <label htmlFor="ficcao" className="form-check-label">Ficção</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="romance"
              name="generos"
              value="Romance"
              checked={form.generos.includes('Romance')}
              onChange={handleChange}
            />
            <label htmlFor="romance" className="form-check-label">Romance</label>
          </div>
        </div>

        {/* Mensagem */}
        <div className="mb-3">
          <label htmlFor="mensagem" className="form-label">Mensagem</label>
          <textarea
            className="form-control"
            id="mensagem"
            name="mensagem"
            value={form.mensagem}
            onChange={handleChange}
            rows="3"
          ></textarea>
        </div>

        {/* Botão de envio */}
        <button type="submit" className="btn btn-primary">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastrar;
