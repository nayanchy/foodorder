import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>FoodOrder</h1>
        <HeaderCartButton cartHandler={props.cartHandler} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="FoodOrder" />
      </div>
    </>
  );
};

export default Header;
