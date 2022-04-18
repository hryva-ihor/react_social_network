import React from "react";
import style from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <main className={style.main}>
      <ProfileInfo />
      <div className={style.main_content}>
        <MyPosts dispatch={props.dispatch} postsData={props.postsData} />
      </div>
    </main>
  );
};

export default Profile;
