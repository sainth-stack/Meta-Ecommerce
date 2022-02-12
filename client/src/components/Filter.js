import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../actions/productActions";
function Filter() {
     const dispatch=useDispatch()
    const [searchKey,setSearchKey]=useState('')
    const [sort,setSort]=useState('popular')
    const[category,setCategory]=useState('all')
        const filterFunction=()=>{
            dispatch(filterProducts(searchKey,sort,category))


        }
    
    return ( 
        <div>
<div className="row justify-content-center mt-3 mb-3">
    <div className="col-md-3 m-2 ms-2">
        <input value={searchKey} type="text" placeholder="search Products" onChange={(e)=>{setSearchKey(e.target.value)}} className="form-control"/>
    </div>
    <div className="col-md-2 m-2">
<select value={sort} onChange={(e)=>{setSort(e.target.value)}} className="form-control">

<option value="popular">Popular</option>
<option value="htl">High to low</option>

<option value="lth">Low to High</option>

</select>   
 </div>
    <div className="col-md-2 m-2">
<select value={category} onChange={(e)=>{setCategory(e.target.value)}} className="form-control">
    <option value="all">All</option>
    <option value="electronics">Electronics</option>
    <option value="fashion">fashion</option>
    <option value="mobiles">mobiles</option>
    <option value="games">games</option>

</select>
    </div>
    <div className="col-md-2 m-2 ">
<button className="btn btn-dark " onClick={filterFunction} >FILTER</button>
    </div>
</div>
        </div>
     );
}

export default Filter;