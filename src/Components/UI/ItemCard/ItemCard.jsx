import { useParams } from "react-router-dom";
import useFetch from "../../../Hooks/use-fetch";
import Modal from "../Card/Modal";

const ItemCard = () => {
  const { id } = useParams();
  const { meals, isLodding, hasError } = useFetch(
    "http://localhost:3000/menu?id=" + id
  );

  let content;
  if (isLodding) {
    content = <p>Lodding...</p>;
  }
  if (hasError) {
    content = <p>{hasError}</p>;
  }
  const mealDetails =
    meals.length !== 0
      ? meals[0]
      : !isLodding && !hasError && <p>Sorry, No meals avilable right now</p>;

  const closeHandler = () => {
    return;
  };

  return (
    <Modal onClose={closeHandler}>
      {!content && <p>{mealDetails.id}</p>}
      {content}
    </Modal>
  );
};

export default ItemCard;
