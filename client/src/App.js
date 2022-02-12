import Navbar from './components/navbar';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import './App.css';
import { useState,createContext } from 'react';
import UsersList from "./screens/UsersList";
import ProductList from "./screens/ProductList";
import AddNewProduct from "./screens/AddNewProductScreen"
import OrdersList from "./screens/OrdersListScreen"
import HomeScreen from './screens/HomeScreen';
import Productdescription from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import Login from './screens/loginScreen';
import Register from './screens/Registration';
import Orders from './screens/Orders';
import OrderInfo from './screens/OrderInfo';
import ProfileScreen from './screens/ProfileScreen';
import AdminScreen from './screens/AdminScreen';


export const store = createContext();


function App() {
  const [token,setToken]=useState(null)

  return (
    <div className="App">
<Navbar/>
<store.Provider value={[token,setToken]}>
      <BrowserRouter>

    <Routes>
    <Route path="/" element={<HomeScreen/>} />
<Route path="/product/:id" element={<Productdescription/>} />
<Route path="/cart" element={<CartScreen/>} />
<Route path="/login" element={<Login/>} />
<Route path="/register" element={<Register/>} />
<Route path="/orders" element={<Orders/>} />
<Route path='/orderinfo/:orderid' element={<OrderInfo/>}/>
<Route path='/profile' element={<ProfileScreen/>}/>
<Route path='/admin' element={<AdminScreen/>}/>
<Route path="/admin/userslist" element={<UsersList/>} />
<Route path="/admin/productslinks" element={<ProductList/>} />
<Route path='/admin/addnewproduct' element={<AddNewProduct/>} />
<Route path="/admin/orderslist" element={<OrdersList/>} />
</Routes>
  </BrowserRouter>
  </store.Provider>
    </div>
  );
}

export default App;
