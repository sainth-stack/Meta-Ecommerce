import Rating from "react-rating";
import { useState } from "react";
import { addProductReview } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
function Review({ product }) {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  function sendReview() {
    if (localStorage.getItem("token")) {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      var alreadyReviewed;
      console.log(product[0].reviews);
      console.log(product[0].reviews.length);
      const length = product[0].reviews.length;
      for (var i = 0; i < length; i++) {
        console.log(product[0].reviews[i].userEmail);
        if (product[0].reviews[i].userEmail === currentUser.email.email) {
          alreadyReviewed = true;
        }
      }

      if (alreadyReviewed) {
        alert("you have already reviewed");
      } else {
        const review = {
          rating: rating,
          comment: comment,
        };
        dispatch(addProductReview(review, product[0]._id));
      }
    }
    else{
      window.location.href='/login'
    }
  }
  return (
    <div>
      <h2>Give Your Reviw</h2>
      <Rating
        style={{ color: "orange" }}
        initialRating={5}
        emptySymbol="fa fa-star-o fa-1x"
        fullSymbol="fa fa-star fa-1x"
        onChange={(e) => {
          setRating(e);
        }}
      />
      <input
        type="text"
        className="form-control mt-2"
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <div className="text-end mt-2">
        {" "}
        <button className="btn btn-dark mt-2" onClick={sendReview}>
          Submit Review
        </button>
      </div>
      <h2>Latest Reviews</h2>

      {product[0].reviews &&
        product[0].reviews.map((review) => {
          return (
            <div className="text-left">
              <Rating
                style={{ color: "orange" }}
                initialRating={review.rating}
                emptySymbol="fa fa-star-o fa-1x"
                fullSymbol="fa fa-star fa-1x"
                readonly
              />

              <p>{review.comment}</p>
              <p>By : {review.name}</p>
              <hr />
            </div>
          );
        })}
    </div>
  );
}

export default Review;
