export const registerNewUserReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'USER_REGISTER_REQUEST':return{
            ...state,loading:true
        }
        case 'USER_REGISTER_SUCCESS':return{
            ...state,
            loading:false,
            success:true
        }
        case 'USER_REGISTER_FAIL':return{
            ...state,
            loading:false,
            error:true
        }
        default:return state

    }
}


export const loginUserReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'USER_LOGIN_REQUEST':return{
            ...state,loading:true
        }
        case 'USER_LOGIN_SUCCESS':return{
            ...state,
            loading:false,
            success:true
        }
        case 'USER_LOGIN_FAIL':return{
            ...state,
            loading:false,
            error:true
        }
        default:return state

    }
}

export const updateReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'USER_UPDATE_REQUEST':return{
            ...state,loading:true
        }
        case 'USER_UPDATE_SUCCESS':return{
            ...state,
            loading:false,
            success:true
        }
        case 'USER_UPDATE_FAIL':return{
            ...state,
            loading:false,
            error:true
        }
        default:return state

    }
}

export const getAllUsersReducer=(state={users:[]},action)=>{
    switch(action.type)
    {
        case 'GET_ALLUSERS_REQUEST':return{
            ...state,loading:true
        }
        case 'GET_ALLUSERS_SUCCESS':return{
            ...state,
            loading:false,
            users:action.payload
        }
        case 'GET_ALLUSERS_FAIL':return{
            ...state,
            loading:false,
            error:action.payload
        }
        default:return state

    }
}