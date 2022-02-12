import {useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Loader from '../components/Loader'
import { getOrdersByUserId } from '../actions/orderActions'
import Error from '../components/Error'
function Orders() {
const orderState=useSelector(state=>state.getOrdersByUserIdReducer)
const {orders,error,loading} =orderState

const dispatch = useDispatch()
useEffect(()=>{
    if(localStorage.getItem('token')){
   dispatch(getOrdersByUserId())
    }
    else{
        window.location.href='/login'
    }
},[dispatch])

console.log(orders,error,loading)


    return ( 
        <div>
<div className="row mt-4 mb-1">
    <div className="col-md-8"></div>
    <h1 className="text-center">MY ORDERS</h1>
    <table className="table table-striped">
        <thead>
            <tr>
                <th>Order Id</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Transaction Id</th>
                <th>Status</th>
            </tr>

        </thead>
        <tbody>
            {loading && (<Loader/>)}
            {orders && (orders.map(order=>{
                return   <tr onClick={()=>window.location=`/orderinfo/${order._id}`}>
<td>{order._id}</td>
<td>{order.orderAmount}</td>
<td>{order.createdAt}</td>
<td>{order.transactionId}</td>
<td>{order.isDelivered ? (<h6>Delivered</h6>):(<h5>Order Placed</h5>)}</td>
    </tr>
            }))}
            {error && (<Error error='something went wrong'/>)}

  

        </tbody>
    </table>
</div>
        </div>
     );
}

export default Orders;