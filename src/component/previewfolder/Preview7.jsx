import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../previewfolder/CSS/preview7.css';
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';
import Toolbar,{changeAlignment,toggleStyle,toggleList} from '../Toolbar';
import PreviewHeader from '../PreviewHeader';

const Preview7 = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');
    const [bgColor, setBgColor] = useState('#F5DEB3'); // Default background color (wheat)
    const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
    const [fontColor, setFontColor] = useState('black'); // Default font color
    const [headingColor, setHeadingColor] = useState('black'); // Default heading color
    const [fontSize, setFontSize] = useState(16); // Font size for paragraphs
    const [headingSize, setHeadingSize] = useState(20); // Font size for headings (replaced fontSizeheading)
    const [margin, setMargin] = useState(10); // Margin for resume wrapper
    const [padding, setPadding] = useState(10); // Padding for sections
    const [lineSpacing, setLineSpacing] = useState(1.2); // Line spacing for text
    const [sectionSpacing, setSectionSpacing] = useState(15); // Spacing between sections

    // Editable headings (aligned with Preview3)
    const [contactHeading, setContactHeading] = useState('Contact');
    const [educationHeading, setEducationHeading] = useState('Education');
    const [skillsHeading, setSkillsHeading] = useState('Skills');
    const [languageHeading, setLanguageHeading] = useState('Language');
    const [objectHeading, setObjectHeading] = useState('Object');
    const [experienceHeading, setExperienceHeading] = useState('Experience');
    const [hobbiesHeading, setHobbiesHeading] = useState('Hobbies');
    const [aboutHeading, setAboutHeading] = useState('About Me'); // Added for Preview7-specific section

    const navigate = useNavigate();
    const personalInfo = useSelector((state) => state.reducer.personalInfo);
    const education = useSelector((state) => [state.reducer.education[0]]);
    const keyskills = useSelector((state) => [state.reducer.keySkills[0]]);
    const work = useSelector((state) => [state.reducer.workExperience[0]]);
    const LLanguage = useSelector((state) => [state.reducer.addLanguage[0]]);
    const Hobbies = useSelector((state) => [state.reducer.addHobies[0]]); // Corrected typo

  
    const handleEdit = (e, defaultValue, setter) => {
        setter(e.target.textContent.trim() || defaultValue);
    };
  
    return (
        <div>
            <header style={{ paddingLeft: '10px', paddingRight: '10px', textAlign: 'center' }}>
                <PreviewHeader/>
            </header>
            <div style={{ width: 'inherit' }}><GoogleAd /></div>
            <div className="preview-main7 d-dm-flex marging" style={{flexDirection:'column'}}>
                <Toolbar toggleStyle={toggleStyle} changeAlignment={changeAlignment} toggleList={toggleList}  />
                <div
                    className="resume-previeww7"
                    style={{
                        color: fontColor,
                        backgroundColor: bgColor,
                        fontFamily: fontStyle,
                        margin: `${margin}px`,
                        padding: `${padding}px`,
                    }}
                    id="Alish_mirza1"
                    contentEditable
                    suppressContentEditableWarning
                >
                    <div className="name-div7">
                        <h3
                            className="pt-5"
                            style={{
                                color: headingColor,
                                fontSize: `${headingSize * 1.2}px`, // Slightly larger for name
                                lineHeight: `${lineSpacing}em`,
                                fontWeight: 700,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                        >
                            {personalInfo.firstName} {personalInfo.lastName}
                        </h3>
                        <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, color: fontColor }}>
                            {work[0][0].jobtitle}
                        </p>
                    </div>

                    <div className="d-flex justify-content-between contact-div7">
                        <div className="text-end">
                            <div className="contact-div7">
                                <h5
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Contact', setContactHeading)}
                                    style={{
                                        color: headingColor,
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                    className="heading7"
                                >
                                    {contactHeading}
                                </h5>
                                <hr />
                                <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, color: fontColor }}>
                                    <i className="bi bi-telephone-fill me-2"></i>{personalInfo.mobileNumber}
                                </p>
                                <p style={{ fontSize: `${fontSize}px`, wordBreak: 'break-all', lineHeight: `${lineSpacing}em`, color: fontColor }}>
                                    <i className="bi bi-envelope me-2"></i>{personalInfo.email}
                                </p>
                                <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, color: fontColor }}>
                                    <i className="bi bi-geo-alt-fill me-2"></i>{personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}
                                </p>
                            </div>

                            <div className="education-div7">
                                <h5
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Education', setEducationHeading)}
                                    style={{
                                        color: headingColor,
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                    className="heading7"
                                >
                                    {educationHeading}
                                </h5>
                                <hr />
                                {education[0].map((edu, index) => (
                                    <div key={index} style={{ marginBottom: `${sectionSpacing}px` }}>
                                        <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, color: fontColor }}>
                                            <b>{edu.degree}, {edu.type}</b>
                                        </p>
                                        <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, color: fontColor }}>
                                            <b>{edu.univercity}</b>
                                        </p>
                                        <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, color: fontColor }}>{edu.type}</p>
                                        <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, color: fontColor }}>{edu.startYear} - {edu.endYear}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="skills-div7">
                                <h5
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Skills', setSkillsHeading)}
                                    style={{
                                        color: headingColor,
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                    className="heading7"
                                >
                                    {skillsHeading}
                                </h5>
                                <hr />
                                {keyskills[0].map((keys, index) => (
                                    <div key={index}>
                                        <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, color: fontColor }}>{keys.keyskills}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="hobbies-div7">
                                <h5
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Hobbies', setHobbiesHeading)}
                                    style={{
                                        color: headingColor,
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                    className="heading7"
                                >
                                    {hobbiesHeading}
                                </h5>
                                <hr />
                                {Hobbies[0].map((hobb, index) => (
                                    <div key={index}>
                                        <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, color: fontColor }}>{hobb.hobbies}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="devider7"></div>

                        <div className="job-experience7">
                            <h5
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => handleEdit(e, 'Experience', setExperienceHeading)}
                                style={{
                                    color: headingColor,
                                    fontSize: `${headingSize}px`,
                                    lineHeight: `${lineSpacing}em`,
                                    marginBottom: `${sectionSpacing}px`,
                                }}
                                className="heading7"
                            >
                                {experienceHeading}
                            </h5>
                            <hr />
                            {work[0].map((works, index) => (
                                <div key={index} style={{ marginBottom: `${sectionSpacing}px` }}>
                                    <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, color: fontColor }}>
                                        <b>{works.jobtitle}</b>
                                    </p>
                                    <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, color: fontColor }}>{works.startYear}-{works.endYear}</p>
                                    <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, color: fontColor }}>{works.organization}</p>
                                    <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, color: fontColor }}>{works.aboutexperience}</p>
                                </div>
                            ))}

                            <div className="language7">
                                <h5
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Language', setLanguageHeading)}
                                    style={{
                                        color: headingColor,
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                    className="heading7"
                                >
                                    {languageHeading}
                                </h5>
                                <hr />
                                {LLanguage[0].map((lan, index) => (
                                    <div key={index}>
                                        <ul>
                                            <li style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, color: fontColor }}>{lan.language}</li>
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <div>
                                <h5
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'About Me', setAboutHeading)}
                                    style={{
                                        color: headingColor,
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                    className="heading7"
                                >
                                    {aboutHeading}
                                </h5>
                                <hr />
                                <div className="d-flex justify-content-start">
                                    <div>
                                        <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, color: fontColor }}>Date of Birth:- </p>
                                        <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, color: fontColor }}>{personalInfo.dateofbirth}</p>
                                        <hr style={{ height: '5px' }} />
                                    </div>
                                    <div>
                                        <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, color: fontColor }}>Marital Status:- </p>
                                        <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, color: fontColor }}>{personalInfo.maritalstatus}</p>
                                        <hr style={{ height: '5px' }} />
                                    </div>
                                    <div>
                                        <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, color: fontColor }}>Nationality:- </p>
                                        <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, color: fontColor }}>{personalInfo.nationality}</p>
                                        <hr style={{ height: '5px' }} />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h5
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Object', setObjectHeading)}
                                    style={{
                                        color: headingColor,
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                    className="heading7"
                                >
                                    {objectHeading}
                                </h5>
                                <hr />
                                <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, color: fontColor, marginBottom: `${sectionSpacing}px` }}>
                                    {personalInfo.object}
                                </p>
                            </div>
                        </div>
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
                    elementId="Alish_mirza1"
                />
            </div>
            <div style={{ width: 'inherit' }}><GoogleAd /></div>
        </div>
    );
};

export default Preview7;