import React from "react";
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Header = () => {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      ></img>
      <div className="header_search">
        <input className="header_searchInput" type="text"></input>
        <SearchIcon className="header_searchIcon"></SearchIcon>
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="lineOne">Hello</span>
          <span className="lineTwo">Sign in</span>
        </div>
        <div className="header_option">
          <span className="lineOne">Returns</span>
          <span className="lineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="lineOne">Your</span>
          <span className="lineTwo">Prime</span>
        </div>
        <div className="header_optionBasket">
            <ShoppingCartIcon></ShoppingCartIcon>
            <span className="lineTwo header_basketCount">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;