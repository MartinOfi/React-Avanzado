import { Link } from "react-router-dom"

const Detalle = () =>{
  return(
    <div>
      <h1>Details</h1>
     <button className="btn"><Link to={'/productos'}>Productos</Link></button>
     
    </div>
  )
}
export default Detalle