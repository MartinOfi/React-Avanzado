import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeContainer from "./container/home";
import ProductosContainer from "./container/list";
import DetailContainer from "./container/detail";
import {CartProvider} from "./context/Cart"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Switch>
            <Route exact path="/home" component={HomeContainer} />
            <Route exact path="/list" component={ProductosContainer} />
            <Route path="/products/:id" component={DetailContainer} />
          </Switch>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
