import { useState } from "react"
export const addToCart=(product,quantity)=>(dispatch,getState)=>{
console.log(product)


const cartItem={
    name:product.name,
    _id:product._id,
    price:product.price,
    countInStock:product.countInStock,
    quantity:quantity
}
dispatch({type:'ADD_TO_CART', payload:cartItem})

localStorage.setItem("cartItems",JSON.stringify(getState().addToCartReducer.cartItems))

    
        }
 export const deleteFromCart=(item)=>(dispatch,getState)=>{

            dispatch({type:'DELETE_FROM_CART',payload:item})
            const cartItems=localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

            const filteredNotes = cartItems.filter((note) => note._id !== item._id);
        localStorage.setItem("cartItems",JSON.stringify(filteredNotes))


              
        }

