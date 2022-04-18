import React from "react";
import style from "./Nav.module.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive ? style.activelink : style.item_link
            }
            to="/main"
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive ? style.activelink : style.item_link
            }
            to="/massege"
          >
            Massege
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive ? style.activelink : style.item_link
            }
            to="/news"
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive ? style.activelink : style.item_link
            }
            to="/music"
          >
            Music
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive ? style.activelink : style.item_link
            }
            to="/settings"
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
