import { useDispatch } from "react-redux";
import { addReferences } from "../Redux/action";
import React, { useState, useEffect } from "react";
import PopupSave from "./PopupSave";
// import SomeOtherComponent from "./SomeOtherComponent"; // replace with the actual component to show on Next

const References = () => {
  const [input, setInput] = useState(() => {
    // Load references from local storage if available
    const savedReferences = localStorage.getItem("referencesData");
    return savedReferences ? JSON.parse(savedReferences) : [{ name: "", contact: "",email:"",position:"" }];
  });
 
  const dispatch = useDispatch();

  useEffect(() => {
    // Save references to local storage whenever it changes
    localStorage.setItem("referencesData", JSON.stringify(input));
  }, [input]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addReferences(input));
  };

  const handleAddMore = () => {
    setInput((prev) => [...prev, { name: "", contact: "" }]);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setInput((prev) => {
      const updateInput = [...prev];
      updateInput[index] = {
        ...updateInput[index],
        [name]: value,
      };
      return updateInput;
    });
  };

  const handleDelete = (index) => {
    setInput((prev) => prev.filter((_, i) => i !== index));
  };

  const handleNext = (e) => {
    e.preventDefault()
        e.stopPropagation();
    dispatch(addReferences(input));
  };

 
  return (
    <form onSubmit={handleSubmit}>
     
        <div style={{width:'100%'}}>
          <div className="profetional-detail">
            <h1 className="multicolor-heading">References</h1>
            <p>
              Including references in your resume can add credibility to your
              application, showing that you have the backing of people who can
              vouch for your skills and work ethic. References provide potential
              employers with trusted, first-hand accounts of your abilities and
              character.
            </p>
          </div>
          <hr className="mb-3" />
          {input.map((inp, index) => (
            <div key={index} className="d-sm-flex justify-content-center">
              <div className="input-container">
              <label htmlFor="Reference Name">Reference Name</label>
                <input
                type="text"
                title="Reference Name"
                className="input"
                name="name"
                value={inp.name}
                onChange={(e) => handleChange(e, index)}
                placeholder="Reference Name"
                style={{ width: "100%", borderRadius: "5px" }}
              />
              </div>
              <div className="input-container">
              <label htmlFor="Position">Position</label>
              <input
                type="text"
                title="Reference Contact"
                className="input ms-2"
                name="position"
                value={inp.position}
                onChange={(e) => handleChange(e, index)}
                placeholder="Position Info"
                style={{ width: "100%", borderRadius: "5px" }}
              />
              </div>
              <div className="input-container">
                <label htmlFor="Email">Reference Person Email</label>
                <input
                type="text"
                title="Reference Email"
                className="input ms-2 mt-2"
                name="email"
                value={inp.email}
                onChange={(e) => handleChange(e, index)}
                placeholder=" Email"
                style={{ width: "100%", borderRadius: "5px" }}
              />
              </div>
              <button
                className="button1 ms-2 mt-2"
                onClick={() => handleDelete(index)}
                type="button"
              >
                <span>Delete</span>
              </button>
            </div>
          ))}
          <div className="d-flex justify-content-around mt-2">
            <button className="button1" type="button" onClick={handleAddMore}>
              <span className="text">ADD MORE</span>
            </button>
          </div>
          <div className="d-flex justify-content-around">
           <PopupSave handleClickNext={handleNext} inputFields={'Project'}/>
          </div>
        </div>
    
    </form>
  );
};

export default React.memo(References);
