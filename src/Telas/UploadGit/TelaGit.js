// TelaGit.js
import React, { useState } from 'react';
import axios from 'axios';
import './TelaGit.css'; 
import logo from '../../Componentes/auth/logo.jpeg';
import Vector from '../../imgs/Vector.png';

function TelaGit() {
  const [projeto, setProjeto] = useState('');
  const [branch, setBranch] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('projeto', projeto);
    formData.append('branch', branch);
    formData.append('file', file);

    try {
      await axios.post('http://localhost:3000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Arquivo enviado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar arquivo:', error);
      alert('Erro ao enviar arquivo. Por favor, tente novamente.');
    }
  };

  return (
    <div className='telagit'>
        <header>
          <img src={logo} alt="Logo" className="logo" />
          <div className="vector-container">
              <img src={Vector} alt="Vector" className="Vector" />
              <h1>ADMIN</h1>
          </div>
        </header>
    <body className='bodyy'>
      <form onSubmit={handleSubmit}>
        <h2>Insira as Informações</h2>
        <div className="input-container">
          <label htmlFor="projeto">Projeto:</label>
          <input
            type="text"
            id="projeto"
            value={projeto}
            onChange={(e) => setProjeto(e.target.value)}
            placeholder="Digite o nome do projeto"
          />
        </div>
        <div className="input-container">
          <label htmlFor="branch">Branch:</label>
          <input
            type="text"
            id="branch"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            placeholder="Digite o nome da branch"
          />
        </div>
        <div className="input-container">
          <label htmlFor="arquivo">Anexar:</label>
          <input
            type="file"
            id="arquivo"
            onChange={(e) => setFile(e.target.files[0])}
            name="file"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      </body>
    </div>
  );
}

export default TelaGit;
