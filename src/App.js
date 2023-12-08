import {
  BrowserRouter as Router, 
  Routes, 
  Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Empresa from './components/pages/Empresa';
import Contato from './components/pages/Contato';
import Container from './components/layouts/Container';
import NavBarra from './components/layouts/NavBarra';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <Router>
      <NavBarra />
      <Container customGeral="min-height">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
       <Route path="/contato" element={<Contato />} />
      </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
