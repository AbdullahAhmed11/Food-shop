import React from "react";
import "./style.css";
import LogoImg from "./logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <div>
        <img src={LogoImg} alt="logo" />
        <span>
          <b>Teste</b>
        </span>
      </div>
      <p>
        <b>Restaurnt & BBQ</b>
      </p>
    </div>
  );
};

export default Logo;
