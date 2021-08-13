import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Productos from './components/productos';
import Detalle from './components/detalle';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/"> 
            <Home/>
          </Route>
          <Route exact path="/productos">
            <Productos/>
          </Route>
          <Route path="/productos/detalle">
            <Detalle/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
