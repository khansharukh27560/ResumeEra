import { useDispatch, useSelector} from "react-redux";
import { addSoftSkills } from "../Redux/action";
import { useState, useEffect ,memo} from "react";
import GoogleAd from "./adFolder/GoogleAd";
import PopupSave from "./PopupSave";

const SoftSkills = () => {
  const [input, setInput] = useState(() => {
    const savedSoftSkills = localStorage.getItem("softSkillsData");
    return savedSoftSkills ? JSON.parse(savedSoftSkills) : [{ softSkill: "" }];
  });
  const dispatch = useDispatch();

  useEffect(() => {
    // Save soft skills to local storage whenever it changes
    localStorage.setItem("softSkillsData", JSON.stringify(input));
  }, [input]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSoftSkills(input));
  };

  const handleAddMore = () => {
    setInput((prev) => [...prev, { softSkill: "" }]);
  };


  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
     
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
            <h1 className="multicolor-heading">Soft Skills You Possess</h1>
            <p>
              Including soft skills in a resume is crucial as they demonstrate
              your ability to work well with others and adapt to various
              situations. Soft skills such as communication, teamwork, problem-solving,
              and leadership are highly valued by employers because they
              contribute to a positive and productive workplace. Highlighting
              these skills can make you stand out as a candidate who is not only
              technically proficient but also capable of thriving in a team
              environment and contributing to the company culture.
            </p>
          </div>
          <hr className="mb-3" />
          {input.map((inp, index) => (
            <div key={index} className="d-flex justify-content-centera mt-2">
            <div className="input-container">
            <label htmlFor="softSkill">Soft Skill</label>
              <input
              title='Soft Skill'
                type="text"
                className="input"
                name="softSkill"
                value={inp.softSkill}
                onChange={(e) => handleChange(e, index)}
                placeholder="Soft Skill"
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
            <button className="button1" type="button" onClick={handleAddMore}>
              <span className="text">ADD MORE</span>
            </button>
          </div>
          <div>
  <GoogleAd/>
</div>
          <div className="d-flex justify-content-around">
           <PopupSave handleClickNext={handleClick} inputFields={'Social Media'}/>
          </div>
        </div>
     
      
    </form>
  );
};

export default memo(SoftSkills);
