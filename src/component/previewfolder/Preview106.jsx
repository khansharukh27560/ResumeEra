// import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import './CSS/preview106.css';
// import GoogleAd from '../adFolder/GoogleAd';
// import PdfDownloadButton from '../PdfDownloadButton';
// import Toolbar,{changeAlignment,toggleStyle,toggleList} from '../Toolbar';
// import PreviewHeader from '../PreviewHeader';
const Preview106 = () => {
    return(
        <div>
            <h1>Comming Soon</h1>
        </div>
    )
//     const [inputFields, setInputFields] = useState('resume.pdf');
//     const [bgColor, setBgColor] = useState('white'); // Default background color
//     const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
//     const [fontColor, setFontColor] = useState('#000000'); // Default font color (corrected from '#rrggbb')
//     const [headingColor, setHeadingColor] = useState('#6a8a3f'); // Default heading color
//     const [fontSize, setFontSize] = useState(16); // Font size for paragraphs
//     const [headingSize, setHeadingSize] = useState(20); // Font size for headings (replaced fontSizeheading)
//     const [margin, setMargin] = useState(10); // Margin for resume wrapper
//     const [padding, setPadding] = useState(10); // Padding for sections
//     const [lineSpacing, setLineSpacing] = useState(1.2); // Line spacing for text
//     const [sectionSpacing, setSectionSpacing] = useState(15); // Spacing between sections

//     // Editable headings (aligned with Preview3 and extended for Preview106-specific sections)
//     const [profileHeading, setProfileHeading] = useState('Profile');
//     const [languageHeading, setLanguageHeading] = useState('Language');
//     const [educationHeading, setEducationHeading] = useState('Education');
//     const [experienceHeading, setExperienceHeading] = useState('Work Experience');
//     const [technicalSkillsHeading, setTechnicalSkillsHeading] = useState('Technical Skill');

//     const personalInfo = useSelector((state) => state.reducer.personalInfo);
//     const education = useSelector((state) => [state.reducer.education?.[0] || []]);
//     const keyskills = useSelector((state) => [state.reducer.keySkills?.[0] || []]);
//     const work = useSelector((state) => [state.reducer.workExperience?.[0] || []]);
//     const Honor = useSelector((state) => [state.reducer.honorAndaward?.[0] || []]);
//     const SoftSkill = useSelector((state) => [state.reducer.addSoftSkills?.[0] || []]);
//     const socialMediaLink = useSelector((state) => [state.reducer.socialMediaLink?.[0] || []]);
//     const languages = useSelector((state) => [state.reducer.addLanguage?.[0] || []]);
//     const Hobbies = useSelector((state) => [state.reducer.addHobies?.[0] || []]); // Corrected typo
//     const project = useSelector((state) => [state.reducer.projectData?.[0] || []]);

  
//     // Handle heading edits
//     const handleEdit = (e, defaultValue, setter) => {
//         setter(e.target.textContent.trim() || defaultValue);
//     };
    
//     return (
//         <div>
//             <header style={{ paddingLeft: '10px', paddingRight: '10px', textAlign: 'center' }}>
//   <PreviewHeader/>
//             </header>
//             <div style={{ width: '100%' }}>
//                 <GoogleAd />
//             </div>
//             <div className="main106 marging">
//                 <Toolbar toggleStyle={toggleStyle} changeAlignment={changeAlignment} toggleList={toggleList}  />
//                 <div
//                     className="preview106"
//                     id="Alisha_mirza106"
//                     style={{
//                         backgroundColor: bgColor,
//                         color: fontColor,
//                         fontFamily: fontStyle,
//                         margin: `${margin}px`,
//                         padding: `${padding}px`,
//                     }}
//                     contentEditable
//                     suppressContentEditableWarning
//                 >
//                     <div className="headermain106">
//                         <header className="header106-1" style={{ textAlign: 'start' }}>
//                             <div className="profile106">
//                                 <h6
//                                     className="personal-name106"
//                                     style={{
//                                         color: headingColor,
//                                         fontFamily: fontStyle,
//                                         fontSize: `${headingSize * 1.2}px`, // Slightly larger for name
//                                         lineHeight: `${lineSpacing}em`,
//                                         marginBottom: `${sectionSpacing}px`,
//                                     }}
//                                 >
//                                     {personalInfo.firstName} <br /> {personalInfo.lastName}
//                                 </h6>
//                                 <p
//                                     style={{
//                                         color: fontColor,
//                                         fontFamily: fontStyle,
//                                         fontSize: `${fontSize}px`,
//                                         lineHeight: `${lineSpacing}em`,
//                                     }}
//                                 >
//                                     {work[0][0].jobtitle}
//                                 </p>
//                             </div>
//                             <div className="imagediv106" style={{ margin: 'auto' }}>
//                                 <img src={personalInfo.image} alt="doctor resume" />
//                             </div>
//                         </header>
//                         <header className="header106-2" style={{ textAlign: 'end' }}>
//                             <p
//                                 className="mt-3"
//                                 style={{
//                                     textAlign: 'end',
//                                     wordBreak: 'break-all',
//                                     color: fontColor,
//                                     fontFamily: fontStyle,
//                                     fontSize: `${fontSize}px`,
//                                     lineHeight: `${lineSpacing}em`,
//                                 }}
//                             >
//                                 {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}
//                                 <i className="bi bi-geo-alt-fill me-2 ms-2" />
//                             </p>
//                             <p
//                                 style={{
//                                     textAlign: 'end',
//                                     color: fontColor,
//                                     fontFamily: fontStyle,
//                                     fontSize: `${fontSize}px`,
//                                     lineHeight: `${lineSpacing}em`,
//                                 }}
//                             >
//                                 {personalInfo.mobileNumber}
//                                 <i className="bi bi-telephone-fill me-2 ms-2" />
//                             </p>
//                             <p
//                                 style={{
//                                     textAlign: 'end',
//                                     wordBreak: 'break-all',
//                                     color: fontColor,
//                                     fontFamily: fontStyle,
//                                     fontSize: `${fontSize}px`,
//                                     lineHeight: `${lineSpacing}em`,
//                                 }}
//                             >
//                                 {personalInfo.email}
//                                 <i className="bi bi-envelope me-2 ms-2" />
//                             </p>
//                             <p
//                                 style={{
//                                     textAlign: 'end',
//                                     color: fontColor,
//                                     fontFamily: fontStyle,
//                                     fontSize: `${fontSize}px`,
//                                     lineHeight: `${lineSpacing}em`,
//                                 }}
//                             >
//                                 {socialMediaLink?.[0]?.github || 'N/A'}
//                                 <i className="bi bi-github ms-2 me-2" />
//                             </p>
//                         </header>
//                     </div>
//                     <div className="previewinner106 mt-5">
//                         <div className="inner106-1" style={{ padding: `${padding}px` }}>
//                             <div className="experience-section106">
//                                 <h6
//                                     contentEditable
//                                     suppressContentEditableWarning
//                                     onBlur={(e) => handleEdit(e, 'Work Experience', setExperienceHeading)}
//                                     style={{
//                                         color: headingColor,
//                                         fontFamily: fontStyle,
//                                         fontSize: `${headingSize}px`,
//                                         lineHeight: `${lineSpacing}em`,
//                                         marginBottom: `${sectionSpacing}px`,
//                                     }}
//                                     className="details-title106"
//                                 >
//                                     {experienceHeading}
//                                 </h6>
//                                 {work[0].map((works, index) => (
//                                     <div key={index} className="employment-history106" style={{ marginBottom: `${sectionSpacing}px` }}>
//                                         <div className="exp-inner106">
//                                             <p
//                                                 style={{
//                                                     color: fontColor,
//                                                     fontFamily: fontStyle,
//                                                     fontSize: `${fontSize}px`,
//                                                     lineHeight: `${lineSpacing}em`,
//                                                 }}
//                                                 className="employment-detail106"
//                                             >
//                                                 <b>{works.jobtitle}</b>
//                                                 <br />
//                                                 {works.organization} {works.city || 'N/A'}
//                                             </p>
//                                             <p
//                                                 style={{
//                                                     color: fontColor,
//                                                     fontFamily: fontStyle,
//                                                     fontSize: `${fontSize}px`,
//                                                     lineHeight: `${lineSpacing}em`,
//                                                 }}
//                                                 className="employment-detail106"
//                                             >
//                                                 {works.startYear} - {works.endYear}
//                                             </p>
//                                             <p
//                                                 style={{
//                                                     color: fontColor,
//                                                     fontFamily: fontStyle,
//                                                     fontSize: `${fontSize}px`,
//                                                     lineHeight: `${lineSpacing}em`,
//                                                 }}
//                                                 className="employment-detail106"
//                                             >
//                                                 {works.aboutexperience}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                             <div className="education-section106 mt-3">
//                                 <h6
//                                     contentEditable
//                                     suppressContentEditableWarning
//                                     onBlur={(e) => handleEdit(e, 'Education', setEducationHeading)}
//                                     style={{
//                                         color: headingColor,
//                                         fontFamily: fontStyle,
//                                         fontSize: `${headingSize}px`,
//                                         lineHeight: `${lineSpacing}em`,
//                                         marginBottom: `${sectionSpacing}px`,
//                                     }}
//                                     className="details-title106"
//                                 >
//                                     {educationHeading}
//                                 </h6>
//                                 {education[0].map((edu, index) => (
//                                     <div key={index} className="education-item106" style={{ marginBottom: `${sectionSpacing}px` }}>
//                                         <div>
//                                             <p
//                                                 style={{
//                                                     color: fontColor,
//                                                     fontFamily: fontStyle,
//                                                     fontSize: `${fontSize}px`,
//                                                     lineHeight: `${lineSpacing}em`,
//                                                 }}
//                                                 className="employment-detail106"
//                                             >
//                                                 {edu.degree}
//                                             </p>
//                                             <p
//                                                 style={{
//                                                     color: fontColor,
//                                                     fontFamily: fontStyle,
//                                                     fontSize: `${fontSize}px`,
//                                                     lineHeight: `${lineSpacing}em`,
//                                                 }}
//                                                 className="employment-detail106"
//                                             >
//                                                 {edu.univercity}
//                                             </p>
//                                             <p
//                                                 style={{
//                                                     color: fontColor,
//                                                     fontFamily: fontStyle,
//                                                     fontSize: `${fontSize}px`,
//                                                     lineHeight: `${lineSpacing}em`,
//                                                 }}
//                                                 className="employment-detail106"
//                                             >
//                                                 {edu.startYear} - {edu.endYear}, {edu.city}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="inner106-2" style={{ padding: `${padding}px` }}>
//                             <div>
//                                 <h6
//                                     contentEditable
//                                     suppressContentEditableWarning
//                                     onBlur={(e) => handleEdit(e, 'Profile', setProfileHeading)}
//                                     style={{
//                                         color: headingColor,
//                                         fontFamily: fontStyle,
//                                         fontSize: `${headingSize}px`,
//                                         lineHeight: `${lineSpacing}em`,
//                                         marginBottom: `${sectionSpacing}px`,
//                                     }}
//                                 >
//                                     {profileHeading}
//                                 </h6>
//                                 <p
//                                     style={{
//                                         color: fontColor,
//                                         fontFamily: fontStyle,
//                                         fontSize: `${fontSize}px`,
//                                         lineHeight: `${lineSpacing}em`,
//                                         marginBottom: `${sectionSpacing}px`,
//                                     }}
//                                 >
//                                     {personalInfo.object}
//                                 </p>
//                             </div>
//                             <div>
//                                 <h6
//                                     contentEditable
//                                     suppressContentEditableWarning
//                                     onBlur={(e) => handleEdit(e, 'Language', setLanguageHeading)}
//                                     style={{
//                                         color: headingColor,
//                                         fontFamily: fontStyle,
//                                         fontSize: `${headingSize}px`,
//                                         lineHeight: `${lineSpacing}em`,
//                                         marginBottom: `${sectionSpacing}px`,
//                                     }}
//                                 >
//                                     {languageHeading}
//                                 </h6>
//                                 {languages[0].map((keys, index) => (
//                                     <div key={index} style={{ marginBottom: `${sectionSpacing}px` }}>
//                                         <div>
//                                             <p
//                                                 style={{
//                                                     color: fontColor,
//                                                     fontFamily: fontStyle,
//                                                     fontSize: `${fontSize}px`,
//                                                     lineHeight: `${lineSpacing}em`,
//                                                 }}
//                                             >
//                                                 {keys.language}
//                                             </p>
//                                         </div>
//                                         <div className="line-container">
//                                             <div
//                                                 className="filled-line"
//                                                 style={{ width: `${(keys.rating / 5) * 100}%` }}
//                                             ></div>
//                                             <div
//                                                 className="empty-line"
//                                                 style={{ width: `${100 - (keys.rating / 5) * 100}%` }}
//                                             ></div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                             <div className="technical-skills-title106 mt-3">
//                                 <h6
//                                     contentEditable
//                                     suppressContentEditableWarning
//                                     onBlur={(e) => handleEdit(e, 'Technical Skill', setTechnicalSkillsHeading)}
//                                     style={{
//                                         color: headingColor,
//                                         fontFamily: fontStyle,
//                                         fontSize: `${headingSize}px`,
//                                         lineHeight: `${lineSpacing}em`,
//                                         marginBottom: `${sectionSpacing}px`,
//                                     }}
//                                 >
//                                     {technicalSkillsHeading}
//                                 </h6>
//                                 {keyskills[0].map((keys, index) => (
//                                     <div key={index} className="technical-skill-item106">
//                                         <p
//                                             style={{
//                                                 color: fontColor,
//                                                 fontFamily: fontStyle,
//                                                 fontSize: `${fontSize}px`,
//                                                 lineHeight: `${lineSpacing}em`,
//                                             }}
//                                         >
//                                             {keys.keyskills}
//                                         </p>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="resume-download-section0">
//                     <div style={{ width: '100%' }}>
//                         <GoogleAd />
//                     </div>
//                     <PdfDownloadButton
//                         inputFields={inputFields}
//                         setInputFields={setInputFields}
//                         bgColor={bgColor}
//                         setBgColor={setBgColor}
//                         fontStyle={fontStyle}
//                         setFontStyle={setFontStyle}
//                         headingColor={headingColor}
//                         setHeadingColor={setHeadingColor}
//                         fontColor={fontColor}
//                         setFontColor={setFontColor}
//                         fontSize={fontSize}
//                         setFontSize={setFontSize}
//                         headingSize={headingSize}
//                         setHeadingSize={setHeadingSize}
//                         margin={margin}
//                         setMargin={setMargin}
//                         padding={padding}
//                         setPadding={setPadding}
//                         lineSpacing={lineSpacing}
//                         setLineSpacing={setLineSpacing}
//                         sectionSpacing={sectionSpacing}
//                         setSectionSpacing={setSectionSpacing}
//                         elementId="Alisha_mirza106"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
};

export default Preview106;