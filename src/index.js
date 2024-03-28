import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from "./Componentes/auth/Login";
import Signup from "./Signup";
import {createBrowserRouter,RouterProvider} from "react-router-dom";  
import TelaInicial from './TelaInicial';
import TelaAtividade from './TelaAtividade';
import TelaGit from './Telas/UploadGit/TelaGit';
import ConsultarMetricas from './Telas/ConsultarMetricas/ConsultarMetricas';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/teste",
    element: <Signup />,
  },
  {
    path: "/telainicial",
    element: <TelaInicial />,
  },
  {
    path: "/telaatividade",
    element: <TelaAtividade />,
  },
  {
    path: "/telagit",
    element: <TelaGit />,
  },
    {
    path: "/consultarmetricas",
    element: <ConsultarMetricas />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
