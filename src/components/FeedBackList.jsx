import React, { useContext } from "react";
import { FeedBackItem } from "./feedBackItem";
import FeedBackContext from "../Context/FeedbackContext";
import Spinner from "./shared/Spinner";

const FeedBackList = () => {
  const { feedback, isLoading } = useContext(FeedBackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <h1>No Feedback Yet</h1>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      {feedback.map((item) => {
        return <FeedBackItem item={item} key={item.id} />;
      })}
    </div>
  );
};

export default FeedBackList;
