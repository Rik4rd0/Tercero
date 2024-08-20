import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


function HomeTercero() {
  return (
    <div className='full-page-background'>
      <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong" data-bs-theme="dark">
                    <div className='container-fluid'>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className='collapse navbar-collapse justify-content-center' id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/showTercero" className="nav-link fs-4">Lista</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/create" className="nav-link fs-4">Formulario</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link fs-4">Inicio</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-white">
        <h1>Bienvenido a Tercero</h1>
        <a href="/create" className="btn btn-outline-light mt-4">Ir al Formulario</a>
      </div>
    </div>
  );
}

export default HomeTercero;