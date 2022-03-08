import React from "react";
import Logo from "../../common/Logo";
import "./style.css";
import BannerImg from "./banner.png";

const Banner = () => {
  return (
    <header>
      <div className="header-content">
        <Logo />
        <div className="content-main">
          <h1>Delicious food for your cravings</h1>
          <p>We made fresh and healthy meals with different recipes</p>
          <button>
            View Menu <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
      </div>
      <img src={BannerImg} alt="banner" className="header-img" />
    </header>
  );
};

export default Banner;
