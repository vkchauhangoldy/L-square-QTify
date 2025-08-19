import React from "react";
import "./Navbar.css";
import Searchbar from "../Searchbar/Searchbar";
import Feedback from "../FeedbackButton/FeedbackButton";
import Logo from "../../UpperSecJSX/Logo";

const Navbar = ({ onFeedbackButtonClick }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <Logo />
      </div>
      <div>
        <Searchbar />
      </div>
      <div className="feedback">
        <Feedback onFeedbackButtonClick={onFeedbackButtonClick} />
      </div>
    </div>
  );
};

export default Navbar;
