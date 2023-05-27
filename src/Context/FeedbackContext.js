import React, { createContext, useState, useEffect } from "react";
const FeedBackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  // deleteFeedback
  const deleteFeed = async (currentid) => {
    window.confirm("Are You Sure You Want To Delete This Item?") &&
      (await fetch(`http://localhost:2000/feedback/${currentid}`, {
        method: "DELETE",
      }));

    setFeedback(feedback.filter((item) => item.id !== currentid));
  };

  // addFeedback
  const addFeedback = async (newFeedback) => {
    //sending post request
    const response = await fetch("http://localhost:2000/feedback", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();
    //adding random id
    // let newId = Math.random().toString(30).slice(2, 12);
    // newFeedback.id = newId;
    // add the new Feedback into the array

    setFeedback([data, ...feedback]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  //using promise
  const fetchData = () => {
    fetch(`http://localhost:2000/feedback?_sort=id&_order=desc`)
      .then((request) => request.json())
      .then((data) => {
        // console.log(data);
        setFeedback(data);
        setIsloading(false);
      });
  };

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  //Edit feedback
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  //update feedback
  const updatedFeedback = async (id, updItem) => {
    const response = await fetch(`http://localhost:2000/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    });
    const data = await response.json();
    setFeedback(
      feedback.map((item) => {
        if (item.id === id) {
          return { ...item, ...data };
        } else {
          return item;
        }
      })
    );
  };
  return (
    <FeedBackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeed,
        addFeedback,
        editFeedback,
        updatedFeedback,
        isLoading,
      }}
    >
      {children}
    </FeedBackContext.Provider>
  );
};
export default FeedBackContext;
