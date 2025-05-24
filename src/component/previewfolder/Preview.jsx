import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './CSS/preview.css';
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';
import Toolbar from '../Toolbar';
import PreviewHeader from '../PreviewHeader';
import { changeAlignment, toggleStyle, toggleList } from '../Toolbar'
import Hobbies from '../Hobbies';

const Preview = () => {
    const [inputFields, setInputFields] = useState('resume.pdf');
    const [bgColor, setBgColor] = useState('#F5DEB3');
    const [fontStyle, setFontStyle] = useState('Arial');
    const [fontColor, setFontColor] = useState('black');
    const [headingColor, setHeadingColor] = useState('black');
    const [fontSize, setFontSize] = useState(16);

    // New states for headings and editable content
    const [headingSize, setHeadingSize] = useState(20);
    const [margin, setMargin] = useState(10);
    const [padding, setPadding] = useState(10);
    const [lineSpacing, setLineSpacing] = useState(1.5);
    const [sectionSpacing, setSectionSpacing] = useState(10);

    const personalInfo = useSelector((state) => state.reducer.personalInfo);
    const education = useSelector((state) => [state.reducer.education?.[0] || []]);
    const keyskills = useSelector((state) => [state.reducer.keySkills?.[0] || []]);
    const work = useSelector((state) => [state.reducer.workExperience?.[0] || []]);
    const hobbies = useSelector((state) => [state.reducer.addHobies?.[0] || []])
    const softSkill = useSelector((state) => [state.reducer.addSoftSkills?.[0] || []])
    const language = useSelector((state) => [state.reducer.addLanguage?.[0] || []])
    // const honor = useSelector((state)=>[state.reducer.honorAndaward?.[0] || []])
    const socialMediaLink = useSelector((state) => [state.reducer.socialMediaLink?.[0] || []])
    const certificate = useSelector((state) => [state.reducer.certificateData?.[0] || []])
    const project = useSelector((state) => [state.reducer.projectData?.[0] || []])
    const refrence = useSelector((state) => [state.reducer.refrenceData?.[0] || []])



    console.log('hobbies:-', hobbies)


    return (
        <div className='preview-main'>

            <PreviewHeader />
            <div style={{ width: '100%' }}><GoogleAd /></div>

            <div className="preview-container1 d-md-flex marging" >
                <Toolbar toggleStyle={toggleStyle} changeAlignment={changeAlignment} toggleList={toggleList} />
                <div
                    contentEditable
                    suppressContentEditableWarning

                    className="preview-page1"
                    id="Alish_mirza1"
                    style={{ color: fontColor, backgroundColor: bgColor, fontFamily: fontStyle, padding: `${padding}px`, margin: `${margin}px` }}
                >
                    <div className="d-flex justify-content-center preview-image-container"

                    >
                        <img src={personalInfo.image} alt="Selected" className="preview-image" />
                    </div>

                    <div className="text-center preview-text">
                        <div>
                            <h3
                                className="preview-name"

                                style={{ color: headingColor, fontSize: headingSize, lineHeight: `${lineSpacing}em` }}
                            >
                                {`${personalInfo.firstName} ${personalInfo.lastName}`}
                            </h3>
                        </div>
                        <span className="preview-address"

                            style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                            {work[0].map((works, index) => (
                                <div key={index} className="preview-job-title"

                                >
                                    {works.jobtitle}
                                </div>
                            ))}.
                            {personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}
                        </span>
                    </div>

                    <div className="d-flex preview-details">
                        <div className="me-4 text-center preview-details-section">
                            {/* Editable Detail Heading */}
                            <h6
                                className="details-title"
                                style={{ color: headingColor, fontSize: headingSize, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}
                            >
                                Detail
                            </h6>

                            {/* Editable Address */}
                            <span className="details-address" style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                <div

                                >
                                    {personalInfo.address}
                                </div>
                            </span>

                            <span className="details-city-state" style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                <div
                                >
                                    {personalInfo.city} {personalInfo.state}
                                </div>
                            </span><br />

                            <span className="details-mobile" style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                <div
                                >
                                    {personalInfo.mobileNumber}
                                </div>
                            </span><br />

                            <span className="details-email" style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}>
                                <div
                                >
                                    {personalInfo.email}
                                </div>
                            </span>

                            {/* Skills Section */}
                            <h6
                                className="details-title"
                                style={{ color: headingColor, fontSize: headingSize, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}
                            >
                                Skills
                            </h6>
                            {keyskills.map((keys, index) => (
                                <div key={index} className="skill-item"
                                    style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}>
                                    {keys.keyskills}
                                    <hr className="skill-divider" style={{ height: '5px', color: 'black', backgroundColor: '' }} />
                                </div>
                            ))}

                            {/* Education Section */}
                            {education[0].map((edu, index) => (
                                <div key={index} className="education-item">
                                    <h6
                                        className="details-title"
                                        style={{ color: headingColor, fontSize: headingSize, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}
                                    >
                                        Education   {index + 1}
                                    </h6>
                                    <span className="education-duration"
                                        contentEditable
                                        suppressContentEditableWarning
                                        style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, fontFamily: fontStyle, color: fontColor, }}>
                                        {edu.startYear} - {edu.endYear}
                                    </span>
                                    <span className="education-detail"
                                        contentEditable
                                        suppressContentEditableWarning
                                        style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, fontFamily: fontStyle, color: fontColor }}>
                                        {edu.type} from {edu.univercity}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="preview-profile-section">
                            {/* Profile Section */}
                            <h6
                                className="details-title"

                                style={{ color: headingColor, fontSize: headingSize, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}
                            >
                                Profile
                            </h6>
                            <span className="profile-description"

                                suppressContentEditableWarningstyle={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}>
                                {personalInfo.object}
                            </span>
                            {/* Employment History Section */}
                            <h6
                                className="details-title"
                                style={{ color: headingColor, fontSize: headingSize, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}
                            >
                                Work History
                            </h6>
                            {work[0].map((works, index) => (
                                <div key={index} className="employment-history" style={{ marginBottom: `${sectionSpacing}px` }}>
                                    <span className="employment-detail" style={{ fontSize: `${fontSize}px`, fontWeight: '500', lineHeight: `${lineSpacing}em` }}>
                                        {works.organization} {works.jobtitle}
                                    </span>
                                    <br />
                                    <span className="employment-duration"

                                        style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>

                                        {works.startYear} - {works.endYear}
                                    </span><br />
                                    <span className="aboutexperience"
                                        style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                                        {works.aboutexperience}
                                    </span>
                                </div>
                            ))}

                            
                            {hobbies[0]?.length > 0 && hobbies[0].map((hobb, index) => (
                                <div key={index} style={{ marginBottom: `${sectionSpacing}px` }}>
                                    <h6
                                className="details-title"
                                style={{ color: headingColor, fontSize: headingSize, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}
                            >
                                Hobbies
                            </h6>
                                    <ul>
                                        <li>
                                            <p
                                                style={{
                                                    color: fontColor,
                                                    fontFamily: fontStyle,
                                                    fontSize: `${fontSize}px`,
                                                    lineHeight: `${lineSpacing}em`
                                                }}
                                            >
                                                {hobb.hobbies}
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <GoogleAd />
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
                    <GoogleAd />
                    <GoogleAd />
                </div>
            </div>

            <div style={{ width: '100%' }}><GoogleAd /></div>
        </div>
    );
};

export default Preview;