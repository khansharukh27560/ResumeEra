import { useState, useEffect, memo } from "react";
import { useDispatch } from "react-redux";
import { educationData } from "../Redux/action";
import GoogleAd from "./adFolder/GoogleAd";
import PopupSave from "./PopupSave";
const Education = () => {
  const [education, setEducation] = useState(() => {
    const savedEducation = localStorage.getItem("educationData");
    return savedEducation ? JSON.parse(savedEducation) : [{
      type: "",
      university: "",
      degree: "",
      startYear: "",
      endYear: "",
    }];
  });
  const dispatch = useDispatch();
  useEffect(() => {
    // window.scrollTo(0, 0);
    localStorage.setItem("educationData", JSON.stringify(education));
  }, [education]);


  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setEducation(prev => {
      const updatedEducation = [...prev];
      updatedEducation[index] = {
        ...updatedEducation[index],
        [name]: value.toUpperCase(),
      };
      return updatedEducation;
    });
  };
  const validateFields = () => {
    const emptyFields = education.some(edu =>
      !edu.type || !edu.university || !edu.degree || !edu.startYear || !edu.endYear
    );

    if (emptyFields) {
      alert(`Please fill in ${education.name}  fields`);
      return false; // Prevent proceeding if there are empty fields
    }
    return true; // Proceed if all fields are filled
  };
  
  const handleClickNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (validateFields()) {
      dispatch(educationData(education));
     
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (validateFields()) {
      dispatch(educationData(education));
    }
  };
  const handleAddMore = () => {
    setEducation(prev => [
      ...prev,
      { type: "", university: "", degree: "", startYear: "", endYear: "" },
    ]);
  };
  const handleDelete = (index) => {
    setEducation(prev => prev.filter((_, i) => i !== index));
  };
  return (
    <form onSubmit={handleSubmit}>
        <div style={{ backgroundColor: 'white' }}>
          <div className="professional-detail">
            <h1 className="multicolor-heading">Your Education Detail</h1>
            <p>
              Including education details in a resume is essential because it
              highlights your academic background and qualifications. This
              section helps employers understand the formal training or
              knowledge you've acquired in a specific field, which may be
              relevant to the job role you're applying for. It showcases your
              skills, expertise, and potential, making you stand out from other
              candidates. For recent graduates, education details are a key way
              to demonstrate their achievements, especially when professional
              experience is limited. Therefore, including education details in
              your resume strengthens your overall profile and enhances your
              credibility in the eyes of hiring managers.
            </p>
          </div>
          {education.map((edu, index) => (
            <div key={index}>
              <h1 style={{ color: "white", textAlign: "center" }}>
                Education {index + 1}
              </h1>
              <hr className="m-3" style={{ width: 'inherit' }} />
              <div className="one" style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
              <div className="input-container">
              <label htmlFor="Education Type" style={{left:'40%'}}>Education Type</label>
                <input
                title='Education Type'
                  list='education'
                  placeholder='education type'
                  className="input"
                  style={{ color: "black" }}
                  onChange={(e) => handleChange(e, index)}
                  name="type"
                  value={edu.type || ''}
                />
                <datalist id="education">
                  <option value="10th" />
                  <option value="12th" />
                  <option value="GRADUATION" />
                  <option value="POST GRADUATION" />
                  <option value="OTHER" />
                </datalist>
                </div>
              </div>
              <div className="d-sm-flex justify-content-around one">
              <div className="input-container">
              <label htmlFor="Univercity">Univercity</label>
                <input
                title='Univercity'
                  className="input m-2"
                  onChange={(e) => handleChange(e, index)}
                  type="text"
                  placeholder="University"
                  name="university"
                  value={edu.university}
                />
                </div>
                <div className="input-container">
                <label htmlFor="Degree">Degree</label>
                <input
                  className="input m-2"
                  onChange={(e) => handleChange(e, index)}
                  type="text"
                  title='Degree'
                  placeholder="Degree"
                  name="degree"
                  value={edu.degree}
                />
                </div>
              </div>
              <div className="d-sm-flex justify-content-around one">
              <div className="input-container">
              <label htmlFor="start Year">Start Year</label>
                <input
                title='Start Year'
                  className="input m-2"
                  onChange={(e) => handleChange(e, index)}
                  type="date"
                  placeholder="Start Year"
                  name="startYear"
                  value={edu.startYear}
                />
                </div>
                <div className="input-container">
                <label htmlFor="End Year">End Year</label>
                <input
                title='End Year'
                  className="input m-2"
                  onChange={(e) => handleChange(e, index)}
                  type="date"
                  placeholder="End Year"
                  name="endYear"
                  value={edu.endYear}
                />
                </div>
              </div>
              <div className="d-flex justify-content-between one">
                <button
                  className="button1 m-2"
                  type="button"
                  onClick={() => handleDelete(index)}
                >
                  <span className="text">Delete</span>
                </button>
              </div>
            </div>
          ))}
          <hr style={{ width: 'inherit' }} />
          <div className="d-flex justify-content-center m-2">
            <button className="button1" type="button" onClick={handleAddMore}>
              <span className="text">ADD MORE</span>
            </button>
          </div>
          <GoogleAd />
          <div>
            <PopupSave handleClickNext={handleClickNext} inputFields={'Soft Skill'}/>
          </div>
        </div>
     
    </form>
  );
};
export default memo(Education);
