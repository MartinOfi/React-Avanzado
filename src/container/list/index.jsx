import { useContext, useState } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "../../context/Cart";


const ListContainer = () =>{
  const {listProducts} = useContext(CartContext)
  return (
    <div>
      <h1>Listado de Productos</h1>
      {listProducts.map((item) => {
        return (
          <div key={item.id}>
            <strong>{item.name}</strong>
            <a href="#">${item.price}</a>
            <Link to={`/products/${item.id}`}>Ver Producto</Link>
          </div>
        );
      })}
    </div>
  );
}
export default ListContainer