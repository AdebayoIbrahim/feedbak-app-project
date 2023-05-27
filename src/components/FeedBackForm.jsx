import React, { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedBackContext from "../Context/FeedbackContext";

const FeedBackForm = () => {
  const [text, setText] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [rating, setRating] = useState(10);
  const [message, setMeassege] = useState("");

  const { addFeedback, feedbackEdit, updatedFeedback } =
    useContext(FeedBackContext);

  useEffect(() => {
    if (feedbackEdit.edit) {
      setDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleChange = (e) => {
    if (text === "") {
      setDisabled(true);
      setMeassege(null);
    } else if (text !== " " && text.trim().length <= 10) {
      setDisabled(true);
      setMeassege("Value Must Be At Least 10 Charaters!");
    } else {
      setDisabled(false);
      setMeassege(null);
    }
    let val = e.target.value;
    setText(val);
  };

  //submition

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      //set new object
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackEdit.edit) {
        updatedFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      // Empty Text field
      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2> How Would You Like To Rate Your Service With Us ?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Write A Review"
            value={text}
          />
          <Button type="submit" isDisabled={disabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedBackForm;
