import React from "react";
// Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRadiation } from "@fortawesome/free-solid-svg-icons";
// Styles
import "./EmptyPlace.scss";
// Types
interface EmptyPlaceProps {
    text: string;
    className?: string;
}

const EmptyPlace: React.FC<EmptyPlaceProps> = ({ text, className }) => {
  return (
    <div className={`empty-cart ${className}`}>
      <FontAwesomeIcon icon={faRadiation} className="empty-cart-icon" />
      <h3>{text}</h3>
    </div>
  );
};

export default EmptyPlace;
