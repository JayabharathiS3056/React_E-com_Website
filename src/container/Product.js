import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductList } from "../data/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/reducer/cart";

export default function Product() {
  const params = useParams();
  const navigate = useNavigate();
  //Dispatch
  const dispatch = useDispatch();
  const props = ProductList.find(
    (element) => element.id === parseInt(params.id)
  );
  const [alert, setAlert] = useState(false);

  const list = useSelector((state) => state.cart.list);

  const element = list.find((item) => item.id === props.id);
  //This above 1st stor the productlist in "item variable , then it will find the id that is found or matched or displayed using params hook,
  // that id will found here and specifically goes to that object,in whole file"
  const addToCart = () => {
    setAlert(true);
    setTimeout(() => setAlert(false), 3000);
    dispatch(addItem(props));
  };
  return (
    //The below code copied from productCard but removed some unwanted styles
    <div className="card m-2 ">
      {alert && (
        <span className="alert alert-success">Item Added to Cart!!</span>
      )}
      <div className="mt-2">
        <img
          src={props.image}
          alt={props.name}
          height={250}
          width={350}
          className="border-radius-9"
        />
      </div>
      <div className="mt-3 card-body">
        <h5>
          <div className="card-title">{props.name}</div>
        </h5>
        <h6 className="mt-2">Price: {`$${props.price}`}</h6>
        <h6 className="mt-2">Discount: {props.discountPercentage} %</h6>
        <h6 className="mt-2">Unit: {props.unit}</h6>
        <h6 className="mt-2">Rating: {props.rating} </h6>
        <div className="mt-4">
          {props.stock > 0 ? (
            <>
              <button
                className="btn btn-success"
                onClick={() => navigate(`/checkout/${props.id}`)}
              >
                Buy Now
              </button>
              {element?.count > 0 ? (
                <button
                  className="ms-3 btn btn-outline-primary"
                  onClick={() => navigate("/cart")}
                >
                  Go to Cart
                </button>
              ) : (
                <button className="ms-3 btn btn-warning" onClick={addToCart}>
                  Add to Cart
                </button>
              )}
            </>
          ) : (
            <button className="btn btn-outline-danger">Out Of Stock</button>
          )}
        </div>
      </div>
    </div>

    // <div>Product id {params.id} {item.name}</div>
    // To show the corresponding products that matches to id
  );
}
