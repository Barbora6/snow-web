import { Link } from "react-router-dom";
import { useState } from "react";
import { Registration } from "../form/Registration";
import "./ButtonRegistration.css";

export const ButtonRegistration = () => {
  const [showRegistration, setShowRegistration] = useState(false);

  const handleClick = () => {
    setShowRegistration(true);
  };

  return (
    <>
      <Link to="/registration">
        <button className="btn-registration" onClick={handleClick}>
          Registrace karty hosta
        </button>
      </Link>
      {showRegistration && <Registration />}
    </>
  );
};
