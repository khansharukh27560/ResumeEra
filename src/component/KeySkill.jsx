import { useState, useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { keyskillsData } from "../Redux/action";
import GoogleAd from "./adFolder/GoogleAd";
import PopupSave from "./PopupSave";

const KeySkills = () => {
  const [inputFields, setInputFields] = useState(() => {
    const savedKeySkills = localStorage.getItem("keySkills");
    return savedKeySkills ? JSON.parse(savedKeySkills) : [{ keyskills: '', rating: 1 }];
  });

  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem("keySkills", JSON.stringify(inputFields));
  }, [inputFields]);
  
  const handleClickNext = (e) => {
    e.preventDefault()
        e.stopPropagation();
    const emptyFields = inputFields
    .map((entry, index) => ({ ...entry, index }))
    .filter((entry) => !entry.keyskills || entry.rating === 0);

  if (emptyFields.length > 0) {
    alert("Please fill in all fields.");
    const firstEmptyFieldIndex = emptyFields[0].index;
    document.getElementsByClassName("input")[firstEmptyFieldIndex].focus();
    return;
  }
    dispatch(keyskillsData(inputFields));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(keyskillsData(inputFields));
  };

  const handleAddMore = () => {
    setInputFields([...inputFields, { keyskills: '', rating: 1 }]);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    setInputFields((prev) => {
      const updatedFields = [...prev];
      updatedFields[index] = {
        ...updatedFields[index],
        [name]: name === "rating" ? Number(value) : value.toUpperCase(),
      };
      return updatedFields;
    });
  };

  const handleDelete = (index) => {
    setInputFields(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={handleSubmit} style={{}}>
     
        <div>
          <div className="project-detail">
    <h1 className="multicolor-heading">KEY SKILLS</h1>
    <p>
      Showcasing your project experience in a resume is crucial as it demonstrates your practical application of skills, problem-solving abilities, and hands-on experience with real-world scenarios.
    </p>
</div>

<hr style={{width:'inherit'}}/>
          {inputFields.map((field, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div className="input-container">
              <label htmlFor={`keyskills-${index}`}>{`Skill ${index + 1}`}</label>
                <input
                  type="text"
                  className="input"
                  name="keyskills"
                  placeholder="Key skill"
                  value={field.keyskills}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </div>
              <div className="input-container" style={{ width:'100%' }}>
                <label htmlFor={`rating-${index}`}>{`Rating ${index + 1}`}</label>
                <input
                  type="number"
                  className="input"
                  name="rating"
                  min="1"
                  max="5"
                  value={field.rating}
                  onChange={(e) => handleInputChange(e, index)}
                  style={{ width: '100%' }}
                />
              </div>
              <div>
                <button
                  className="button1 ms-2 mt-2"
                  onClick={() => handleDelete(index)}
                  type="button"
                >
                  <span>Delete</span>
                </button>
              </div>
            </div>
          ))}

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button
              type="button"
              className="button1 mt-2"
              onClick={handleAddMore}
            >
              <span className="text">ADD MORE</span>
            </button>
          </div>
          <hr className="m-2" />
          <div>
  <GoogleAd/>
</div>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <PopupSave handleClickNext={handleClickNext} inputFields={"Honor & Award"}/>
          </div>
        </div>
    </form>
  );
};

export default memo(KeySkills);
