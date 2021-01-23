import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cartAdd, getBookData } from "../../Redux/actionCreator";
import styles from "./BookItem.module.css";

const BookItem = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookData());
  }, []);
  const bookData = useSelector((state) => state.bookData);
  const params = useParams();
  const { bookId } = params;
  const newBookData = bookData.find((item) => item.bookID == bookId);
  console.log(newBookData);
  const [cart,setCart] = useState([])
  const handleCart = () =>{
      dispatch(cartAdd(newBookData))
  }
  return (
    <div className={styles.card}>
      <img src="http://via.placeholder.com/300" alt="Denim Jeans"  />
      <h1>{newBookData.title}</h1>
      <p className={styles.price}>Rs.{newBookData.price}</p>
      <p>
      {newBookData.authors}
      </p>
      <div>
          <p>ISBN:{newBookData.isbn}</p>
          <p>Language-code:{newBookData.language_code}</p>

      </div>
      <p>
        <button onClick={handleCart}>Add to Cart</button>
      </p>
    </div>
  );
};

export { BookItem };
