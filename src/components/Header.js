import React from "react";

const Header = () => {
  return (
    <div>
      <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""></img>
      <div>
        <input className="header_searchInput" type="text"></input>
        {/* logo */}
      </div>
      
      <div className="header_nav">
        <div>
            <span>Hello</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
