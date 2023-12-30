import './stylesheets/App.css';
import { Menu } from './componentes/Menu/menu.jsx';
import { CampoTestimonio } from './componentes/testimonio/campotestimonio';
import { BrowserRouter, Routes, Route, Navigate } from  'react-router-dom';
import { Error404 } from './componentes/error404/error404.jsx';
import { Inicio } from './componentes/home/inicio.jsx' ;

function App() {
  return (
    <div>
      <BrowserRouter>
      <Menu />
        <div>
          <Routes>
              <Route path='/' element={<Inicio /> }/>
              <Route path='/testimonio' element={<CampoTestimonio />} />
              <Route path='/cards' element={<Navigate to='/' />} />
              <Route path='*' element={<Error404 />} />
          </Routes>
        </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
 