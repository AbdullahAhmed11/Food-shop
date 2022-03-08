import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import EmptyCart from "../../component/Cart/EmptyCart";
import Footer from "../../component/common/Footer";
import Logo from "../../component/common/Logo";
import Menu from "../../component/common/Menu";
import { menuItemsData } from "../../component/common/Menu/data";
import "./style.css";
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from "../../redux/cart/cart.selector";
const Cart = ({ cartCount, cartList, cartTotal }) => {
  return (
    <div>
      <div className="cart-header">
        <Logo />
      </div>
      {cartCount === 0 ? (
        <EmptyCart />
      ) : (
        <div className="orders">
          <div className="orders-heading">Your Orders</div>
          <div className="orders-menu">
            <Menu List={cartList} />
          </div>
          <h3 className="orders-total">Your orders Total ${cartTotal} </h3>
        </div>
      )}

      <Footer />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);
