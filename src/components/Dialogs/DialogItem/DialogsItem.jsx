import React from "react";
import style from "./DialogsItem.module.scss";
import { NavLink } from "react-router-dom";

const DialogUserItem = (props) => {
  return (
    <div className={style.dialogs__user_item}>
      <NavLink
        to={"/dialogs/" + props.id}
        className={(navData) =>
          navData.isActive ? style.dialog_active : style.dialogs__user_item_link
        }
      >
        {props.name}
      </NavLink>
    </div>
  );
};
export default DialogUserItem;
