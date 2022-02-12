import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Error from '../components/Error'
import { useDispatch,useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import { getProductById } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';
import Loader from '../components/Loader';
import Review from '../components/Review';
const Productdescription=()=>{


const[quantity,setQuantity]=useState(1)

const { id } = useParams();
const dispatch=useDispatch()

const getProductByIdState=useSelector(state=>state.getProductByIdReducer)
const {products,loading,error}=getProductByIdState


    useEffect(()=>{
        dispatch(getProductById(id))
    },[])




function addtocart()
{
    if (localStorage.getItem("token")){
        dispatch(addToCart(products[0],quantity))

    }else{
        window.location.href='/login'
    }


}



    return(
        <div className='mt-2'>
{loading ? (<Loader/>): error ? (<Error error='Something Went Wrong'/>):(
 
 <div>

 {products.map((e)=>{
       return (
        <div  className="row">
<div className="col-md-6">

    <div className="card p-2 m-2">
        <h1>{e.name}</h1>
        <img className="img-fluid m-3 bigimg" src={e.image}/>
        <p>{e.description}</p>
    </div>
</div>
<div className="col-md-6 text-start">
    <div className="m-2">
   <h1>price:{e.price}</h1>

   <hr/>
   <h1>Select Quantity</h1>
   <select value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}>
   {[...Array(e.countInStock).keys()].map((x,i)=>{
return <option value={i+1}>{i+1}</option>
   })}
   </select>
   <hr/>
<div className='text-end'>   <button onClick={addtocart} className="btn btn-dark ">Add to Cart</button>
</div>
    </div>

    <hr/>
    <Review product={products}/>
</div>

</div> 


     );})}

 </div>
)}

       
        </div>
    )
}
export default Productdescription