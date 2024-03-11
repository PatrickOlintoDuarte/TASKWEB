import React, { useState } from 'react';
import './styles.css'; 
import logo from './logo.jpeg';


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Login submitted', { username, password });
    };

    return (
        <main className="container">
            <img src={logo} alt="Logo" />
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="input-field">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <input type="submit" value="Logar" />
                <p>Não possui uma conta?</p>
                <input type="submit" value="Cadastrar-Se" />
            </form>
        </main>
    );
};
export default LoginForm;
