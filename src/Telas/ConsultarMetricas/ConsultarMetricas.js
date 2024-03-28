import React, { useState } from 'react';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { firebaseConfig } from '../../firebase';
import './ConsultarMetricas.css'; 
import logo from '../../Componentes/auth/logo.jpeg';
import Vector from '../../imgs/Vector.png';

const db = getFirestore();

const ConsultarMetricas = () => {
    const [nomeAnalistaConsulta, setNomeAnalistaConsulta] = useState('');
    const [dadosConsulta, setDadosConsulta] = useState([]);

    const consultarDados = async () => {
        try {
            const q = query(collection(db, 'atividades'), where('nomeAnalista', '==', nomeAnalistaConsulta));
            const querySnapshot = await getDocs(q);
            const dados = [];
            querySnapshot.forEach((doc) => {
                dados.push({ id: doc.id, ...doc.data() });
            });
            setDadosConsulta(dados);
        } catch (error) {
            console.error("Erro ao consultar os dados: ", error);
        }
    };

    return (
        <div className="tela-consulta">
            <header>
          <img src={logo} alt="Logo" className="logo" />
          <div className="vector-container">
              <img src={Vector} alt="Vector" className="Vector" />
              <h1>ADMIN</h1>
          </div>
        </header>
        <body className='bodyy'>
            <h2>Consulta de Atividades</h2>
            <div>
                <label>Nome do Analista:</label>
                <input
                    type="text"
                    value={nomeAnalistaConsulta}
                    onChange={(e) => setNomeAnalistaConsulta(e.target.value)}
                />
                <button onClick={consultarDados}>Consultar</button>
            </div>
            <div className="resultado-consulta">
                <h3>Resultados:</h3>
                <ul>
                    {dadosConsulta.map((item) => (
                        <li key={item.id}>
                            <p>Motivo: {item.motivo}</p>
                            <p>Data de Término: {item.dataTermino.toDate().toLocaleDateString()}</p>
                            <p>Nome do Analista: {item.nomeAnalista}</p>
                            <p>Descrição: {item.descricao}</p>
                        </li>
                    ))}
                </ul>
            </div>
            </body>
        </div>
    );
}

export default ConsultarMetricas;
