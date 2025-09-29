import React from "react";

export default function ProductListItem(props) {
  return (
    <div className="d-flex m-4 align-items-center justify-content-center">
      <img
        src={props.image}
        alt={props.name}
        height={160}
        width={190}
        className="border-radius-9 me-2"
      />

      <h5 className="card-title me-3">{props.name}</h5>
      <h6 className="mt-2 me-4">Price: {`$${props.price}`}</h6>
      <h6 className="mt-2 me-4">Discount: {props.discountPercentage} %</h6>
      <h6 className="mt-2 me-4">Unit: {props.unit}</h6>
      <h6 className="mt-2 me-4">Rating: {props.rating} </h6>
      <button className="btn btn-danger ms-3" onClick={props.incrementItem}>+</button>
      <span className="ms-3"> Quantity{` (in kgs): `}{props.count}</span>
      <button className="btn btn-danger ms-3" onClick={props.decrementItem}>-</button>
      <button className="btn btn-danger ms-3"onClick={props.removeItem}>Remove</button>
    </div>
    // </div>
  );
}
