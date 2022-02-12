import React,{useState,useEffect} from "react";
import { useDispatch ,useSelector} from "react-redux";

import { loginUser } from "../actions/userAction";
import Error from "../components/Error";
import Loader from "../components/Loader";
const Login=()=>{

    // useEffect(()=>{
    //     if(localStorage.getItem('currentUser')){

    //     }
    // })

    const dispatch=useDispatch()
const loginReducerState=useSelector(state=>state.loginUserReducer)
const {loading,error}=loginReducerState

    const [data,setData]=useState({
        email:"",
        password:"",
    })
    const changeHandler=e=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler=e=>{
        e.preventDefault();
        dispatch(loginUser(data))

    }


    

   
   

    return(
        <div className="mt-4">

{error && (<Error error='Invalid credentials'/>)}
{loading && <Loader/>}

            <div className=" card container d-flex justify-content-center mt-5 p-4">

<h1 className="text-center">LOGIN</h1>
<form onSubmit={submitHandler} autoComplete="on">
    <h1 className="text-center"></h1>
    <input type="email" onChange={changeHandler} name="email" placeholder="email"/><br/><br/>
    <input type="password" onChange={changeHandler} name="password" placeholder="password"/><br/><br/>
    <input type="submit" className="btn btn-primary" value="Login"/><br/>
    <button className="btn btn-danger mt-2">Forgot password</button>

</form>
<a href="/register" className="mt-2">Click Here to Register</a>
   </div>

        </div>


      
    )
}
export default Login