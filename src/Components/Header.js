import { Avatar } from "@material-ui/core";
import React from "react";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import "./Header.css";
import { HelpOutline, Search } from "@material-ui/icons";
import { useStateValue } from "../StateProvider";

const Header = () => {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          src={user?.photoURL}
          alt={user?.displayName}
        />
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <Search />
        <input type="text" placeholder="search Clever programmer" />
      </div>
      <div className="header__right">
        <HelpOutline />
      </div>
    </div>
  );
};

export default Header;
