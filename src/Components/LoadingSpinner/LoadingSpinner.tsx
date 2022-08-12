import React from "react";
// Styles
import "./LoadingSpinner.style.scss";

const LoadingSpinner = () => (
  <div className="spinner-container">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
  </div>
);

export default LoadingSpinner;
