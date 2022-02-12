import { Link } from "react-router-dom"
import Rating from 'react-rating'
const Products=({product})=>{
    return(
        <div className='text-start'>
            <div>
            <Link to={`product/${product._id}`}>
            <img src={product.image} className='img-fluid'/>

                <h1>{product.name}</h1>
                <Rating style={{color:'orange'}}
                initialRating={product.rating}
  emptySymbol="fa fa-star-o fa-1x"
  fullSymbol="fa fa-star fa-1x"
  readonly={true}
/>                <h1>Price:{product.price}</h1>
            </Link>
            </div>
        </div>
    )
}
export default Products