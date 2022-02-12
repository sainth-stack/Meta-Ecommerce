import { getAllProductsReducer, getProductByIdReducer } from "./reducers/productReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from "redux";
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { placeOrderReducer } from "./reducers/orderReducer";
import { loginUserReducer } from "./reducers/userReducer";
import { registerNewUserReducer } from "./reducers/userReducer";
import addToCartReducer from './reducers/cartReducer'
import { getOrdersByUserIdReducer } from "./reducers/orderReducer";
import { getOrdersByIdReducer } from "./reducers/orderReducer";
import { addProductReviewReducer } from "./reducers/productReducer";
import { updateReducer } from "./reducers/userReducer";
import { getAllUsersReducer } from "./reducers/userReducer";
const finalReducer=combineReducers({
    getAllProductsReducer:getAllProductsReducer,
    getProductByIdReducer:getProductByIdReducer,
    addToCartReducer:addToCartReducer,
    registerNewUserReducer:registerNewUserReducer,
    loginUserReducer:loginUserReducer,
    placeOrderReducer:placeOrderReducer,
    getOrdersByUserIdReducer:getOrdersByUserIdReducer,
    getOrdersByIdReducer:getOrdersByIdReducer,
    addProductReviewReducer:addProductReviewReducer,
    updateReducer:updateReducer,
    getAllUsersReducer:getAllUsersReducer
})

const cartItems=localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []


const currentUser=localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
const initialState={
  addToCartReducer:{cartItems:cartItems},
  loginUserReducer:{currentUser:currentUser}
}

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });
  
const store=createStore(finalReducer,initialState,composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
)
export default store