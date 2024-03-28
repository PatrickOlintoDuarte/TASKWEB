import React from 'react';
import './TelaGit.css';
import logo from '../../Componentes/auth/logo.jpeg';
import Vector from '../../imgs/Vector.png';

function TelaGit() {
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
            <h2>Insira as Informações</h2>
            <div className="input-container">
                <label htmlFor="projeto">Projeto:</label>
                <input
                    type="text"
                    id="projeto"
                    name="projeto"
                    placeholder="Digite o nome do projeto"
                />
            </div>
            <div className="input-container">
                <label htmlFor="branch">Branch:</label>
                <input
                    type="text"
                    id="branch"
                    name="branch"
                    placeholder="Digite o nome da branch"
                />
            </div>
            <div className="input-container">
                <label htmlFor="arquivo">Anexar:</label>
                <input
                    type="file"
                    id="arquivo"
                    name="arquivo"
                />
            </div>
                <button type="submit">Enviar</button>
        </body>
      </div>
    );
}

export default TelaGit;
