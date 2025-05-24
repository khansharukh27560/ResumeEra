import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './CSS/preview104.css';
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';
import Toolbar,{changeAlignment,toggleStyle,toggleList} from '../Toolbar';
import PreviewHeader from '../PreviewHeader';
const Preview104 = () => {
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

    // Editable headings (aligned with Preview3 and extended for Preview104-specific sections)
    const [aboutMeHeading, setAboutMeHeading] = useState('AboutMe');
    const [skillsHeading, setSkillsHeading] = useState('Skill');
    const [educationHeading, setEducationHeading] = useState('Education');
    const [experienceHeading, setExperienceHeading] = useState('Volunteer Experience');
    const [interestHeading, setInterestHeading] = useState('Interest');

    const personalInfo = useSelector((state) => state.reducer.personalInfo);
    const education = useSelector((state) => [state.reducer.education?.[0] || []]);
    const keyskills = useSelector((state) => [state.reducer.keySkills?.[0] || []]);
    const work = useSelector((state) => [state.reducer.workExperience?.[0] || []]);
    const Honor = useSelector((state) => [state.reducer.honorAndaward?.[0] || []]);
    const SoftSkill = useSelector((state) => [state.reducer.addSoftSkills?.[0] || []]);
    const socialMediaLink = useSelector((state) => [state.reducer.socialMediaLink?.[0] || []]);
    const languages = useSelector((state) => [state.reducer.addLanguage?.[0] || []]);
    const Hobbies = useSelector((state) => [state.reducer.addHobies?.[0] || []]); // Corrected typo
    const project = useSelector((state) => [state.reducer.projectData?.[0] || []]);

    
    // Handle heading edits
    const handleEdit = (e, defaultValue, setter) => {
        setter(e.target.textContent.trim() || defaultValue);
    };
    
    return (
        <div style={{ padding: '15px' }}>
            <header style={{ paddingLeft: '10px', paddingRight: '10px', textAlign: 'center' }}>
    <PreviewHeader/>
            </header>
            <div style={{ width: '100%' }}>
                <GoogleAd />
            </div>
            <div className="main104 marging">
                <Toolbar toggleStyle={toggleStyle} changeAlignment={changeAlignment} toggleList={toggleList}  />
                <div
                    className="alisha104"
                    id="Alisha_mirza104"
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
                    <div className="personalinfo104">
                        <div className="imagediv104">
                            <img src={personalInfo.image} alt="hospital resume" />
                        </div>
                        <div className="namediv104">
                            <p
                                style={{
                                    color: headingColor,
                                    fontSize: `${headingSize * 1.2}px`, // Slightly larger for name
                                    fontFamily: fontStyle,
                                    lineHeight: `${lineSpacing}em`,
                                }}
                            >
                                {personalInfo.firstName}
                            </p>
                            <p
                                style={{
                                    color: headingColor,
                                    fontSize: `${headingSize * 1.2}px`, // Slightly larger for name
                                    fontFamily: fontStyle,
                                    lineHeight: `${lineSpacing}em`,
                                }}
                            >
                                {personalInfo.lastName}
                            </p>
                            <p
                                style={{
                                    color: fontColor,
                                    fontSize: `${fontSize}px`,
                                    fontFamily: fontStyle,
                                    whiteSpace: 'nowrap', // Corrected from 'none'
                                    lineHeight: `${lineSpacing}em`,
                                }}
                            >
                                {work[0][0].jobtitle}
                            </p>
                        </div>
                        <div className="contactdiv104">
                            <p
                                style={{
                                    color: fontColor,
                                    fontSize: `${fontSize}px`,
                                    fontFamily: fontStyle,
                                    lineHeight: `${lineSpacing}em`,
                                }}
                            >
                                {personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}
                                <i className="bi bi-geo-alt-fill me-2 ms-2" />
                            </p>
                            <p
                                style={{
                                    color: fontColor,
                                    fontSize: `${fontSize}px`,
                                    fontFamily: fontStyle,
                                    lineHeight: `${lineSpacing}em`,
                                }}
                            >
                                {personalInfo.mobileNumber}
                                <i className="bi bi-telephone-fill me-2 ms-2" />
                            </p>
                            <p
                                style={{
                                    wordBreak: 'break-all',
                                    color: fontColor,
                                    fontSize: `${fontSize}px`,
                                    fontFamily: fontStyle,
                                    lineHeight: `${lineSpacing}em`,
                                }}
                            >
                                {personalInfo.email}
                                <i className="bi bi-envelope me-2 ms-2" />
                            </p>
                            <p
                                style={{
                                    color: fontColor,
                                    fontSize: `${fontSize}px`,
                                    fontFamily: fontStyle,
                                    lineHeight: `${lineSpacing}em`,
                                }}
                            >
                                {socialMediaLink?.[0]?.github || 'N/A'}
                                <i className="bi bi-github ms-2" />
                            </p>
                        </div>
                    </div>
                    <div className="aboutme104">
                        <p
                            style={{
                                color: fontColor,
                                fontSize: `${fontSize}px`,
                                fontFamily: fontStyle,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                        >
                            <b
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => handleEdit(e, 'AboutMe', setAboutMeHeading)}
                                style={{
                                    color: headingColor,
                                    fontSize: `${headingSize}px`,
                                    fontFamily: fontStyle,
                                    lineHeight: `${lineSpacing}em`,
                                }}
                            >
                                {aboutMeHeading}.
                            </b>
                            {personalInfo.object}
                        </p>
                    </div>
                    <div>
                        <h5
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => handleEdit(e, 'Skill', setSkillsHeading)}
                            style={{
                                color: headingColor,
                                fontSize: `${headingSize}px`,
                                fontFamily: fontStyle,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                        >
                            {skillsHeading}
                        </h5>
                        <hr />
                    </div>
                    <div className="skill-section104 mt-3">
                        <div className="inner-104-1 me-4">
                            {keyskills[0].map((keys, index) => (
                                <div key={index} className="technical-skill-item104 d-flex justify-content-between">
                                    <p
                                        style={{
                                            color: fontColor,
                                            fontSize: `${fontSize}px`,
                                            fontFamily: fontStyle,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        {keys.keyskills}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="row inner-104-1">
                            {languages[0].map((keys, index) => (
                                <div key={index} className="col-6 ms-2 d-flex justify-content-between me-5">
                                    <div>
                                        <p
                                            style={{
                                                color: fontColor,
                                                fontSize: `${fontSize}px`,
                                                fontFamily: fontStyle,
                                                lineHeight: `${lineSpacing}em`,
                                            }}
                                        >
                                            {keys.language}
                                        </p>
                                    </div>
                                    <div className="star-rating ms-3 w-50 d-flex">
                                        {[...Array(5)].map((_, i) => (
                                            <i
                                                key={i}
                                                className={`bi bi-star${i < keys.rating ? '-fill' : ''}`}
                                                style={{ color: i < keys.rating ? '#ffc150' : 'grey' }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="row inner-104-1">
                            {SoftSkill[0].map((soft, index) => (
                                <div key={index} className="col-4 ms-2">
                                    <p
                                        style={{
                                            color: fontColor,
                                            fontSize: `${fontSize}px`,
                                            fontFamily: fontStyle,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        {soft.softSkill}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h5
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => handleEdit(e, 'Education', setEducationHeading)}
                            style={{
                                color: headingColor,
                                fontSize: `${headingSize}px`,
                                fontFamily: fontStyle,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                            className="details-title104"
                        >
                            {educationHeading}
                        </h5>
                        <hr />
                    </div>
                    <div className="education-section104">
                        {education[0].map((edu, index) => (
                            <div key={index} className="education-item101 ms-4" style={{ marginBottom: `${sectionSpacing}px` }}>
                                <div className="education-degree104">
                                    <p
                                        className="education-duration104"
                                        style={{
                                            color: fontColor,
                                            fontSize: `${fontSize}px`,
                                            fontFamily: fontStyle,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        {edu.startYear} - {edu.endYear}
                                    </p>
                                    <p
                                        style={{
                                            color: fontColor,
                                            fontSize: `${fontSize}px`,
                                            fontFamily: fontStyle,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        {edu.univercity}, {edu.city}
                                    </p>
                                </div>
                                <div className="education-details104">
                                    <p
                                        style={{
                                            color: fontColor,
                                            fontSize: `${fontSize}px`,
                                            fontFamily: fontStyle,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        {edu.degree}
                                    </p>
                                    <p
                                        style={{
                                            color: fontColor,
                                            fontSize: `${fontSize}px`,
                                            fontFamily: fontStyle,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        {edu.univercity}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="experience-section104 mt-4">
                        <h5
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => handleEdit(e, 'Volunteer Experience', setExperienceHeading)}
                            style={{
                                color: headingColor,
                                fontSize: `${headingSize}px`,
                                fontFamily: fontStyle,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                            className="details-title104"
                        >
                            {experienceHeading}
                        </h5>
                        <hr />
                        {work[0].map((works, index) => (
                            <div key={index} className="employment-history101 ms-4 d-flex justify-content-between" style={{ marginBottom: `${sectionSpacing}px` }}>
                                <div className="exp-inner104">
                                    <p
                                        className="employment-duration104"
                                        style={{
                                            color: fontColor,
                                            fontSize: `${fontSize}px`,
                                            fontFamily: fontStyle,
                                            whiteSpace: 'nowrap', // Corrected from 'none'
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        {works.startYear} - {works.endYear}
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style={{
                                            color: fontColor,
                                            fontSize: `${fontSize}px`,
                                            fontFamily: fontStyle,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                        className="employment-detail104"
                                    >
                                        <b>{works.organization}</b>
                                        <br />
                                        {works.jobtitle}
                                    </p>
                                    <p
                                        className="aboutexperience104"
                                        style={{
                                            color: fontColor,
                                            fontSize: `${fontSize}px`,
                                            fontFamily: fontStyle,
                                            lineHeight: `${lineSpacing}em`,
                                        }}
                                    >
                                        {works.aboutexperience}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="experience-section104">
                        {Hobbies && Hobbies.length > 0 && (
                            <>
                                <h5
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Interest', setInterestHeading)}
                                    style={{
                                        color: headingColor,
                                        fontSize: `${headingSize}px`,
                                        fontFamily: fontStyle,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                    className="details-title101"
                                >
                                    {interestHeading}
                                </h5>
                                <hr />
                                {Hobbies[0].map((works, index) => (
                                    <div key={index} className="employment-history104 ms-4" style={{ marginBottom: `${sectionSpacing}px` }}>
                                        <p
                                            style={{
                                                color: fontColor,
                                                fontSize: `${fontSize}px`,
                                                fontFamily: fontStyle,
                                                lineHeight: `${lineSpacing}em`,
                                            }}
                                            className="employment-duration101"
                                        >
                                            {works.hobbies}
                                        </p>
                                    </div>
                                ))}
                            </>
                        )}
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
                    elementId="Alisha_mirza104"
                />
            </div>
            <div style={{ width: '100%' }}>
                <GoogleAd />
            </div>
        </div>
    );
};

export default Preview104;