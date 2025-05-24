import { memo, useEffect, useState } from "react";
import HonorAndAward from "./HonorAndAward";
import KeySkills from "./KeySkill";
// import { set } from "prerender-node";
import { useDispatch } from "react-redux";
import { ProjectData } from "../Redux/action";
import PopupSave from "./PopupSave";

const Project = () => {
    
    const [projects, setProjects] = useState([
        { link: "", startTime: "", endTime: "", description: "" },
    ]);
    const dispatch = useDispatch()
    // Handle input changes
    const handleInputChange = (index, field, value) => {
        const updatedProjects = [...projects];
        updatedProjects[index][field] = value.toUpperCase();
        setProjects(updatedProjects);
    };

    // Add more project input fields
    const handleAddMore = () => {
        setProjects([...projects, { link: "", startTime: "", endTime: "", description: "" }]);
    };
useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("projects"));
    if (savedData) {
      setProjects(savedData);
    }
  }, []);
    // Delete the last set of input fields
    const handleDelete = () => {
        if (projects.length > 1) {
            setProjects(projects.slice(0, -1));
        }
    };

    // Save data to local storage on Next
    const handleOnNext = (e) => {
        e.preventDefault()
        localStorage.setItem("projects", JSON.stringify(projects));
        dispatch(ProjectData(projects))

    };

    // Placeholder for Back button functionality
    
    return (
        <div>
           
                <div>
            {projects.map((project, index) => (
                <div key={index}  className='d-md-flex' style={{  justifyContent: 'center', alignItems: 'center' }}>
                    <div className="input-container">
                        <label htmlFor="Project Link">Project Link</label>
                        <input
                        type="text"
                        title='Project Link'
                        className="input me-2 mt-2"
                        placeholder="Project link"
                        value={project.link}
                        onChange={(e) => handleInputChange(index, "link", e.target.value)}
                    />
                    </div>
                    <div className="input-container">
                        <label htmlFor="Start Time">Start Time</label>
                        <input
                        type="text"
                        title='Start Time'
                        className="input me-2 mt-2"
                        placeholder="Start time"
                        value={project.startTime}
                        onChange={(e) => handleInputChange(index, "startTime", e.target.value)}
                    />
                        </div>
                    <div className="input-container">
                        <label htmlFor="End Time">End Time</label>
                        <input
                        type="text"
                        title="End time"
                        className="input me-2 mt-2"
                        placeholder="End time"
                        value={project.endTime}
                        onChange={(e) => handleInputChange(index, "endTime", e.target.value)}/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="Description">Description</label>
                    <textarea
                        placeholder="Description"
                        title="Description"
                        className="input me-2 mt-2"
                        value={project.description}
                        onChange={(e) => handleInputChange(index, "description", e.target.value)}
                    />
                    </div>
                   
                </div>
            ))}
            <div className="d-flex justify-content-between">
                <button className="button1 ms-2 mt-2" onClick={handleAddMore}><span className="text">Add More</span></button>
                <button className="button1 ms-2 mt-2" onClick={handleDelete}><span className="text">Delete</span></button>
            </div>
            <div className="d-flex justify-content-between">
                <PopupSave handleClickNext={handleOnNext} />
            </div>
            </div>
    
        </div >
    );
};

export default memo(Project);
