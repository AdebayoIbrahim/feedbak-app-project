import React from "react";
import Header from "./components/Header";
import "./index.css";
import FeedBackList from "./components/FeedBackList";
import FeedBackStats from "./components/FeedBackStats";
import FeedBackForm from "./components/FeedBackForm";
import About from "./pages/About";
import AboutIcon from "./components/AboutIcon";
import { Routes, Route } from "react-router-dom";
import Post from "./pages/Post";
import { FeedbackProvider } from "./Context/FeedbackContext";

export const App = () => {
  return (
    <FeedbackProvider>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedBackForm />
                <FeedBackStats />
                <FeedBackList />
                <AboutIcon />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/post/:id" element={<Post />} />
          <Route
            path="*"
            element={<h1 style={{ textAlign: "center" }}>Page Not found</h1>}
          />
        </Routes>
      </div>
    </FeedbackProvider>
  );
};
