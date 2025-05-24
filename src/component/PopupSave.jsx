import React from "react";
import Popup from "reactjs-popup";
import '../css/popupsave.css'
const PopupSave = ({ handleClickNext, inputFields }) => (
  <Popup
    modal
    nested
    trigger={
      <button type="button1" className="button1">
        <span className="text">save</span>
      </button>
    }
  >
    {(close) => (
      <div className="popup-save-container">
        <small className="popup-save-message">
          🤖 Your work is done! 📋 Please fill {inputFields} portions because it's required.
        </small>
        <button
          className="popup-save-done-button"
          onClick={(e) => {
            handleClickNext(e);
            close(); // Close the popup after saving
          }}
        >
          Done
        </button>
      </div>
    )}
  </Popup>
);

export default PopupSave;
