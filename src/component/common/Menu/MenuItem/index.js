import React from "react";
import ButtonAddRemoveItem from "../../ButtonAddRemoveItem";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import {
  cartAddItem,
  cartRemoveItem,
} from "../../../../redux/cart/cart.action";
import {
  selectCartItems,
  selectCartItemsCount,
} from "../../../../redux/cart/cart.selector";
import "./style.css";

const MenuItem = ({
  item,
  cartCount,
  cartList,
  cartAddItem,
  cartRemoveItem,
}) => {
  const { name, info, price, img, id } = item;
  const handleQuantity = () => {
    let quantity = 0;
    if (cartCount !== 0) {
      const foundItemInCart = cartList.find((item) => item.id === id);
      if (foundItemInCart) {
        quantity = foundItemInCart.quantity;
      }
    }
    return quantity;
  };

  return (
    <div className="item">
      <img src={img} alt="item" />
      <div className="item-head-desc">
        <p className="item-desc-name">{name}</p>
        <p className="item-desc-info">
          <small>{info}</small>
        </p>
      </div>
      <div className="item-foot-desc">
        <span className="foot-desc-price">${price}</span>
        <ButtonAddRemoveItem
          quantity={handleQuantity()}
          handleRemoveItem={() => cartRemoveItem(item)}
          handleAddItem={() => cartAddItem(item)}
        />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  cartAddItem: (item) => dispatch(cartAddItem(item)),
  cartRemoveItem: (item) => dispatch(cartRemoveItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
