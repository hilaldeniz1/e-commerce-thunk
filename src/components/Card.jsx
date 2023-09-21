import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/actions/basketActions";
const Card = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div
        className="p-5 d-flex justify-content-center"
        style={{ height: "300px" }}
      >
        <img
          className="img-fluid h-100 object-fit-contain"
          src={product.image}
        />
      </div>
      <div className="card-body p-3">
        <h5>{product.title}</h5>
        <h4>${product.price}</h4>
        <p>{product.description.slice(0, 50) + "..."}</p>
        <button
          className="btn btn-primary w-100"
          onClick={() => dispatch(addToBasket(product))}
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default Card;
