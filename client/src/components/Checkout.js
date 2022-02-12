import StripeCheckout from 'react-stripe-checkout'
import {useDispatch,useSelector} from 'react-redux'
import { placeOrder } from '../actions/orderActions';
import Loader from '../components/Loader'
import Error from '../components/Error'
import Success from '../components/Success'
function Checkout({amount}) {


    const dispatch=useDispatch()
const orderState=useSelector(state=>state.placeOrderReducer)
const {loading,success,error}=orderState

    function tokenHandler(token){
        console.log(token)

dispatch(placeOrder(token,amount))
    }
    return ( 

<div>
{loading && (<Loader/>)}
{success && (<Success success='Your order placed successfully'/>)}
{error && (<Error error='Something went Wrong'/>)}


<StripeCheckout
     token={tokenHandler}
     amount={amount*100}
     currency="INR"
shippingAddress
stripeKey="pk_test_51KO1DOSJ31SJjgXlzYyUP6vN4MWZHHVOKpFxKdE38syumJ2dIX050DVTgS18EDWwuxX7720uA2YypHFYnLMLKO3000JT8PEHKQ"
>
<button className='btn btn-dark'>PAY NOW</button>

</StripeCheckout>
</div>

     );
}

export default Checkout;