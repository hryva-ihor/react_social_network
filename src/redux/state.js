const ADD_NEW_POST = "ADD-NEW-POST"
const UPDATE_NEW_MASSEGE_BODY = "UPDATE_NEW_MASSEGE_BODY"
const SEND_MASSEGE = "SEND_MASSEGE"
let store = {
  _state: {
    dialogsData:  [
      { id: 1, name: `Vasya` },
      { id: 2, name: `Petya` },
      { id: 3, name: `Ivan` },
      { id: 4, name: `Yura` },
    ],
    massegeData: [
      { id: 1, massege: `hello` },
      { id: 2, massege: `yooo` },
      { id: 3, massege: `hi` },
      { id: 4, massege: `by` },
    ],
    postsData: [
      { id: 1, massege: `looooool`, likesCount: 11 },
      { id: 2, massege: `fuck putin`, likesCount: 4 },
      { id: 3, massege: `ukraine win`, likesCount: 100 },
      { id: 4, massege: `nice day`, likesCount: 18 },
    ],
    newMassegeBody: ``
  },
  _callSubscriber() {
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  getState(){
    return this._state
  },
  dispatch(action){
    if(action.type === ADD_NEW_POST){
      let textMassege = action.newText.current.value;
      action.newText.current.value = ``;
      let NewPost = {
        id:5, 
        massege: textMassege,
        likesCount: 0,
      }
      this._state.postsData.push(NewPost)
      this._callSubscriber(this._state)
    }else if(action.type === UPDATE_NEW_MASSEGE_BODY){
      this._state.newMassegeBody = action.newTextMassegeBody
      this._callSubscriber(this._state)
    }else if(action.type === SEND_MASSEGE){
      let newMasssege = this._state.newMassegeBody
      this._state.newMassegeBody = ""
      this._state.massegeData.push(
        { id: 5, massege: newMasssege }
      );
      this._callSubscriber(this._state)
    }
  },  
}

export const addNewPostActionCreator = (newPostTextArea) => {
  return {
    type: ADD_NEW_POST,
    newText: newPostTextArea,
  };
};

export const sendMassegeActionCreator = () =>{
  return {type: SEND_MASSEGE}
}
export const updateNewMassegeBodyActionCreator = (masssegeBody) => {
  return {type: UPDATE_NEW_MASSEGE_BODY,newTextMassegeBody: masssegeBody }
}




export default store

// global link to store 
window.store = store

