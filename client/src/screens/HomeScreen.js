import Products from "../components/Product";
import axios from "axios";
import Error from "../components/Error"
import { useEffect, useState, useContext } from "react";
import { Navigate } from "react-router";
import Filter from "../components/Filter";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllProducts } from "../actions/productActions";
import Loader from "../components/Loader";
const HomeScreen = () => {
  const token = localStorage.getItem("token");

  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");

  const getAllProductsState = useSelector(
    (state) => state.getAllProductsReducer
  );
  const { loading, products, error } = getAllProductsState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());

    axios
      .get("http://localhost:5000/api/user/myprofile", {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => {
        setName(res.data.username);
        setEmail(res.data.email);

      });
  }, []);

  let userData = {
    username: { userName },
    email: { email },
  };

  if (token) {
    localStorage.setItem("currentUser", JSON.stringify(userData));
  }
  

  return (
    <div>
      <Filter />

      <div className="row justify-content-center">
        {loading ? (
          <h1><Loader/></h1>
        ) : error ? (
          <Error error='Something Went Wrong'/>
        ) : (
          products.map((e) => {
            return (
              <div className="card col-md-3 m-2 p-2">
                <Products product={e} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
export default HomeScreen;
