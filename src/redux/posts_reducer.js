const ADD_NEW_POST = "ADD-NEW-POST" 

const postsReducer = (postsData, action) => {
  if(action.type === ADD_NEW_POST){
    let textMassege = action.newText.current.value;
    action.newText.current.value = ``;
    let NewPost = {
      id:postsData.length+1, 
      postMassege: textMassege,
      likesCount: 0,
    }
    console.log(postsData);
    postsData.push(NewPost)
  }
  return postsData
}

export const addNewPostActionCreator = (newPostTextArea) => {
  return {
    type: ADD_NEW_POST,
    newText: newPostTextArea,
  };
};

export default postsReducer