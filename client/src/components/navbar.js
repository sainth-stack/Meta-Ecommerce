 import { useEffect } from 'react'

import {useSelector,useDispatch} from 'react-redux'
 const Navbar=()=>{

  const token = localStorage.getItem("token");

  

  
  const currentUser=JSON.parse(localStorage.getItem('currentUser')) 

   const logoutFunction=()=>{




     localStorage.removeItem("currentUser")
     localStorage.removeItem("token")
     localStorage.removeItem('cartItems')

   }

const addToCartReducer=useSelector(state=>state.addToCartReducer)
const {cartItems}=addToCartReducer


return(
    <div>
<nav className="navbar navbar-expand ">
  <a className="navbar-brand" href="/">Meta Shop</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
  

  <div className='navbar-nav ms-auto'>
  {currentUser ? (<div class="dropdown">
  <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    {currentUser.username.userName}
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a className="dropdown-item" href="#">profile</a></li>
    <li><a class="dropdown-item" href="/orders">Orders</a></li>
    <li>        <a class="dropdown-item" href="/login" onClick={logoutFunction}>Logout</a>
</li>
  </ul>
</div>) : (  
      <li className="nav-item">
        <a class="nav-link" href="/login">Login</a>
      </li>)}


      <li class="nav-item">
       {token && ( <a class="nav-link " href="/cart">
        <i class="fas fa-shopping-cart"></i>{cartItems.length}

        </a>)}
      </li>
     

  </div>

  


  </div>
</nav>    </div>
)

}
export default Navbar;