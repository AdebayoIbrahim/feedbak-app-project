import React, { useContext } from "react";
import FeedBackContext from "../Context/FeedbackContext";

// import PropTypes from "prop-types";
const FeedBackStats = () => {
  const { feedback } = useContext(FeedBackContext);
  let reviews = feedback.length;
  let averageRating =
    feedback.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / reviews;
  averageRating = averageRating.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>{reviews} Reviews</h4>
      <h4>Average Rating: {isNaN(averageRating) ? 0 : averageRating}</h4>
    </div>
  );
};

// FeedBackStats.PropTypes = {
//   feedback: PropTypes.array.isRequired,
// };
export default FeedBackStats;
