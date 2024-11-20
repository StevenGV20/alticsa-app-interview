import React, { useState } from "react";
import "./index.css";

function ProductCard({ product }) {
  const [cantidad, setCantidad] = useState(product.quantity);

  const onDecrement = () => {
    const newCantidad = cantidad > 1 ? cantidad - 1 : 1;
    setCantidad(newCantidad);
  };

  const onIncrement = () => {
    const newCantidad = cantidad + 1;
    setCantidad(newCantidad);
  };

  return (
    <div
      className="product-card content-end rounded-lg"
      style={{
        backgroundImage: `url('${product.image}')`,
        backgroundSize: "cover",
      }}
    >
      <div className="bg-white mx-auto mb-2 w-11/12 px-4 py-2 rounded-md">
        <h3 className="bg-white ">{product.name}</h3>
        <div className="flex space-x-0 justify-between border border-black w-24 rounded-md text-center bg-white ">
          <button onClick={onDecrement} className="text-center px-2">
            -
          </button>
          <input type="" className="w-10 text-center" value={cantidad || 1} />
          <button onClick={onIncrement} className="text-center px-2">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
