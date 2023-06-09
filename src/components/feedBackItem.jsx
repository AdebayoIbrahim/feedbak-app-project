import React, { useContext } from "react";
import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedBackContext from "../Context/FeedbackContext";
export const FeedBackItem = ({ item }) => {
  const { deleteFeed, editFeedback } = useContext(FeedBackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close">
        <FaTimes color="purple" onClick={() => deleteFeed(item.id)} />
      </button>
      <button className="edit">
        <FaEdit
          color="purple"
          onClick={() => {
            editFeedback(item);
          }}
        />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};
