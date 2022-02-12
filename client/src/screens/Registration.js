import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerNewUser } from "../actions/userAction";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";

const Register = () => {
  const registerState = useSelector((state) => state.registerNewUserReducer);
  const { loading, error, success } = registerState;

  const dispatch = useDispatch();

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    conformpassword: "",
  });
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (data.password !== data.conformpassword) {
alert('password not matches')
    } else if (data.username === data.email === data.password === "") {
alert('Enter all fields')
    } else {
      dispatch(registerNewUser(data));
    }
  };

  return (
    <div className="card container mt-5">
      {loading && <Loader />}
      {error && <Error error="Email Address Already registered" />}
      {success && <Success success="Registration is Successfull" />}
      <div className="d-flex justify-content-center">
        <form onSubmit={submitHandler}>
          <h1 className="text-center m-3">Registration Form</h1>
          <input
            type="text"
            onChange={changeHandler}
            name="username"
            placeholder="User Name"
          />
          <br />
          <br />
          <input
            type="email"
            onChange={changeHandler}
            name="email"
            placeholder="email"
          />
          <br />
          <br />
          <input
            type="password"
            onChange={changeHandler}
            name="password"
            placeholder="password"
          />
          <br />
          <br />
          <input
            type="password"
            onChange={changeHandler}
            name="conformpassword"
            placeholder="conform password"
          />
          <br />
          <br />
          <input
            className="m-2 btn btn-primary"
            type="submit"
            value="Register"
          />
        </form>
      </div>
      <a href="/login" className="m-2">
        Click here to Login
      </a>
    </div>
  );
};
export default Register;
