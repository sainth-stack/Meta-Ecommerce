import {useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { updateUser } from '../actions/userAction';
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";
function ProfileScreen() {
    const dispatch=useDispatch()
    const loginState=useSelector(state=>state.loginUserReducer)
const updatedUserSate=useSelector(state=>state.updateReducer)

    const currentUser=loginState.currentUser

    const{loading,success,error}=updatedUserSate

    const [name,setName]=useState(currentUser.username.userName)
    const[email,setEmail]=useState(currentUser.email.email)

    
   
function update(e){
  e.preventDefault();
    const updatedUser={
        name:name,
        email:email
    }
    dispatch(updateUser(updatedUser,currentUser.email.email))

}

    return ( 
        <div>   <div className="card container mt-5">
        {loading && <Loader />}
        {error && <Error error="something went wrong" />}
        {success && <Success success="Registration is Successfull" />}
        <div className="d-flex justify-content-center">
          <form onSubmit={update}>
            <h1 className="text-center m-3">Registration Form</h1>
            <input
            value={name}
              type="text"
              onChange={(e)=>setName(e.target.value)}
              name="username"
              placeholder="User Name"
            />
            <br />
            <br />
            <input
            value={email}
              type="email"
              onChange={(e)=>setEmail(e.target.value)}
              name="email"
              placeholder="email"
            />
          
        
            <br />
            <br />
            <input
              className="m-2 btn btn-primary"
              type="submit"
              value="Update"
            />
          </form>
        </div>
        
      </div></div>
     );
}

export default ProfileScreen;