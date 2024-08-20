import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const URI = process.env.REACT_APP_API_URL;

const CompCreateTercero = () => {
  const [tipoPersona, setTipoPersona] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState('');
  const [identificacion, setIdentificacion] = useState('');
  const [digitoVerificacion, setDigitoVerificacion] = useState('');
  const [razonSocial, setRazonSocial] = useState('');
  const [tipoTercero, setTipoTercero] = useState('');
  const [tipoActividad, setTipoActividad] = useState('');
  const [tipoCliente, setTipoCliente] = useState('');
  const [nombreRepresentanteLegal, setNombreRepresentanteLegal] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [pais, setPais] = useState('');
  const [codigoPais, setCodigoPais] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [codigoDepartamento, setCodigoDepartamento] = useState('');
  const [municipio, setMunicipio] = useState('');
  const [codigoMunicipio, setCodigoMunicipio] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [celular, setCelular] = useState('');
  const [correo, setCorreo] = useState('');
  const [codigoVendedor, setCodigoVendedor] = useState('');
  const [nombre, setNombre] = useState('');
  const [cupoCredito, setCupoCredito] = useState('');
  const [cobrador, setCobrador] = useState('');
  const [tipoPago, setTipoPago] = useState('');
  const [lPrecio, setLPrecio] = useState('');
  const [zona, setZona] = useState('');
  const [plazo, setPlazo] = useState('');
  const [descuento, setDescuento] = useState('');
  const [centroCosto, setCentroCosto] = useState('');
  const [observacion, setObservacion] = useState('');

  //Verificar que los campos enteros no estén vacíos
  const telefonoValue = telefono.trim() === '' ? 0 : parseInt(telefono, 10);
  const celularValue = celular.trim() === '' ? 0 : parseInt(celular, 10);

  const [isAdditionalInfoOpen, setIsAdditionalInfoOpen] = useState(false); // Estado para controlar el colapso

  const toggleAdditionalInfo = () => {
    setIsAdditionalInfoOpen(!isAdditionalInfoOpen);
  };

  const navigate = useNavigate();

  //procedimiento para guardar un tercero
  const store = async (e) => {
    e.preventDefault();
    axios.post(URI, {
      tipoPersona: tipoPersona,
      tipoDocumento: tipoDocumento,
      identificacion: identificacion,
      digitoVerificacion: digitoVerificacion,
      razonSocial: razonSocial,
      tipoTercero: tipoTercero,
      tipoActividad: tipoActividad,
      tipoCliente: tipoCliente,
      nombreRepresentanteLegal: nombreRepresentanteLegal,
      fechaNacimiento: fechaNacimiento,
      pais: pais,
      codigoPais: codigoPais,
      departamento: departamento,
      codigoDepartamento: codigoDepartamento,
      municipio: municipio,
      codigoMunicipio: codigoMunicipio,
      direccion: direccion,
      telefono: telefonoValue,
      celular: celularValue,
      correo: correo,
      codigoVendedor: codigoVendedor,
      nombre: nombre,
      cupoCredito: cupoCredito,
      cobrador: cobrador,
      tipoPago: tipoPago,
      lPrecio: lPrecio,
      zona: zona,
      plazo: plazo,
      descuento: descuento,
      centroCosto: centroCosto,
      observacion: observacion
    })
    navigate('/');
  }

  return (
    <div className='full-page-background'>
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
      <br />
      <div className="container">
        <form onSubmit={store} className="form-container text-white">
          <div className="d-flex justify-content-center">
            <h2 className="mb-4">Crear Tercero</h2>
          </div>    <h3>Información General</h3>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="tipoPersona" className="form-label">
                Tipo persona <span className="text-danger">*</span>
              </label>
              <select id="tipoPersona" className="form-select bg-transparent text-white border-white" required value={tipoPersona} onChange={(e) => setTipoPersona(e.target.value)}>
                <option value="">Selecciona una opción</option>
                <option value="Natural">Natural</option>
                <option value="Jurídica">Jurídica</option>
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="tipoDocumento" className="form-label">Tipo documento<span className="text-danger">*</span></label>
              <select id="tipoDocumento" className="form-select bg-transparent text-white border-white" required value={tipoDocumento} onChange={(e) => setTipoDocumento(e.target.value)}>
                <option value="">Selecciona una opción</option>
                <option value="CC">Cédula de ciudadanía</option>
                <option value="TI">Tarjeta de identidad</option>
                <option value="NIT">Número de Identificación Tributaria</option>
                <option value="CE">Cédula de extranjería</option>
                <option value="PAS">Pasaporte</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="identificacion" className="form-label">Identificación<span className="text-danger">*</span></label>
              <input type="text" id="identificacion" className="form-control bg-transparent text-white border-white" required value={identificacion} onChange={(e) => setIdentificacion(e.target.value)} />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="digitoVerificacion" className="form-label">Dígito de verificación<span className="text-danger">*</span></label>
              <input type="text" id="digitoVerificacion" className="form-control bg-transparent text-white border-white" required value={digitoVerificacion} onChange={(e) => setDigitoVerificacion(e.target.value)} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="razonSocial" className="form-label">Razón social<span className="text-danger">*</span></label>
              <input type="text" id="razonSocial" className="form-control bg-transparent text-white border-white" required value={razonSocial} onChange={(e) => setRazonSocial(e.target.value)} />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="tipoTercero" className="form-label">Tipo tercero<span className="text-danger">*</span></label>
              <select id="tipoTercero" className="form-select bg-transparent text-white border-white" required value={tipoTercero} onChange={(e) => setTipoTercero(e.target.value)}>
                <option value="">Selecciona una opción</option>
                <option value="Cliente">Cliente</option>
                <option value="Proveedor">Proveedor</option>
                <option value="Empleado">Empleado</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="tipoActividad" className="form-label">Tipo de actividad<span className="text-danger">*</span></label>
              <input type="text" id="tipoActividad" className="form-control bg-transparent text-white border-white" required value={tipoActividad} onChange={(e) => setTipoActividad(e.target.value)} />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="tipoCliente" className="form-label">Tipo cliente<span className="text-danger">*</span></label>
              <select id="tipoCliente" className="form-select bg-transparent text-white border-white" required value={tipoCliente} onChange={(e) => setTipoCliente(e.target.value)}>
                <option value="">Selecciona una opción</option>
                <option value="Mayorista">Mayorista</option>
                <option value="Minorista">Minorista</option>
                <option value="Consumidor final">Consumidor final</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="nombreRepresentanteLegal" className="form-label">Nombre representante legal<span className="text-danger">*</span></label>
              <input type="text" id="nombreRepresentanteLegal" className="form-control bg-transparent text-white border-white" required value={nombreRepresentanteLegal} onChange={(e) => setNombreRepresentanteLegal(e.target.value)} />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="fechaNacimiento" className="form-label">Fecha de nacimiento</label>
              <input type="date" id="fechaNacimiento" className="form-control bg-transparent text-white border-white" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} />
            </div>
          </div>


          <h3>Información de Ubicación</h3>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="pais" className="form-label">País <span className="text-danger">*</span></label>
              <input type="text" id="pais" className="form-control bg-transparent text-white border-white" required value={pais} onChange={(e) => setPais(e.target.value)} />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="codigoPais" className="form-label">Código país <span className="text-danger">*</span></label>
              <input type="text" id="codigoPais" className="form-control bg-transparent text-white border-white" required value={codigoPais} onChange={(e) => setCodigoPais(e.target.value)} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="departamento" className="form-label">Departamento<span className="text-danger">*</span></label>
              <input type="text" id="departamento" className="form-control bg-transparent text-white border-white" required value={departamento} onChange={(e) => setDepartamento(e.target.value)} />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="codigoDepartamento" className="form-label">Código departamento <span className="text-danger">*</span></label>
              <input type="text" id="codigoDepartamento" className="form-control bg-transparent text-white border-white" required value={codigoDepartamento} onChange={(e) => setCodigoDepartamento(e.target.value)} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="municipio" className="form-label">Municipio <span className="text-danger">*</span></label>
              <input type="text" id="municipio" className="form-control bg-transparent text-white border-white" required value={municipio} onChange={(e) => setMunicipio(e.target.value)} />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="codigoMunicipio" className="form-label">Código municipio<span className="text-danger">*</span></label>
              <input type="text" id="codigoMunicipio" className="form-control bg-transparent text-white border-white" required value={codigoMunicipio} onChange={(e) => setCodigoMunicipio(e.target.value)} />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="direccion" className="form-label">Dirección <span className="text-danger">*</span></label>
            <input type="text" id="direccion" className="form-control bg-transparent text-white border-white" required value={direccion} onChange={(e) => setDireccion(e.target.value)} />
          </div>

          <h3>Información de Contacto</h3>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label htmlFor="telefono" className="form-label">Teléfono<span className="text-danger">*</span></label>
              <input type="text" id="telefono" className="form-control bg-transparent text-white border-white" required value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="celular" className="form-label">Celular</label>
              <input type="text" id="celular" className="form-control bg-transparent text-white border-white" value={celular} onChange={(e) => setCelular(e.target.value)} />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="correo" className="form-label">Correo electrónico<span className="text-danger">*</span></label>
              <input type="email" id="correo" className="form-control bg-transparent text-white border-white" required value={correo} onChange={(e) => setCorreo(e.target.value)} />
            </div>
          </div>
          <h3 onClick={toggleAdditionalInfo} style={{ cursor: 'pointer' }}>
            Información Adicional {isAdditionalInfoOpen ? '▲' : '▼'}
          </h3>

          {isAdditionalInfoOpen && (
            <div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="codigoVendedor" className="form-label">Código vendedor</label>
                  <input type="text" id="codigoVendedor" className="form-control bg-transparent text-white border-white" value={codigoVendedor} onChange={(e) => setCodigoVendedor(e.target.value)} />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input type="text" id="nombre" className="form-control bg-transparent text-white border-white" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="cupoCredito" className="form-label">Cupo crédito</label>
                  <input type="number" id="cupoCredito" className="form-control bg-transparent text-white border-white" value={cupoCredito} onChange={(e) => setCupoCredito(e.target.value)} />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="cobrador" className="form-label">Cobrador</label>
                  <input type="text" id="cobrador" className="form-control bg-transparent text-white border-white" value={cobrador} onChange={(e) => setCobrador(e.target.value)} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="tipoPago" className="form-label">Tipo pago</label>
                  <select id="tipoPago" className="form-select bg-transparent text-white border-white" value={tipoPago} onChange={(e) => setTipoPago(e.target.value)}>
                    <option value="">Selecciona una opción</option>
                    <option value="Contado">Contado</option>
                    <option value="Crédito">Crédito</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lPrecio" className="form-label">Lista de precios</label>
                  <input type="text" id="lPrecio" className="form-control bg-transparent text-white border-white" value={lPrecio} onChange={(e) => setLPrecio(e.target.value)} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="zona" className="form-label">Zona</label>
                  <input type="text" id="zona" className="form-control bg-transparent text-white border-white" value={zona} onChange={(e) => setZona(e.target.value)} />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="plazo" className="form-label">Plazo</label>
                  <input type="text" id="plazo" className="form-control bg-transparent text-white border-white" value={plazo} onChange={(e) => setPlazo(e.target.value)} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="descuento" className="form-label">Descuento</label>
                  <input type="text" id="descuento" className="form-control bg-transparent text-white border-white" value={descuento} onChange={(e) => setDescuento(e.target.value)} />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="centroCosto" className="form-label">Centro de costo</label>
                  <input type="text" id="centroCosto" className="form-control bg-transparent text-white border-white" value={centroCosto} onChange={(e) => setCentroCosto(e.target.value)} />
                </div>
              </div>
            </div>
          )}

          <div className="mb-3">
            <label htmlFor="observacion" className="form-label">Observaciones</label>
            <textarea id="observacion" className="form-control bg-transparent text-white border-white" value={observacion} onChange={(e) => setObservacion(e.target.value)} />
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-outline-light mt-4">Registrar</button>
          </div>      </form>
      </div>
    </div>
  )
}

export default CompCreateTercero;
