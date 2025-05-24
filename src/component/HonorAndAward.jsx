import { useState, useEffect, memo } from "react";
import { useDispatch } from "react-redux";
import { honorAndAwardData } from "../Redux/action";

import GoogleAd from "./adFolder/GoogleAd";
import PopupSave from "./PopupSave";

const HonorAndAward = () => {
  const dispatch = useDispatch();

  
  const [honorsAndAwards, setHonorsAndAwards] = useState(() => {
    const savedHonorsAndAwards = localStorage.getItem("honorsAndAwards");
    return savedHonorsAndAwards
      ? JSON.parse(savedHonorsAndAwards)
      : [{ title: '', organization: '', year: '', description: '' }];
  });

  useEffect(() => {
    localStorage.setItem("honorsAndAwards", JSON.stringify(honorsAndAwards));
  }, [honorsAndAwards]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setHonorsAndAwards((prev) => {
      const updatedAwards = [...prev];
      updatedAwards[index] = {
        ...updatedAwards[index],
        [name]: value.toUpperCase()
      };
      return updatedAwards;
    });
  };

  const handleAddMore = () => {
    setHonorsAndAwards([...honorsAndAwards, { title: '', organization: '', year: '', description: '' }]);
  };

  const handleDelete = (index) => {
    setHonorsAndAwards((prev) => prev.filter((_, i) => i !== index));
  };

 
  const handleClickNext = (e) => {
    e.preventDefault();

    // Check for empty fields
    dispatch(honorAndAwardData(honorsAndAwards));
  };

  return (
    <form>
     
        <div>
          <div className="profetional-detail">
            <h1 className="multicolor-heading">Your Honors & Awards</h1>
            <p>
              Listing honors and awards in a resume highlights your achievements, 
              sets you apart from other candidates, and showcases recognition of your hard work and expertise.
            </p>
          </div>
          {honorsAndAwards.map((award, index) => (
            <div key={index}>
              <h1 style={{ color: 'white', textAlign: 'center' }}>Award {index + 1}</h1>
              <hr />
              <div className="d-sm-flex one">
              <div className="input-container">
              <label htmlFor="Title of the Award">Title of The Award</label>
                <input
                  className="input mb-2"
                  onChange={(e) => handleChange(e, index)}
                  type="text"
                  placeholder="Title"
                  name="title"
                  title='Title of the award'
                  value={award.title}
                />
              </div>
              <div className="input-container">
                <label htmlFor="Organization">Organization</label>
                <input
                  className="input mb-2"
                  onChange={(e) => handleChange(e, index)}
                  type="text"
                  placeholder="Organization"
                  title="organization"
                  name="organization"
                  value={award.organization}
                />
                </div>
              </div>
              <div className="d-sm-flex one">
              <div className="input-container">
              <label htmlFor="Year">Year</label>
                <input
                  type="text"
                  className="input mb-2"
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Year"
                  title="year"
                  name="year"
                  value={award.year}
                />
                </div>
              </div>
              <div className="second">
              <div className="input-container">
              <label htmlFor="Decscription">Description of the Award</label>
                <textarea
                  className="textarea mb-2"
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Description"
                  name="description"
                  title="description"
                  cols="200"
                  rows="5"
                  value={award.description}
                />
                </div>
              </div>
              <div className="d-flex justify-content-center m-2">
                <button
                  className="button1"
                  type="button"
                  onClick={() => handleDelete(index)}
                >
                  <span className="text">DELETE</span>
                </button>
              </div>
              <hr className="m-2" />
            </div>
          ))}
          <div className="d-flex justify-content-center m-2">
            <button className="button1" type="button" onClick={handleAddMore}>
              <span className="text">ADD MORE</span>
            </button>
          </div>
          <div>
            <GoogleAd />
          </div>
          <div className="d-flex justify-content-around">
            <PopupSave handleClickNext={handleClickNext} inputFields={"Hobbies"}/>
          </div>
        </div>
     
    </form>
  );
};

export default memo(HonorAndAward);
