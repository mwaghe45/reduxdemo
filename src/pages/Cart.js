import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <div>
      <h3 className="my-4">Cart</h3>
      {products.length !== 0 ? (
        <table class="table">
          <thead className="bg-success">
            <tr>
              <th scope="col" className="text-center">
                Items
              </th>
              <th scope="col" className="text-center">
                Product Image
              </th>
              <th scope="col" className="text-center">
                Product Name
              </th>
              <th scope="col" className="text-center">
                Price
              </th>
              <th scope="col" className="text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>
                  <img src={product.image} alt="" />
                </td>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>
                  {" "}
                  <button
                    className="rbtn"
                    onClick={() => handleRemove(product.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h4>Your Cart is empty please add some product in your cart...</h4>
      )}
    </div>
  );
};

export default Cart;
