import  postsReducer  from "./posts_reducer"
import  dialogsReducer  from "./dialogs_reduser"

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
      { id: 1, postMassege: `looooool`, likesCount: 11 },
      { id: 2, postMassege: `fuck putin`, likesCount: 4 },
      { id: 3, postMassege: `ukraine win`, likesCount: 100 },
      { id: 4, postMassege: `nice day`, likesCount: 18 },
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
    this._state.postsData = postsReducer(this._state.postsData, action)
    this._state = dialogsReducer(this._state, action)

    this._callSubscriber(this._state)
  },  
}






export default store

// global link to store 
window.store = store

