import {useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getallusers } from '../actions/userAction'
function UsersList() {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getallusers())
    },[])
    return ( 
        <div>
        <div className="row justify-content-center mt-5">
    <div className="col-md-10">
     
    <h1 className='Adminpanelheading text-center mb-3'>Admin Panel</h1>

        <nav className="navbar navbar-expand-lg navbar-light adminpanel2 p-1">
  <a className="navbar-brand" href="#"></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse adminpanel" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="/admin/userslist">UsersList</a>
      <a className="nav-item nav-link active ms-5" href="/admin/productslinks">ProductList</a>
      <a className="nav-item nav-link active ms-5" href="/admin/addnewproduct">AddNewProduct</a>
      <a className="nav-item nav-link active ms-5" href='/admin/orderslist'>OrdersList</a>
    </div>
  </div>
</nav>






    </div>
</div>
        <h1>UserList</h1></div>
     );
}

export default UsersList;