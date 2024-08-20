import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../App.css';

const URI = process.env.REACT_APP_API_URL;

const CompShowTercero = () => {
    const [tercero, setTercero] = useState([]);

    useEffect(() => {
        getTercero()
    }, []);

    //procediminetos para mostar los datos
    const getTercero = async () => {
        const res = await axios.get(URI);
        setTercero(res.data);
    };

    //procedimiento para eliminar un tercero
    const deleteTercero = async (id) => {
        try {
            const response = await axios.delete(`${URI}/${id}`);
            console.log('Tercero eliminado:', response.data);
            // Actualizar el estado para reflejar los cambios
            setTercero(tercero.filter(item => item.id !== id));
        } catch (error) {
            console.error('Error al eliminar el tercero:', error);
        }
    };
    
    return (
        <div className="full-page-background">
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong" data-bs-theme="dark">
            <div className='container-fluid justify-content-center'>
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
            </div>
            <br />
            <br />
            <h1 className="text-center mt-4 white-text">Lista de Tercero</h1>
            <div className='container-fluid justify-content-center'>
                <div className="d-flex flex-wrap justify-content-center">
                    {tercero.map((tercero) => (
                        <div className="card mb-4 transparent-card mx-2" style={{ width: '24rem' }} key={tercero.id}>
                            <div className="card-header">
                                <h5 className="card-title">Registro</h5>
                            </div>
                            <div className="card-body">
                                <h6 className="card-text mb-2">Identificación: <small>{tercero.identificacion}</small></h6>
                                <h6 className="card-text mb-2">Tipo de persona: <small>{tercero.tipoPersona}</small></h6>
                                <h6 className="card-text mb-2">Dígito verificación: <small>{tercero.digitoVerificacion}</small></h6>
                                <h6 className="card-text mb-2">Nombre representante legal: <small>{tercero.nombreRepresentanteLegal}</small></h6>
                                <h6 className="card-text mb-2">Tipo de actividad: <small>{tercero.tipoActividad}</small></h6>
                                <h6 className="card-text mb-2">Tipo cliente: <small>{tercero.tipoCliente}</small></h6>
                                <div className="d-flex justify-content-center">
                                    <Link to={`/edit/${tercero.id}`} className="btn btn-black mb-2 me-2 btn-large">
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </Link>
                                    <button onClick={() => deleteTercero(tercero.id)} className="btn btn-red mb-2 btn-large">
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CompShowTercero;