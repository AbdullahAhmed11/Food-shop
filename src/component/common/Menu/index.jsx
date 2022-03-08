import React from "react";
import "./style.css";
import { menuItemsData } from "./data.js";
import MenuItem from "./MenuItem";

const Menu = ({ List }) => {
  return (
    <main>
      {List.map((item) => (
        <MenuItem item={item} key={item.id} />
      ))}
    </main>
  );
};

export default Menu;
