import React from "react";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <img
        src="https://assets-global.website-files.com/5e3177cecf36f6591e4e38cb/5ea2a86505e63bdd814cf868_Logo.png"
        alt="logo"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio explicabo
      </p>
    </header>
  );
};

export default Header;
