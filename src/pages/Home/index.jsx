import React from "react";
import CartCountButton from "../../component/common/CartCountButton";
import Menu from "../../component/common/Menu";
import Banner from "../../component/Home/Banner";
import Footer from "../../component/common/Footer";
import { menuItemsData } from "../../component/common/Menu/data";

const Home = () => {
  return (
    <div>
      {/* Banner*/}
      <Banner />
      {/* Menu*/}
      <Menu List={menuItemsData} />
      {/* Footer*/}
      <Footer />
      {/* cart Button*/}
      <CartCountButton />
    </div>
  );
};

export default Home;
