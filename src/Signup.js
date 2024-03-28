import React, { useState } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './Signup.css';
import logo from './Componentes/auth/logo.jpeg';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                // Aqui você pode redirecionar o usuário para a página de login ou qualquer outra página desejada após o cadastro bem-sucedido
            }).catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="sign-up-container">
            <form onSubmit={handleSignup}>
            <img src={logo} alt="Logo" className="logo-img" />
            <h2>Cadastro</h2>
                <div className="input-field">
                    <input
                        type="email"
                        placeholder="Digite um E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-field">
                    <input
                        type="password"
                        placeholder="Digite uma Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="signup-button">Cadastrar</button>
            </form>
            <p>Já possui uma conta? <Link to="/login">Faça login aqui</Link>.</p>
        </div>
    );
};

export default Signup;
