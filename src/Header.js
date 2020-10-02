import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="header">
      <h1>Header</h1>
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <div className="header__input"></div>
      </div>

      <div className="header__middle">
        <img src="" alt="" />
      </div>

      <div className="header__right">
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default Header;
