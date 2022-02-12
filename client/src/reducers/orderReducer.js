export const placeOrderReducer=(state={},action)=>{
switch(action.type){
    case 'PLACE_ORDER_REQUEST':return{
        ...state,loading:true
    }
    case 'PLACE_ORDER_SUCCESS':return{
        ...state,loading:false,success:true
    }
    case 'PLACE_ORDER_FAILED':return{
        ...state,loading:false,error:true
    }
    default:return {state}
}
}


export const getOrdersByUserIdReducer=(state={},action)=>{
    switch(action.type){
        case 'GET_ORDERSUSERID_REQUEST':return{
            ...state,loading:true
        }
        case 'GET_ORDERSUSERID_SUCCESS':return{
            ...state,loading:false,orders:action.payload
        }
        case 'GET_ORDERSUSERID_FAIL':return{
            ...state,loading:false,error:action.payload
        }
        default:return {state}
    }
    }
    
export const getOrdersByIdReducer=(state={},action)=>{
    switch(action.type){
        case 'GET_ORDERID_REQUEST':return{
            ...state,loading:true
        }
        case 'GET_ORDERID_SUCCESS':return{
            ...state,loading:false,order:action.payload
        }
        case 'GET_ORDERID_FAIL':return{
            ...state,loading:false,error:action.payload
        }
        default:return {state}
    }
    }