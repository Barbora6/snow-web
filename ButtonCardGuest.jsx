import "./ButtonCardGuest.css";
import { MoreInformation } from "../card/MoreInformation";
import { useState } from "react";
import { Link } from "react-router-dom";

export const ButtonCardGuest = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(true);
  };

  return (
    <>
      <Link to="/more-info">
        <button className="btn-cardGuest" onClick={handleClick}>
          Zjistit více
        </button>
      </Link>
      {showComponent && <MoreInformation />}
    </>
  );
};
