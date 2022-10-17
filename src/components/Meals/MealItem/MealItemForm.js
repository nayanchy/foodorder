import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountValid, setAmountValid] = useState(true);
  const amountInputRef = useRef();
  const input = {
    id: "amount" + props.id,
    type: "number",
    min: "1",
    max: "5",
    step: "1",
    defaultValue: "1",
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const eneteredAmount = +amountInputRef.current.value;
    if (eneteredAmount < 1 || eneteredAmount > 5) {
      setAmountValid(false);
      return;
    }
    props.onAddToCart(eneteredAmount);
    amountInputRef.current.value = 1;
    // console.log(eneteredAmount);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input ref={amountInputRef} label="Amount" input={input} />
      <button>+ Add</button>
      {!amountValid && <p>Please enter a valid number</p>}
    </form>
  );
};

export default MealItemForm;
