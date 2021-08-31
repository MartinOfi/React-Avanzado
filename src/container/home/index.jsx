import { Link } from "react-router-dom";

const HomeContainer = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to={"/list"}>Productos</Link>
    </div>
  );
};
export default HomeContainer;
