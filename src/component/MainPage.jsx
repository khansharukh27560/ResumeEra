import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";
import Certificate from "./Certificate";
import Education from "./Education";
import Hobbies from "./Hobbies";
import HonorAndAward from "./HonorAndAward";
import KeySkills from "./KeySkill";
import Language from "./Language";
import Project from "./Project";
import References from "./Refrences";
import SocialMedia from "./SocialMedia";
import SoftSkill from "./SoftSkills";
import WorkExperience from "./WorkExperience";
import '../css/mainpage.css';
import { useSelector } from "react-redux";



const sectionComponents = {
  personalInfo: PersonalInfo,
  workExperience: WorkExperience,
  education: Education,
  softSkill: SoftSkill,
  socialMedia: SocialMedia,
  references: References,
  project: Project,
  language: Language,
  skills: KeySkills,
  honorAward: HonorAndAward,
  hobbies: Hobbies,
  certificates: Certificate,
};

const sectionLabels = [
  { key: "personalInfo", label: "Personal Information" },
  { key: "workExperience", label: "Work Experience" },
  { key: "education", label: "Education" },
  { key: "softSkill", label: "Soft Skill" },
  { key: "socialMedia", label: "Social Media" },
  { key: "references", label: "References" },
  { key: "project", label: "Project" },
  { key: "language", label: "Language" },
  { key: "skills", label: "Skills" },
  { key: "honorAward", label: "Honor And Award" },
  { key: "hobbies", label: "Hobbies" },
  { key: "certificates", label: "Certificates" },
];



const MainPage = () => {
  const [selectedSection, setSelectedSection] = useState("personalInfo");
  const SelectedComponent = sectionComponents[selectedSection];
  const result = useSelector((state)=>state.reducer.templatePage[0])
  // console.log('result in mainpage:-',result)
  const navigate = useNavigate();
    const handleClickToPreview = () =>{
    const path = `/preview${result}`
    navigate(path)
  }


  return (
    <div className="mainpage" style={{  }}>
      <div className="sidebar" style={{ }}>
        {sectionLabels.map((section) => (
          <div
            key={section.key}
            className={`sidebar-item ${selectedSection === section.key ? "active" : ""}`}
            onClick={() => setSelectedSection(section.key)}
            style={{
              padding: "12px 24px",
              cursor: "pointer",
              background: selectedSection === section.key ? "#e0e0e0" : "transparent",
              fontWeight: selectedSection === section.key ? "bold" : "normal",
            }}
          >
            <small>{section.label}</small>
          </div>
        ))}
      </div>
      <div className="main-content" style={{ flex: 1, padding: "30px",width:'95%' }}>
        {SelectedComponent && <SelectedComponent />}
        <button type="submit" onClick={handleClickToPreview} className="button1">
            <span className="text">Show Preview</span>
        </button>
      </div>
    </div>
  );
};
export default MainPage;
