const UPDATE_NEW_MASSEGE_BODY = "UPDATE_NEW_MASSEGE_BODY"
const SEND_MASSEGE = "SEND_MASSEGE"


const dialogsReducer = (state, action) => {
  switch(action.type){
    case UPDATE_NEW_MASSEGE_BODY:
      state.newMassegeBody = action.masssegeBody
      return state;
    case SEND_MASSEGE:
      let newMasssege = state.newMassegeBody
      state.newMassegeBody = ""
      state.massegeData.push({ id: state.massegeData.length, massege: newMasssege })
      return state;
    default:
      return state;
  }

}

export const sendMassegeActionCreator = () =>{
  return {type: SEND_MASSEGE}
}
export const updateNewMassegeBodyActionCreator = (masssegeBody) => {
  return {type: UPDATE_NEW_MASSEGE_BODY, masssegeBody }
}

export default dialogsReducer