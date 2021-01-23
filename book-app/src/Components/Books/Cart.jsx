import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { cartAdd } from "../../Redux/actionCreator"


const Cart = ()=>{
    const dispatch = useDispatch()
    const cartData = useSelector(state=>state.cartData)
    return(
        <div>
            {
                cartAdd.map(item=>{
                    return(
                        <div key={item.bookID}>
                            <h3>{item.title}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export {Cart}