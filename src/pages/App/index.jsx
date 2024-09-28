import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../../components/Navbar'; // Corrigido para o caminho certo
import Home from '../../components/Home'; // Certifique-se do caminho correto
import SobreNos from '../../components/SobreNos'; // Certifique-se do caminho correto
import FacaDiferenca from '../../components/FacaDiferenca'; // Certifique-se do caminho correto
import NossosPets from '../../components/NossosPets'; // Certifique-se do caminho correto
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<SobreNos />} />
                <Route path="/faca-diferenca" element={<FacaDiferenca />} />
                <Route path="/nossos-pets" element={<NossosPets />} />
            </Routes>
        </Router>
    );
}

export default App;
