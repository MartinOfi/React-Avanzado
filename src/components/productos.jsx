import { Link } from "react-router-dom"


const Productos = () =>{
  return(
    <div>
      <h1>PRODUCTS</h1>
     <button className="btn"><Link to={'/'}>Home</Link></button>
     <button className="btn"><Link to={'/productos/detalle'}>Detalle</Link></button>
     
    </div>
  )
}
export default Productos