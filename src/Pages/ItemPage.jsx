import { useParams } from "react-router-dom";

const ItemPage = () => {
  const param = useParams();
  return (
    <section>
      <div className="container">{param.itemId}</div>
    </section>
  );
};

export default ItemPage;
