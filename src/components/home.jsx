import { Link } from "react-router-dom"

const Home = () =>{
  return(
    <div>
      <h1>Home</h1>
      <button className="btn"><Link to={'/productos'}>Productos</Link></button>
    </div>
  )
}
export default Home