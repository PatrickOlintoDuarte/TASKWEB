import React, { useState } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './TelaInicial.css';
import logo from './Componentes/auth/logo.jpeg';
import Vector from './imgs/Vector.png';
import admin from './imgs/admin.png';
import solar from './imgs/solar.png';
import arquivo from './imgs/arquivo.png';
import pesquisar from './imgs/pesquisar.png';
import { Link } from 'react-router-dom';


function TelaInicial() {
    return (
      <div>
        <header>
          <img src={logo} alt="Logo" class="logo" />
          <div class="vector-container">
              <img src={Vector} alt="Vector" class="Vector" />
              <h1>ADMIN</h1>
          </div>
        </header>
        <body className='bodyy'>
          <h2 className='BemVindo'>Seja Bem Vindo!</h2>
          <div className='campos'>
              <Link to="/gerenciaranalista" className='div1'>
                        <img src={admin} alt="admin" />
                        <p>Gerenciar Analista</p>
              </Link>
              <Link to="/telaatividade" className='div1'>
                        <img src={arquivo} alt="arquivo" />
                        <p>Gerenciar Atividade</p>
              </Link>
              <Link to="/consultarmetricas" className='div1'>
                        <img src={pesquisar} alt="pesquisar" />
                        <p>Consultar Métricas</p>
              </Link>
              <Link to="/telagit" className='div1'>
                        <img src={solar} alt="solar" />
                        <p>Upload GitHub</p>
              </Link>
          </div>
        </body>
      </div>
    );
  }
  
  export default TelaInicial;
  