import React from "react";
import { useDispatch, useSelector } from "react-redux";


const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartData);
  return (
    <div>
      {cartData.length!==0?cartData.map((item) => {
        return (
          <div key={item.bookID}>
            <h3>{item.title}</h3>
          </div>
        );
      }):
         <div style={{}}>
            <h2> List is Empty</h2>
        </div>}
    </div>
  );
};

export { Cart };
