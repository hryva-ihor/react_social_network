import React from "react";
import { addNewPostActionCreator } from "../../../redux/posts_reducer";
import style from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let newPostTextArea = React.createRef();
  let onPostChange = (e) => {
    props.dispatch(addNewPostActionCreator(newPostTextArea));
  };
  return (
    <div>
      <div>
        <div>
          <textarea
            ref={newPostTextArea}
            name=""
            id=""
            cols="30"
            rows="3"
          ></textarea>
        </div>
        <div>
          <button onClick={onPostChange}>Add post</button>
        </div>
      </div>
      <div className={style.post_area}>
        {props.postsData.map((post) => {
          return (
            <Post
              massege={post.postMassege}
              likesCount={post.likesCount}
              key={post.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyPosts;
