import React from "react";
import style from "./MassegeItem.module.scss";

const Massege = (props) => {
  return <div className={style.dialogs__massege_item}>{props.massege}</div>;
};

export default Massege;
