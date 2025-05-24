import { useState, useEffect } from "react";
import PopupSave from "./PopupSave";
import { useDispatch, useSelector } from "react-redux";
import { socialMediaLink } from "../Redux/action";

const SocialMedia = () => {
  const initialFields = ["linkedin", "github", "twitter"];
  
  // First check if localStorage has saved links
  const savedLinks = JSON.parse(localStorage.getItem("socialLinks"));
  
  const [socialLinks, setSocialLinks] = useState(
    savedLinks?.length
      ? savedLinks
      : initialFields.map((type) => ({ type, url: "" }))
  );

  const result = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  const handleChange = (e, index) => {
    const { value } = e.target;
    setSocialLinks((prev) => {
      const updated = [...prev];
      updated[index].url = value.toUpperCase();
      return updated;
    });
  };

  const handleDelete = (index) => {
    setSocialLinks((prev) => {
      const updated = [...prev];
      updated[index].url = ""; // Clear the value
      return updated;
    });
  };

  const capitalize = (str) =>
    str ? str.charAt(0).toUpperCase() + str.slice(1) : "";

  // Save socialLinks to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("socialLinks", JSON.stringify(socialLinks));
  }, [socialLinks]);

  const handleClickNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(socialMediaLink(socialLinks));
   
  };

  useEffect(() => {
    // console.log('result in social media:-', result);
  }, [result]);

  return (
    <div>
      <h2 className="multicolor-heading">Your Social Media Links</h2>
      {socialLinks.map((item, index) => (
        <div key={index} className="d-flex mt-2" style={{ flexDirection: 'column' }}>
          <div className="input-container" style={{width:'100%'}}>
            <label htmlFor={item.type}>{capitalize(item.type)}</label>
            <input
              type="text"
              name={item.type}
              placeholder={`${capitalize(item.type)} Link`}
              title={`${capitalize(item.type)} Link`}
              value={item.url}
              onChange={(e) => handleChange(e, index)}
              className="input"
              style={{ width: "100%", borderRadius: "5px" }}
            />
            <button
              className="button1 ms-2"
              onClick={() => handleDelete(index)}
              type="button"
            >
              <span>Clear</span>
            </button>
          </div>
        </div>
      ))}
      <div className="d-flex justify-content-center mt-3">
        <PopupSave handleClickNext={handleClickNext} inputFields={"Reference"}/>
      </div>
    </div>
  );
};

export default SocialMedia;
