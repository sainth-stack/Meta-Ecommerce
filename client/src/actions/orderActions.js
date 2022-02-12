import axios from "axios";

export const placeOrder = (token, subtotal) => (dispatch, getState) => {
  const currentUser = getState().loginUserReducer.currentUser;
  console.log(currentUser, "hhhehhehh");
  const demoItems = getState().addToCartReducer.cartItems;
  const cartItems = new Array();

  for (var i = 0; i < demoItems.length; i++) {
    var item = {
      name: demoItems[i].name,
      quantity: demoItems[i].quantity,
      price: demoItems[i].price,
      _id: demoItems[i].price,
    };
    cartItems.push(item);
  }

  dispatch({ type: "PLACE_ORDER_REQUEST" });
  axios
    .post("/api/orders/placeorder", { token, subtotal, currentUser, cartItems })
    .then((res) => {
      console.log(res);
      dispatch({ type: "PLACE_ORDER_SUCCESS" });
    })
    .catch((err) => {
      console.log(err, "ERRRR");
      dispatch({ type: "PLACE_ORDER_FAILED" });
    });
};

export const getOrdersByUserId=()=>(dispatch,getState)=>{
  const userEmail=getState().loginUserReducer.currentUser.email.email
dispatch({type:'GET_ORDERSUSERID_REQUEST'})
axios.post('api/orders/getordersbyuserid',{userEmail:userEmail}).then(res=>{
  console.log(res)
  dispatch({type:'GET_ORDERSUSERID_SUCCESS',payload:res.data})

}).catch(err=>{
  dispatch({type:'GET_ORDERSUSERID_FAIL',payload:err})

})
}

export const getOrderById=(orderid)=>(dispatch,getState)=>{
dispatch({type:'GET_ORDERID_REQUEST'})
axios.post('api/orders/getorderbyid',{orderid:orderid}).then(res=>{
  dispatch({type:'GET_ORDERD_SUCCESS',payload:res.data})

}).catch(err=>{
  dispatch({type:'GET_ORDERID_FAIL',payload:err})

})
}
