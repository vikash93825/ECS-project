import {
  GET_BOOK_FAILURE,
  GET_BOOK_REQUEST,
  GET_BOOK_SUCCESS,
  CART_ADD,
} from "./actionType";
import axios from "axios";

export const getBookRequest = (payload) => ({
  type: GET_BOOK_REQUEST,
  payload,
});

export const getBookSuccess = (payload) => ({
  type: GET_BOOK_SUCCESS,
  payload,
});

export const getBookFailure = (payload) => ({
  type: GET_BOOK_FAILURE,
  payload,
});

export const getBookData = (payload) => (dispatch) => {
  //dipatch the request
  dispatch(getBookRequest());
  //api call
  return axios({
    method: "get",
    url:
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json",
  })
    .then((res) => {
      //console.log(res.data)
      dispatch(getBookSuccess(res.data));
    })
    .catch((err) => dispatch(getBookFailure(err)));
};

//cart

export const cartAdd = (payload) => ({
  type: CART_ADD,
  payload,
});


export const cartAddData = (payload) => (dispatch)=>{
   return dispatch(cartAdd(payload))
}
