import classes from "./Cart.module.css";

const Cart =(props)=>{
    return(
        <button onClick={props.onCart} className={classes.button}>
            Cart
            <span>1</span>
        </button>
    );
}

export default Cart;