import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const params = useParams();

  return (
    <>
      <div>ItemDetail</div>
      <p>{params.itemId}</p>
    </>
  );
};

export default ItemDetail;
