import Cart from "../Cart/Cart";
import classes from "./Header.module.css";

const Header = () => {
  const handler = () => {
    console.log("working");
  };

  return (
    <>
      <header className={classes.header}>
        <div className={classes['header-item']}>
          <span onClick={handler}>HOME</span>
          <span>STORE</span>
          <span>ABOUT</span>
          <Cart />
        </div>
      </header>
      <h1 className={classes.h1}>The Generics</h1>
    </>
  );
};

export default Header;
