import { Link } from "react-router-dom"

const CardProduct =(props)=>{
  return(
 <div>
     <div>
            <strong>{props.product.name}</strong>
            <a href="#">${props.product.price}</a>
            <Link to={`/products/${props.product.id}`}>Ver Producto</Link>
          </div>
    </div>
  )
}
export default CardProduct