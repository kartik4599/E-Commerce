import { useContext } from "react";
import CartContext from "../../../Context/cart-context";
import classes from "./Items.module.css";

const Items = (props) => {
  const cxt = useContext(CartContext);

  const item={
    id:props.id,
    album:props.album,
    price:props.price,
    src:props.src
  }

  const addItem = () => {
    cxt.addItem(item);
  };

  return (
    <div className={classes.Item}>
      <h2>{props.album}</h2>
      <div className={classes.Image}>
        <img src={props.src} alt="unable to load" />
      </div>
      <div className={classes.Buy}>
        <p>{`$${props.price}`}</p>
        <button onClick={addItem}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Items;
