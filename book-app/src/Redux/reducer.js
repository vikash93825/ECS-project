import {GET_BOOK_FAILURE, GET_BOOK_SUCCESS, GET_BOOK_REQUEST,CART_ADD} from "./actionType"

const initState = {
    isAuth:false,
    isLoading:false,
    isError:false,
    bookData:[],
    cartData:[]
}

export const reducer = (state = initState, {type,payload}) =>{
    switch(type){
        case GET_BOOK_REQUEST:
            return{
                ...state,
                isLoading:true
            }
        case GET_BOOK_SUCCESS:
            return{
                ...state,
                isAuth:true,
                isLoading:false,
                bookData:payload
            }
        case GET_BOOK_FAILURE:
            return{
                ...state,
                isError:true
            }
        case CART_ADD:
            return{
                ...state,
                cartData:[...state.cartData,payload]

            }
        default:
            return state
    }
}