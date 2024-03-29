import React from "react";
import classnames from "classnames";
import "./Card.scss";
import moon2 from "../../../Assets/moon2.png"

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <div
      className={classnames("card", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive,
      })}
      onClick={handleClick}
    >
      <div className="card-face card-font-face">
        <img src={moon2} alt="auth0" />
      </div>
      <div className="card-face card-back-face">
        <img src={card.image} alt="icon" />
      </div>
    </div>
  );
};

export default Card;
