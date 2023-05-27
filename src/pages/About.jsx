import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <Card>
      <div className="about">
        <h1>About This Feedbak App</h1>
        <p>A React App To Leave Feeback For A Product/Services</p>
        <p>Version 1.0.0.1</p>
        <p>
          <Link to="/">Back To Home</Link>
        </p>
      </div>
    </Card>
  );
};
export default About;
