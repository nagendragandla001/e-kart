import { useParams } from "react-router-dom";

function CarDetails() {
  const params = useParams();
  return <div>CarDetails - {params.id}</div>;
}

export default CarDetails;
