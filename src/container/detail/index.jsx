import { useParams } from "react-router-dom";

const DetailContainer = () => {
  const { id } = useParams();
  return (
    <div>
      <strong>Descripcion {id}</strong>
      <p>$9.999</p>
      <button className="btn">Comprar</button>
    </div>
  );
};
export default DetailContainer;
