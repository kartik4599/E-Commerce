import { NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";
import classes from "./Header.module.css";

const Header = (props) => {
  

  return (
    <>
      <header className={classes.header}>
        <div className={classes['header-item']}>
          <NavLink to='./home' activeClassName={classes.active} > <span>HOME</span></NavLink>
          <NavLink to='./store' activeClassName={classes.active}> <span>STORE</span></NavLink>
          <NavLink to='./about' activeClassName={classes.active}><span>ABOUT</span></NavLink>
          <Cart onCart={props.onCart}/>
        </div>
      </header>
      <h1 className={classes.h1}>The Generics</h1>
    </>
  );
};

export default Header;
