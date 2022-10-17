import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon.js";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  // console.log(cartCtx);
  const { items } = cartCtx;
  const numberOfItems = items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.amount === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <div onClick={props.cartHandler}>
      <button className={btnClasses}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span className={classes.bump}>Your Cart</span>
        <span className={classes.badge}>{numberOfItems}</span>
      </button>
    </div>
  );
};

export default HeaderCartButton;
