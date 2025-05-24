import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { personalInfoData } from "../Redux/action";
// import WorkExperience from "./WorkExperience";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/personalinfo.css";
import GoogleAd from "../component/adFolder/GoogleAd.jsx";
import { careerObjectives } from "./suggetionList.jsx";
import profileDummy from '../image/image_for_link/profile dummy img.webp'
// import Popup from "reactjs-popup";
import PopupSave from "./PopupSave.jsx";
const PersonalInfo = () => {
  const [visibleCount, setVisibleCount] = useState(10);
  const [selectImage, setSelectImage] = useState(null);
  const [showPersonalInfo, setShowPersonalInfo] = useState(true);
  // const [showWorkExperience, setShowWorkExperience] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const [inputData, setInputData] = useState({
    image: profileDummy,
    firstName: "",
    lastName: "",
    email: "",
    state: "",
    city: "",
    mobileNumber: "",
    postalCode: "",
    object: "",
    address: "",
    maritalstatus: "",
    nationality: "",
    dateofbirth: "",
  });

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 10);
  };
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("personalInfoData"));
    if (savedData) {
      setInputData(savedData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "object") {
      if (value) {
        const filtered = careerObjectives.filter((suggestion) =>
          suggestion.toUpperCase().includes(value.toUpperCase())
        );
        setFilteredSuggestions(filtered);
      } else {
        setFilteredSuggestions([]);
      }
    }
    setInputData((prevData) => ({
      ...prevData,
      [name]: value.toUpperCase(),
    }));
  };

  const handleSuggestionClick = (suggestion) => {
    setInputData((prevData) => ({
      ...prevData,
      object: suggestion, // Update only the 'object' field
    }));
    setFilteredSuggestions([]);
  };

  const convertFileToBase64 = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setInputData((prevData) => ({
        ...prevData,
        image: reader.result, // Set base64 string as image source
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectImage(file);
      convertFileToBase64(file);
    }
  };

  

  const handleClickNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const emptyFields = Object.entries(inputData).filter(
      ([key, value]) => !value
    );
    if (emptyFields.length > 0) {
      alert("Please fill in all fields.");
      const firstEmptyField = emptyFields[0][0]; // Get the key of the first empty field
      document.getElementsByName(firstEmptyField)[0].focus(); // Focus the first empty input
      return; // Prevent proceeding to the next step
    }
    localStorage.setItem("personalInfoData", JSON.stringify(inputData)); // Save data to local storage
    dispatch(personalInfoData(inputData));


  };

  return (
    <div>
      {showPersonalInfo && (
        <div className="prefetional-main">
          <div className="profetional-detail">
            <h1 className="multicolor-heading">Your Profetional detail</h1>
            <p style={{}}>
              Personal information in a resume serves as the foundational layer
              that helps employers connect with you on a basic level. It
              includes essential details like your name, contact information,
              and sometimes a brief profile summary. This information ensures
              that potential employers can reach out to you easily for
              interviews and further communication. It also gives them a first
              impression of who you are beyond your professional qualifications.
              Including accurate and updated personal information is crucial
              because it reflects your attention to detail and professionalism,
              making your resume complete and effective in the hiring process.
            </p>
          </div>

          <div className="personal-profile">
            <div className="inputt-container">
              <label style={{position:'absolute',left:'53%'}}>Profile Image</label>
              <input
                type="file"
                accept="image/*"
                id="image"
                name="image"
                className="profile-inputt"
                onChange={handleImageChange}
                style={{width:'100px',height:'100px',borderRadius:'50%',border:'1px solid transparent'}} // Hide file input field
              />

              <img
                onClick={() => document.getElementById("image").click()} // Trigger file input on click
                src={
                  selectImage ? URL.createObjectURL(selectImage) : inputData.image
                } // Display selected image or default
                alt="profile"
                className="profile-imgs"
                style={{ width: "150px", height: "150px", cursor: "pointer" }}
              />

            </div>
          </div>
          <div className="mt-5 input-div">
            <div className="d-md-flex one">
              <div className="input-container">
                <label htmlFor="firstName">First Name</label>
                <input
                  className="input m-2"
                  type="text"
                  placeholder="first name"
                  name="firstName"
                  value={inputData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="lastName">Last Name</label>
                <input
                  className="input m-2"
                  type="text"
                  placeholder="last name"
                  name="lastName"
                  value={inputData.lastName}
                  onChange={handleChange}
                />
              </div>

            </div>
            <div className="d-md-flex one">

              <div className="input-container">
                <label htmlFor="email">Email</label>
                <input
                  className="input m-2"
                  type="text"
                  placeholder="email"
                  name="email"
                  value={inputData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input
                  className="input m-2"
                  type="number"
                  placeholder="mobile number"
                  name="mobileNumber"
                  value={inputData.mobileNumber}
                  onChange={handleChange}
                />
              </div>

            </div>
            <div className="d-md-flex one w-sm-50">
              <div className="input-container">
                <label htmlFor="address">Address</label>
                <textarea
                  className="input m-2"
                  type="text"
                  placeholder="address"
                  name="address"
                  value={inputData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor='married'>Married</label>
                <input
                  className="input m-2"
                  list="married"
                  type="text"
                  placeholder="marital status"
                  name="maritalstatus"
                  value={inputData.maritalstatus}
                  onChange={handleChange}
                />
                <datalist id="married">
                  <option value="maried"></option>
                  <option value="unmarried"></option>
                  <option value="exmarried"></option>
                </datalist>
              </div>
            </div>

            <div className="d-md-flex one">

              <div className="input-container">
                <label htmlFor="city">city</label>
                <input
                  className="input m-2"
                  type="text"
                  placeholder="city"
                  name="city"
                  value={inputData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="state">state</label>
                <input
                  className="input m-2"
                  type="text"
                  placeholder="state"
                  name="state"
                  value={inputData.state}
                  onChange={handleChange}
                />
              </div>

            </div>
            <div className="d-md-flex one">
              <div className="input-container">
                <label htmlFor="postalCode">Postal Code</label>
                <input
                  className="input m-2"
                  type="number"
                  placeholder="postal code"
                  name="postalCode"
                  value={inputData.postalCode}
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="Nationality">Nationality</label>
                <input
                  className="input m-2"
                  type="text"
                  placeholder="Nationality"
                  name="nationality"
                  value={inputData.nationality}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="input-container textarea1 ">
                <label htmlFor="dateofbirth"style={{left:'50%'}}>Date Of Birth</label>
                <input
                  className="input m-2 "
                  type="date"
                  placeholder="date of birth"
                  name="dateofbirth"
                  value={inputData.dateofbirth}
                  onChange={handleChange}
                  style={{ width: "100%" }}
                />
              </div>
            <div className="input-container textarea1 " >
              <label htmlFor="object" style={{left:'50%'}}>Objective for Resume</label>
              <textarea
                className="input1 m-2"
                type="text"
                placeholder="object"
                name="object"
                value={
                  inputData.object === ""
                    ? ""
                    : inputData?.object || inputData // Use a specific property like "name"
                }

                onChange={handleChange}
                style={{ width: "100%" }}
              />
              {filteredSuggestions.length > 0 && (
                <ol
                  className="suggestion-list"
                  style={{
                    maxWidth: '620px',
                    padding: "0",
                    margin: "5px 0",
                    border: "1px solid oldlace",
                    borderRadius: "4px",
                    backgroundColor: "white",
                    maxHeight: "300px",
                    overflowY: "auto",
                  }}
                >
                  {filteredSuggestions.slice(0, visibleCount).map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      style={{
                        color: 'black',
                        padding: "10px",
                        cursor: "pointer",
                        borderBottom:
                          index < Math.min(visibleCount, filteredSuggestions.length) - 1
                            ? "1px solid #eee"
                            : "none",
                      }}
                    >
                      {suggestion}
                    </li>
                  ))}
                  {visibleCount < filteredSuggestions.length && (
                    <button onClick={handleLoadMore} style={{ marginTop: "10px", cursor: "pointer" }}>
                      Load More
                    </button>
                  )}
                </ol>
              )}


            </div>
          </div>
          <div
            style={{ marginLeft: "0px", width: "100%" }}
            className="GoogleAd"
          >
            <GoogleAd />
          </div>
          <div className="d-md-flex justify-content-around m-2 button-div">
           <PopupSave handleClickNext={handleClickNext} inputFields={'workexperience'} />
          </div>
        </div>
      )}

    </div>
  );
};

export default PersonalInfo;
