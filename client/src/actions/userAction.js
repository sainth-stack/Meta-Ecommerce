import axios from "axios";
import { store } from "../App";
import { useContext } from "react";
import { useEffect, useState } from "react";

export const registerNewUser = (user) => (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  axios
    .post("http://localhost:5000/api/user/register", user)
    .then((res) => {
      dispatch({ type: "USER_REGISTER_SUCCESS" });
      console.log(res);
    })
    .catch((err) => {
      dispatch({ type: "USER_REGISTER_FAIL" });
      console.log(err);
    });
};

export const loginUser = (data) => (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  axios
    .post("http://localhost:5000/api/user/login", data)
    .then((res) => {
      dispatch({ type: "USER_LOGIN_SUCCESS" });

      localStorage.setItem("token", res.data.token);
      window.location.href = "/";
    })
    .catch((err) => {
      dispatch({ type: "USER_LOGIN_FAIL" });
      console.log(err);
    });
};


export const updateUser = (updatedUser,userEmail) => (dispatch) => {
  dispatch({ type: "USER_UPDATE_REQUEST" });
  console.log(updateUser)
  console.log(userEmail)
  axios
    .post("http://localhost:5000/api/user/update", {userEmail,updatedUser})
    .then((res) => {
      dispatch({ type: "USER_UPDATE_SUCCESS" });
      console.log(res);
    })
    .catch((err) => {
      dispatch({ type: "USER_UPDATE_FAIL" });
      console.log(err);
    });
};


export const getallusers=()=>dispatch=>{
  dispatch({type:'GET_ALLUSERS_REQUEST'})
  axios.get('http://localhost:5000/api/user/getallusers').then(res=>{
    dispatch({type:'GET_ALLUSERS_SUCCESS',payload:res.data})
  }).catch(err=>{
    dispatch({type:'GET_ALLUSERS_FAILED',payload:err})
  })
}