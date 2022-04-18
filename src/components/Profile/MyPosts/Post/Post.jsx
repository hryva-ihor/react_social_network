import React from "react";
import style from "./Post.module.scss";

const Post = (props) => {
  return (
    <div className={style.post_item}>
      <div className={style.ava_name}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLn5AG9W4gmcr_iyzxzxqa4Wt_uSmm9Q5VPg&usqp=CAU"
          alt="avatar"
        />
        <span>Name Surname</span>
      </div>
      <p className={style.text}>{props.massege}</p>
      <p>like: {props.likesCount}</p>
    </div>
  );
};

export default Post;
