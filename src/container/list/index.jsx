import { lazy,Suspense, useContext } from "react";
import { CartContext } from "../../context/Cart";
const CardProduct = lazy(()=>import('../../components/card/card'))

const ListContainer = () =>{
  const {listProducts} = useContext(CartContext)
  return (
    <div>
      <h1>Listado de Productos</h1>
      {listProducts.map((item) => {
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <CardProduct product={item}/>
          </Suspense>
        );
      })}
    </div>
  );
}
export default ListContainer