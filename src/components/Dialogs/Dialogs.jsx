import React from "react";
import style from "./Dialogs.module.scss";
import DialogUserItem from "./DialogItem/DialogsItem";
import Massege from "./MassegeItem/MassegeItem";
import {
  sendMassegeActionCreator,
  updateNewMassegeBodyActionCreator,
} from "../../redux/dialogs_reduser";

const Dialogs = (props) => {
  // debugger;
  let store = props.store;
  let state = store.getState();
  // console.log(store);
  // console.log(state);
  let newTextMassegeBody = state.newMassegeBody;
  // console.log(newTextMassegeBody);
  const AddMassege = () => {
    store.dispatch(sendMassegeActionCreator());
  };
  const onMassegeChange = (event) => {
    let masssegeBody = event.target.value;
    store.dispatch(updateNewMassegeBodyActionCreator(masssegeBody));
  };
  return (
    <div>
      <div className={style.dialogs}>
        <div>
          <div className={style.dialogs__user}>
            {state.dialogsData.map((dialog) => {
              return <DialogUserItem name={dialog.name} id={dialog.id} />;
            })}
          </div>
          <div className={style.dialogs__massege}>
            {state.massegeData.map((dialog) => {
              return <Massege massege={dialog.massege} key={dialog.id} />;
            })}
          </div>
        </div>
        <div className={style.send_massege_area}>
          <div>
            <textarea
              placeholder="enter your massege"
              cols="20"
              rows="1"
              value={newTextMassegeBody}
              onChange={onMassegeChange}
            ></textarea>
          </div>
          <div>
            <button onClick={AddMassege}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
