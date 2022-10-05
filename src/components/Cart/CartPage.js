import Modal from "../UI/Modal";
import classes from "./CartPage.module.css";
import CartPageItem from "./CartPageItem";
const CartPage = (props) => {
  const cartElements = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];

  const List = cartElements.map((element) => {
    return (
      <CartPageItem
        title={element.title}
        price={element.price}
        src={element.imageUrl}
        quantity={element.quantity}
      />
    );
  });

  return (
    <Modal close={props.close}>
      <div className={classes.cart}>
        <h2>Cart </h2>
        <div className={classes.item}>
          <span>Item</span>
          <span>Price</span>
          <span>Quantity</span>
        </div>
        {List}
      </div>
    </Modal>
  );
};

export default CartPage;
