import  { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css"; 
import bismilla from "../../image/Lord images/bismillah-5786133_640.webp";
import calligraphy1 from "../../image/Lord images/calligraphy-1.webp";
import calligraphy2 from "../../image/Lord images/calligraphy-2.webp";
import ganesha2 from "../../image/Lord images/ganesha-2.webp";
import ganesha3 from "../../image/Lord images/ganesha-3.webp";
import ganesha4 from "../../image/Lord images/ganesha-4.webp";
import ganpati1 from "../../image/Lord images/ganpati-1.webp";
import god from "../../image/Lord images/god-7175159_640.webp";
import lord_shiv_parbati from "../../image/Lord images/lord-shiv-parbati1.webp";
import mohammad2 from "../../image/Lord images/muhammad2.webp";
import mohammad1 from "../../image/Lord images/muhammad1.webp";
import om1 from "../../image/Lord images/om-1.webp";
import ramdan3 from "../../image/Lord images/ramadan-3.webp";

import "../../css/iconPickerModal.css"; 
import { useDispatch } from 'react-redux';
import { LordIcon} from '../../Redux/action';

const icons = [
  { id: 1, src: bismilla, alt: "Bismilla" },
  { id: 2, src: calligraphy1, alt: "Calligraphy 1" },
  { id: 3, src: calligraphy2, alt: "Calligraphy 2" },
  { id: 4, src: ganesha4, alt: "Ganesha 2" },
  { id: 5, src: ganesha3, alt: "Ganesha 3" },
  { id: 6, src: ganesha2, alt: "Ganesha 4" },
  { id: 7, src: ganpati1, alt: "Ganpati 1" },
  { id: 8, src: god, alt: "God" },
  { id: 9, src: lord_shiv_parbati, alt: "Lord Shiv Parbati" },
  { id: 10, src: mohammad2, alt: "Mohammad 2" },
  { id: 11, src: mohammad1, alt: "Mohammad 1" },
  { id: 12, src: om1, alt: "Om 1" },
  { id: 13, src: ramdan3, alt: "Ramdan 3" },
];

const IconPickerModal = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);
const dispatch = useDispatch()
  return (
    <div className="icon-picker-wrapper">
      <Popup
        modal
        trigger={
          <button className="open-button" type='button'>
            {selectedIcon ? (
              <img src={selectedIcon}  alt="Selected Icon" className="selected-icon" />
            ) : (
              "Choose an Icon"
            )}
          </button>
        }
      >
        {(close) => (
          <div className="modal-content">
            <h2>Select an Icon</h2>
            <div className="icon-grid">
              {icons.map((item) => (
                <div
                  key={item.id}
                  className="icon-option"
                  onClick={() => {
                    setSelectedIcon(item.src);
                    dispatch(LordIcon(item.src));
                    console.log('lordIcon:-',selectedIcon)
                    close(); // close the popup
                  }}
                >
                  <img src={item.src} alt={item.alt} />
                </div>
              ))}
            </div>
            <button className="close-btn" onClick={close}>
              Close
            </button>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default IconPickerModal;