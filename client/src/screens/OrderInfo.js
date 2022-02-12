import {  useParams } from 'react-router-dom';
import {useState,useEffect} from 'react'
import { getOrderById } from '../actions/orderActions';
import {useDispatch,useSelector} from 'react-redux'
function OrderInfo() {
    const { orderid } = useParams();
const dispatch=useDispatch()
useEffect(()=>{
    dispatch(getOrderById(orderid))
})

    return ( 
        <div>
            <h1>Order Info {orderid}</h1>
        </div>
     );
}

export default OrderInfo;