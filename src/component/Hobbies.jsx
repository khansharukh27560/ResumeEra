import { useDispatch, useSelector } from "react-redux";
import { addHobbies } from "../Redux/action";
import { useState, useEffect, memo } from "react";
// import KeySkills from "./KeySkill";

import GoogleAd from "./adFolder/GoogleAd";
import PopupSave from "./PopupSave";

const Hobbies = () => {
  const [input, setInput] = useState(() => {
    // Load hobbies from local storage if available
    const savedHobbies = localStorage.getItem("hobbiesData");
    return savedHobbies ? JSON.parse(savedHobbies) : [{ hobbies: "" }];
  });
  
  const dispatch = useDispatch();
  const result = useSelector((state)=>state.reducer.templatePage)

  useEffect(() => {
    // Save hobbies to local storage whenever it changes
    localStorage.setItem("hobbiesData", JSON.stringify(input));
  }, [input]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addHobbies(input));
  };

  const handleAddMore = () => {
    setInput((prev) => [...prev, { hobbies: "" }]);
  };

  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation();
    
    const emptyFields = input
      .map((entry, index) => ({ ...entry, index }))
      .filter((entry) => !entry.hobbies );

    if (emptyFields.length > 0) {
      alert("Please fill in all fields.");
      const firstEmptyFieldIndex = emptyFields[0].index;
      document.getElementsByName("hobbies")[firstEmptyFieldIndex].focus();
      return;
    }

    
    dispatch(addHobbies(input));
  
  };

  

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setInput((prev) => {
      const updateInput = [...prev];
      updateInput[index] = {
        ...updateInput[index],
        [name]: value.toUpperCase(),
      };
      return updateInput;
    });
  };

  const handleDelete = (index) => {
    setInput((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={handleSubmit}>
      
        <div>
          <div className="profetional-detail">
            <h1 className="multicolor-heading">Hobbies that You Have</h1>
            <p>
              Including hobbies in a resume can provide a more well-rounded
              view of who you are beyond your professional qualifications.
              Hobbies can showcase your personality, interests, and soft skills
              that may not be evident from your work experience or education.
              For example, involvement in team sports can indicate strong
              teamwork and leadership abilities, while creative hobbies like
              painting or writing may highlight your creativity and
              problem-solving skills. Additionally, sharing hobbies that align
              with the job role can demonstrate your passion and dedication to
              the field, making you a more appealing candidate. Overall, hobbies
              add a personal touch to your resume, helping you stand out and
              connect with potential employers on a deeper level.
            </p>
          </div>
          <hr className="mb-3" />
          {input.map((inp, index) => (
            <div key={index} className="d-flex justify-content-center mt-2">
              <div className="input-container">
              <label htmlFor={`hobbies-${index}`}>{`Hobbies${index+1}`}</label>
              <input
                type="text"
                className="input"
                name="hobbies"
                value={inp.hobbies}
                onChange={(e) => handleChange(e, index)}
                placeholder="Hobbies"
                style={{ width: "100%", borderRadius: "5px" }}
              />
              </div>
              <button
                className="button1 ms-2"
                onClick={() => handleDelete(index)}
                type="button"
              >
                <span>Delete</span>
              </button>
            </div>
          ))}
          <div className="d-flex justify-content-around mt-2">
            <button
              className="button1"
              type="button"
              onClick={handleAddMore}
            >
              <span className="text">ADD MORE</span>
            </button>
          </div>
          <div>
  <GoogleAd/>
</div>
          <div className="d-flex justify-content-around">
           <PopupSave handleClickNext={handleClick} inputFields={"Certificate"}/>
          </div>
        </div>
    
    </form>
  );
};

export default memo(Hobbies);
