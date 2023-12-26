import './stylesheets/App.css';
import { CampoTestimonio } from './componentes/testimonio/campotestimonio';
import { BrowserRouter, Routes, Route } from  'react-router-dom';
//import Navbar from './componentes/Nav/nav-principal.jsx';
import { Error404 } from './componentes/error404/error404.jsx';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<h1>Inicio</h1>}/>
              <Route path='/testimonio' element={<CampoTestimonio />} />
              <Route path='*' element={<Error404 />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
 