import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeTercero from './tercero/Home'; // Importar el nuevo componente Home
import CompShowTercero from './tercero/ShowTercero';
import CompCreateTercero from './tercero/CreateTercero';
import CompEditTercero from './tercero/EditTercero';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeTercero />} />
        <Route path="/showTercero" element={<CompShowTercero />} />
        <Route path="/create" element={<CompCreateTercero />} />
        <Route path="/edit/:id" element={<CompEditTercero />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;