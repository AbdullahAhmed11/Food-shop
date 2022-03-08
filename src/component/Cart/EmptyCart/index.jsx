import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const history = useNavigate();

  return (
    <div className="emptycart">
      <img src="https://merchlist.co/assets/emptycart.png" alt="" />
      <button onClick={() => history("/")}>
        <i className="fas fa-long-arrow-alt-left"></i> Shop Now
      </button>
    </div>
  );
};

export default EmptyCart;
