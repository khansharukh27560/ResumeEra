import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './CSS/preview108.css'; // Assuming a corresponding CSS file exists
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';
import Toolbar,{changeAlignment,toggleStyle,toggleList} from '../Toolbar';
import PreviewHeader from '../PreviewHeader';
const Preview108 = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');
    const [bgColor, setBgColor] = useState('white'); // Default background color
    const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
    const [fontColor, setFontColor] = useState('#000000'); // Default font color
    const [headingColor, setHeadingColor] = useState('#6a8a3f'); // Default heading color
    const [fontSize, setFontSize] = useState(16); // Font size for paragraphs
    const [headingSize, setHeadingSize] = useState(20); // Font size for headings
    const [margin, setMargin] = useState(10); // Margin for resume wrapper
    const [padding, setPadding] = useState(10); // Padding for sections
    const [lineSpacing, setLineSpacing] = useState(1.2); // Line spacing for text
    const [sectionSpacing, setSectionSpacing] = useState(15); // Spacing between sections

    // Editable headings (aligned with Preview3 and extended for Preview108-specific sections)
    const [experienceHeading, setExperienceHeading] = useState('Work Experience');
    const [skillsHeading, setSkillsHeading] = useState('Skill');
    const [certificatesHeading, setCertificatesHeading] = useState('Certificates');
    const [educationHeading, setEducationHeading] = useState('Education');
    const [languageHeading, setLanguageHeading] = useState('Language');

    const personalInfo = useSelector((state) => state.reducer.personalInfo);
    const education = useSelector((state) => [state.reducer.education?.[0] || []]);
    const keyskills = useSelector((state) => [state.reducer.keySkills?.[0] || []]);
    const work = useSelector((state) => [state.reducer.workExperience?.[0] || []]);
    const socialMediaLink = useSelector((state) => [state.reducer.socialMediaLink?.[0] || []]);
    const languages = useSelector((state) => [state.reducer.addLanguage?.[0] || []]);
    const certi = useSelector((state) => state.reducer.certificateData?.[0] || []);

    // Handle heading edits
    const handleEdit = (e, defaultValue, setter) => {
        setter(e.target.textContent.trim() || defaultValue);
    };

    return (
        <div>
            <header style={{ paddingLeft: '10px', paddingRight: '10px', textAlign: 'center' }}>
<PreviewHeader/>
            </header>
            <div style={{ width: '100%' }}>
                <GoogleAd />
            </div>
            <div className="main108 marging">
                <Toolbar toggleStyle={toggleStyle} changeAlignment={changeAlignment} toggleList={toggleList}  />
                <div
                    className="Alisha"
                    id="Alisha_mirza108"
                    style={{
                        backgroundColor: bgColor,
                        fontFamily: fontStyle,
                        color: fontColor,
                        margin: `${margin}px`,
                        padding: `${padding}px`,
                    }}
                    contentEditable
                    suppressContentEditableWarning
                >
                    <div className="name108">
                        <h3
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
                                fontSize: `${fontSize}px`,
                                fontFamily: fontStyle,
                                lineHeight: `${lineSpacing}em`,
                            }}
                        >
                            {work[0][0].jobtitle}
                        </p>
                        <p
                            style={{
                                color: fontColor,
                                fontSize: `${fontSize}px`,
                                fontFamily: fontStyle,
                                lineHeight: `${lineSpacing}em`,
                                marginBottom: `${sectionSpacing}px`,
                            }}
                        >
                            {personalInfo.object}
                        </p>
                    </div>
                    <hr className="hrtop" />
                    <div className="contact108">
                        <p
                            style={{
                                color: fontColor,
                                fontSize: `${fontSize}px`,
                                fontFamily: fontStyle,
                                wordBreak: 'break-all',
                                lineHeight: `${lineSpacing}em`,
                            }}
                        >
                            <i className="bi bi-envelope me-2 ms-2" />
                            {personalInfo.email}
                        </p>
                        <p
                            style={{
                                color: fontColor,
                                fontSize: `${fontSize}px`,
                                fontFamily: fontStyle,
                                lineHeight: `${lineSpacing}em`,
                            }}
                        >
                            <i className="bi bi-telephone-fill me-2 ms-2" />
                            {personalInfo.mobileNumber}
                        </p>
                        <p
                            style={{
                                color: fontColor,
                                fontSize: `${fontSize}px`,
                                fontFamily: fontStyle,
                                lineHeight: `${lineSpacing}em`,
                            }}
                            className=""
                        >
                            <i className="bi bi-geo-alt-fill me-2 ms-2" />
                            {personalInfo.city} {personalInfo.state} {personalInfo.country}
                        </p>
                        <p
                            style={{
                                color: fontColor,
                                fontSize: `${fontSize}px`,
                                fontFamily: fontStyle,
                                lineHeight: `${lineSpacing}em`,
                            }}
                        >
                            <i className="bi bi-linkedin me-2 ms-2" />
                            {socialMediaLink?.[0]?.linkedin || 'N/A'}
                        </p>
                    </div>
                    <hr className="hrbottom" />
                    <div className="d-flex justify-content-between" style={{ backgroundColor: bgColor }}>
                        <div className="experience-section108" style={{ padding: `${padding}px` }}>
                            <h4
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => handleEdit(e, 'Work Experience', setExperienceHeading)}
                                className="details-title108"
                                style={{
                                    color: headingColor,
                                    fontFamily: fontStyle,
                                    fontSize: `${headingSize}px`,
                                    lineHeight: `${lineSpacing}em`,
                                    marginBottom: `${sectionSpacing}px`,
                                }}
                            >
                                {experienceHeading}
                            </h4>
                            {work[0].map((works, index) => (
                                <div key={index} className="employment-history108" style={{ marginBottom: `${sectionSpacing}px` }}>
                                    <div className="exp-inner108">
                                        <p
                                            style={{
                                                color: fontColor,
                                                fontSize: `${fontSize}px`,
                                                fontFamily: fontStyle,
                                                lineHeight: `${lineSpacing}em`,
                                            }}
                                            className="employment-detail108"
                                        >
                                            <b style={{ fontWeight: 500, color: fontColor }}>{works.jobtitle}</b>
                                            <br />
                                            {works.organization} {works.city || 'N/A'}
                                        </p>
                                        <p
                                            style={{
                                                color: fontColor,
                                                fontSize: `${fontSize}px`,
                                                fontFamily: fontStyle,
                                                lineHeight: `${lineSpacing}em`,
                                            }}
                                            className="employment-detail108"
                                        >
                                            <i>{works.startYear} - {works.endYear}</i>
                                        </p>
                                        <p
                                            style={{
                                                color: fontColor,
                                                fontSize: `${fontSize}px`,
                                                fontFamily: fontStyle,
                                                lineHeight: `${lineSpacing}em`,
                                            }}
                                            className="employment-detail108"
                                        >
                                            {works.aboutexperience}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="ms-4" style={{width:'100%', padding: `${padding}px` }}>
                            <div className="technical-skills-title108">
                                <h4
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Skill', setSkillsHeading)}
                                    style={{
                                        color: headingColor,
                                        fontFamily: fontStyle,
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                >
                                    {skillsHeading}
                                </h4>
                                {keyskills[0].map((keys, index) => (
                                    <div key={index} className="technical-skill-item108">
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
                            <div className="technical-skills-title108 mt-2">
                                <h4
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Certificates', setCertificatesHeading)}
                                    style={{
                                        color: headingColor,
                                        fontFamily: fontStyle,
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                >
                                    {certificatesHeading}
                                </h4>
                                {certi.map((keys, index) => (
                                    <div key={index} className="certificate-item108" style={{ marginBottom: `${sectionSpacing}px` }}>
                                        <p
                                            style={{
                                                color: fontColor,
                                                fontSize: `${fontSize}px`,
                                                fontFamily: fontStyle,
                                                lineHeight: `${lineSpacing}em`,
                                            }}
                                        >
                                            <b>{keys.certificateName}</b>
                                        </p>
                                        <p
                                            style={{
                                                color: fontColor,
                                                fontSize: `${fontSize}px`,
                                                fontFamily: fontStyle,
                                                lineHeight: `${lineSpacing}em`,
                                            }}
                                        >
                                            {keys.organization}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="education-section108 mt-3">
                                <h4
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Education', setEducationHeading)}
                                    className="details-title108"
                                    style={{
                                        color: headingColor,
                                        fontFamily: fontStyle,
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                >
                                    {educationHeading}
                                </h4>
                                {education[0].map((edu, index) => (
                                    <div key={index} className="education-item108" style={{ marginBottom: `${sectionSpacing}px` }}>
                                        <div className="certificate-item108">
                                            <p
                                                style={{
                                                    color: fontColor,
                                                    fontSize: `${fontSize}px`,
                                                    fontFamily: fontStyle,
                                                    lineHeight: `${lineSpacing}em`,
                                                }}
                                                className="employment-detail108"
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
                                                className="employment-detail108"
                                            >
                                                {edu.univercity}
                                            </p>
                                            <p
                                                style={{
                                                    color: fontColor,
                                                    fontSize: `${fontSize}px`,
                                                    fontFamily: fontStyle,
                                                    lineHeight: `${lineSpacing}em`,
                                                }}
                                                className="employment-detail108"
                                            >
                                                {edu.startYear} - {edu.endYear}, {edu.city}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="language-108">
                                <h4
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleEdit(e, 'Language', setLanguageHeading)}
                                    style={{
                                        color: headingColor,
                                        fontFamily: fontStyle,
                                        fontSize: `${headingSize}px`,
                                        lineHeight: `${lineSpacing}em`,
                                        marginBottom: `${sectionSpacing}px`,
                                    }}
                                >
                                    {languageHeading}
                                </h4>
                                {languages[0].map((keys, index) => (
                                    <div key={index} className="language-item108">
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
                                ))}
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
                    elementId="Alisha_mirza108"
                />
            </div>
            <div style={{ width: '100%' }}>
                <GoogleAd />
            </div>
        </div>
    );
};

export default Preview108;