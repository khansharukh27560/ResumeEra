import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './CSS/preview103.css';
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';
import Toolbar,{changeAlignment,toggleStyle,toggleList} from '../Toolbar';
import PreviewHeader from '../PreviewHeader';
const Preview103 = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');
    const [bgColor, setBgColor] = useState('white'); // Default background color
    const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
    const [fontColor, setFontColor] = useState('#000000'); // Default font color (corrected from '#rrggbb')
    const [headingColor, setHeadingColor] = useState('#6a8a3f'); // Default heading color
    const [fontSize, setFontSize] = useState(16); // Font size for paragraphs
    const [headingSize, setHeadingSize] = useState(20); // Font size for headings (replaced fontSizeheading)
    const [margin, setMargin] = useState(10); // Margin for resume wrapper
    const [padding, setPadding] = useState(10); // Padding for sections
    const [lineSpacing, setLineSpacing] = useState(1.2); // Line spacing for text
    const [sectionSpacing, setSectionSpacing] = useState(15); // Spacing between sections

    // Editable headings (aligned with Preview3 and extended for Preview103-specific sections)
    const [profileSummaryHeading, setProfileSummaryHeading] = useState('Profile Summary');
    const [educationHeading, setEducationHeading] = useState('Education');
    const [experienceHeading, setExperienceHeading] = useState('Profection Experience'); // Corrected typo from original
    const [technicalSkillsHeading, setTechnicalSkillsHeading] = useState('Technical Skill');
    const [honorAwardHeading, setHonorAwardHeading] = useState('Honor & Award');

    const personalInfo = useSelector((state) => state.reducer.personalInfo || {});
    const education = useSelector((state) => [state.reducer.education?.[0] || []]);
    const keyskills = useSelector((state) => [state.reducer.keySkills?.[0] || []]);
    const work = useSelector((state) => [state.reducer.workExperience?.[0] || []]);
    const Honor = useSelector((state) => [state.reducer.honorAndaward?.[0] || []]);
    const SoftSkill = useSelector((state) => [state.reducer.addSoftSkills?.[0] || []]);
    const socialMediaLink = useSelector((state) => [state.reducer.socialMediaLink?.[0] || []]);
    const languages = useSelector((state) => [state.reducer.addLanguage?.[0] || []]);
    const Hobbies = useSelector((state) => [state.reducer.addHobies?.[0] || []]);
    const project = useSelector((state) => [state.reducer.projectData?.[0] || []]);

    
    // Handle heading edits
    const handleEdit = (e, defaultValue, setter) => {
        setter(e.target.textContent.trim() || defaultValue);
    };

    return (
        <div>
            <header style={{ paddingLeft: '10px', paddingRight: '10px', textAlign: 'center' }}>
<PreviewHeader/>
            </header>
            <GoogleAd />
            <div className="personal-info-section103 marging">
                <Toolbar toggleStyle={toggleStyle} changeAlignment={changeAlignment} toggleList={toggleList}  />
                <div
                    className="main103 mt-4 me-md-5 ms-md-1"
                    id="Alisha_mirza103"
                    style={{
                        backgroundColor: bgColor,
                        color: fontColor,
                        fontFamily: fontStyle,
                        margin: `${margin}px`,
                        padding: `${padding}px`,
                    }}
                    contentEditable
                    suppressContentEditableWarning
                >
                    <div className="personal-header">
                        <h3
                            className="personal-name"
                            style={{
                                color: headingColor,
                                fontFamily: fontStyle,
                                fontSize: `${headingSize * 1.2}px`, // Slightly larger for name
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                        >
                            {personalInfo.firstName} {personalInfo.lastName}
                        </h3>
                        <p
                            style={{
                                color: fontColor,
                                fontFamily: fontStyle,
                                fontSize: `${fontSize}px`,
                                lineHeight: `${lineSpacing}em`,
                            }}
                            className="personal-details"
                        >
                            {personalInfo.city} {personalInfo.state} <b>.</b> {personalInfo.email} <b>.</b>{' '}
                            {personalInfo.mobileNumber}
                        </p>
                    </div>
                    <div className="profile-summary-section">
                        <h5
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => handleEdit(e, 'Profile Summary', setProfileSummaryHeading)}
                            style={{
                                color: headingColor,
                                fontFamily: fontStyle,
                                fontSize: `${headingSize}px`,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                            className="profile-summary-title"
                        >
                            {profileSummaryHeading}
                        </h5>
                        <hr className="profile-summary-hr" />
                        <p
                            style={{
                                color: fontColor,
                                fontFamily: fontStyle,
                                fontSize: `${fontSize}px`,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                            className="profile-summary-content"
                        >
                            {personalInfo.object}
                        </p>
                    </div>
                    <div className="education-section">
                        <h5
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => handleEdit(e, 'Education', setEducationHeading)}
                            style={{
                                color: headingColor,
                                fontFamily: fontStyle,
                                fontSize: `${headingSize}px`,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                            className="details-title103"
                        >
                            {educationHeading}
                        </h5>
                        <hr className="education-hr" />
                        {education[0].map((edu, index) => (
                            <div key={index} className="education-item103" style={{ marginBottom: `${sectionSpacing}px` }}>
                                <div className="education-degree103">
                                    <span
                                        style={{
                                            color: fontColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        {edu.degree}
                                    </span>
                                    <span
                                        style={{
                                            color: fontColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                        className="education-duration103"
                                    >
                                        {edu.startYear} - {edu.endYear}
                                    </span>
                                </div>
                                <div className="education-details">
                                    <span
                                        style={{
                                            color: fontColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        <b>{edu.univercity}</b>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="experience-section">
                        <h5
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => handleEdit(e, 'Profection Experience', setExperienceHeading)}
                            style={{
                                color: headingColor,
                                fontFamily: fontStyle,
                                fontSize: `${headingSize}px`,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                            className="details-title103"
                        >
                            {experienceHeading}
                        </h5>
                        <hr className="experience-hr" />
                        {work[0].map((works, index) => (
                            <div key={index} className="employment-history103" style={{ marginBottom: `${sectionSpacing}px` }}>
                                <div className="exp-inner103">
                                    <p
                                        className="employment-detail103"
                                        style={{
                                            color: fontColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        <b>{works.organization}</b> -- {works.jobtitle}
                                    </p>
                                    <p
                                        style={{
                                            color: fontColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                        className="employment-duration103"
                                    >
                                        {works.startYear} - {works.endYear}
                                    </p>
                                </div>
                                <p
                                    style={{
                                        color: fontColor,
                                        fontFamily: fontStyle,
                                        fontSize: `${fontSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                    }}
                                    className="aboutexperience103"
                                >
                                    {works.aboutexperience}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="skill-section103">
                        <h5
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => handleEdit(e, 'Technical Skill', setTechnicalSkillsHeading)}
                            style={{
                                color: headingColor,
                                fontFamily: fontStyle,
                                fontSize: `${headingSize}px`,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                            className="technical-skills-title"
                        >
                            {technicalSkillsHeading}
                        </h5>
                        <hr className="technical-skills-hr" />
                        {keyskills[0].map((keys, index) => (
                            <div key={index} className="technical-skill-item d-flex">
                                <p
                                    style={{
                                        color: fontColor,
                                        fontFamily: fontStyle,
                                        fontSize: `${fontSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                    }}
                                >
                                    {keys.keyskills}|
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="honor-award-section">
                        
                        <hr className="honor-hr" />
                        {Honor[0].map((hobb, index) => (
                            <div key={index} className="honor-item" style={{ marginBottom: `${sectionSpacing}px` }}>
                                <h5
                            
                            style={{
                                color: headingColor,
                                fontFamily: fontStyle,
                                fontSize: `${headingSize}px`,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                            className="honor-title"
                        >
                            {honorAwardHeading}
                        </h5>
                                <div className="honor-info">
                                    <p
                                        style={{
                                            color: fontColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        <b>{hobb.title}</b>
                                    </p>
                                    <p
                                        style={{
                                            color: fontColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        <b>{hobb.year}</b>
                                    </p>
                                </div>
                                <div className="honor-organization">
                                    <p
                                        style={{
                                            color: fontColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        <b>{hobb.organization}</b>
                                    </p>
                                    <p
                                        style={{
                                            color: fontColor,
                                            fontFamily: fontStyle,
                                            fontSize: `${fontSize}px`,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        <b>{hobb.description}</b>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <PdfDownloadButton
                    inputFields={inputFields}
                    setInputFields={setInputFields}
                    bgColor={bgColor}
                    setBgColor={setBgColor}
                    fontStyle={fontStyle}
                    setFontStyle={setFontStyle}
                    headingColor={headingColor}
                    setHeadingColor={setHeadingColor}
                    fontColor={fontColor}
                    setFontColor={setFontColor}
                    fontSize={fontSize}
                    setFontSize={setFontSize}
                    headingSize={headingSize}
                    setHeadingSize={setHeadingSize}
                    margin={margin}
                    setMargin={setMargin}
                    padding={padding}
                    setPadding={setPadding}
                    lineSpacing={lineSpacing}
                    setLineSpacing={setLineSpacing}
                    sectionSpacing={sectionSpacing}
                    setSectionSpacing={setSectionSpacing}
                    elementId="Alisha_mirza103"
                />
            </div>
            <div style={{ width: '100%' }}>
                <GoogleAd />
            </div>
        </div>
    );
};

export default Preview103;