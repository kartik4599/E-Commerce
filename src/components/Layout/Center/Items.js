import classes from "./Items.module.css";

const Items = (props) => {
  return (
    <div className={classes.Item}>
      <h2>{props.album}</h2>
      <div className={classes.Image}>
        <img src={props.src} alt="unable to load"/>
      </div>
      <div className={classes.Buy}>
        <p>{`$${props.price}`}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Items;
