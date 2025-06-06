import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../previewfolder/CSS/preview11.css';
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';
import Toolbar,{changeAlignment,toggleStyle,toggleList} from '../Toolbar';
import PreviewHeader from '../PreviewHeader';
const Preview12 = () => {
  // State for PDF filename and styling options
  const [inputFields, setInputFields] = useState('resume.pdf');
  const [bgColor, setBgColor] = useState('white'); // Default background color
  const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
  const [fontColor, setFontColor] = useState('#000000'); // Default font color (corrected from '#rrggbb')
  const [headingColor, setHeadingColor] = useState('#6a8a3f'); // Default heading color
  const [fontSize, setFontSize] = useState(16); // Font size for paragraphs
  const [headingSize, setHeadingSize] = useState(20); // Font size for headings (replaced fontSizeheading)
  const [margin, setMargin] = useState(10); // Margin for resume wrapper
  const [padding, setPadding] = useState(20); // Padding for sections (matched original 20px)
  const [lineSpacing, setLineSpacing] = useState(1.2); // Line spacing for text
  const [sectionSpacing, setSectionSpacing] = useState(15); // Spacing between sections

  // Editable headings
  const [experienceHeading, setExperienceHeading] = useState('Work Experience');
  const [educationHeading, setEducationHeading] = useState('Education');
  const [technicalSkillsHeading, setTechnicalSkillsHeading] = useState('Technical Skills');
  const [skillsHeading, setSkillsHeading] = useState('Skills');
  const [certificatesHeading, setCertificatesHeading] = useState('Certificates');

  // Redux state selectors
  const personalInfo = useSelector((state) => state.reducer.personalInfo);
  const education = useSelector((state) => [state.reducer.education?.[0] ||[]]);
  const keyskills = useSelector((state) => [state.reducer.keySkills?.[0] ||[]]);
  const work = useSelector((state) => [state.reducer.workExperience?.[0] ||[]]);
  const Honor = useSelector((state) => [state.reducer.honorAndaward?.[0] ||[]]);
  const SoftSkill = useSelector((state) => [state.reducer.addSoftSkills?.[0] ||[]]);
  const socialMediaLink = useSelector((state) => [state.reducer.socialMediaLink?.[0] ||[]]);
  const languages = useSelector((state) => [state.reducer.addLanguage?.[0] ||[]]);
  const Hobbies = useSelector((state) => [state.reducer.addHobies?.[0] ||[]]);
  const project = useSelector((state) => [state.reducer.projectData?.[0] ||[]]);
  const certi = useSelector((state) => state.reducer.certificateData?.[0] ||[]); // Added for certificates, with fallback

  // Handle heading edits
  const handleEdit = (e, defaultValue, setter) => {
    setter(e.target.textContent.trim() || defaultValue);
  };

  const lineStyle = {
    height: '5px',
    width: '75%',
    background: 'linear-gradient(to right, #96d1dbcc 75%, darkgrey 25%)',
    margin: `${sectionSpacing}px auto`,
    borderRadius: '5px',
  };

  return (
    <div>
      <header style={{ paddingLeft: '10px', paddingRight: '10px', textAlign: 'center' }}>
<PreviewHeader/>
      </header>
      <div>
        <GoogleAd />
      </div>
      <div className="main11 marging">
        <Toolbar toggleStyle={toggleStyle} changeAlignment={changeAlignment} toggleList={toggleList}  />
        <div
          id="Alish_mirza1"
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
          <h1 style={{ color: headingColor, fontSize: `${headingSize * 1.5}px`, lineHeight: `${lineSpacing}em` }}>
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
          <h2 style={{ color: headingColor, fontSize: `${headingSize}px`, lineHeight: `${lineSpacing}em` }}>
            {work[0][0].jobtitle || 'Job Title'}
          </h2>
          <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}>
            {personalInfo.object || 'Your professional summary goes here.'}
          </p>
          <div style={lineStyle}></div>

          <h3
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => handleEdit(e, 'Work Experience', setExperienceHeading)}
            style={{
              color: headingColor,
              fontSize: `${headingSize}px`,
              lineHeight: `${lineSpacing}em`,
              marginBottom: `${sectionSpacing}px`,
            }}
          >
            {experienceHeading}
          </h3>
          {work[0].map((works, index) => (
            <div key={index} style={{ marginBottom: `${sectionSpacing}px` }}>
              <h4 style={{ fontSize: `${fontSize + 2}px`, marginBottom: '-5px', lineHeight: `${lineSpacing}em` }}>
                {works.jobtitle}
              </h4>
              <p style={{ fontSize: `${fontSize}px`, marginBottom: '-5px', lineHeight: `${lineSpacing}em` }}>
                {works.organization}
                <br />
                {works.startYear} - {works.endYear}
              </p>
              <ul style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                <li>{works.aboutexperience || 'Description of responsibilities and achievements.'}</li>
              </ul>
            </div>
          ))}
          <div style={lineStyle}></div>

          <h3
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => handleEdit(e, 'Education', setEducationHeading)}
            style={{
              color: headingColor,
              fontSize: `${headingSize}px`,
              lineHeight: `${lineSpacing}em`,
              marginBottom: `${sectionSpacing}px`,
            }}
          >
            {educationHeading}
          </h3>
          {education[0].map((edu, index) => (
            <p key={index} style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}>
              {edu.degree} <br />
              {edu.university} <br />
              {edu.startYear} - {edu.endYear}
            </p>
          ))}
          <div style={lineStyle}></div>

          <h3
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => handleEdit(e, 'Technical Skills', setTechnicalSkillsHeading)}
            style={{
              color: headingColor,
              fontSize: `${headingSize}px`,
              lineHeight: `${lineSpacing}em`,
              marginBottom: `${sectionSpacing}px`,
            }}
          >
            {technicalSkillsHeading}
          </h3>
          {keyskills[0].length > 0 && (
            <div style={{ marginBottom: `${sectionSpacing}px` }}>
              <p style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em` }}>
                <strong>Programming Language:</strong> {keyskills[0].map((skill) => skill.keyskills).join(', ')}
              </p>
            </div>
          )}
          <div style={lineStyle}></div>

          <h3
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => handleEdit(e, 'Skills', setSkillsHeading)}
            style={{
              color: headingColor,
              fontSize: `${headingSize}px`,
              lineHeight: `${lineSpacing}em`,
              marginBottom: `${sectionSpacing}px`,
            }}
          >
            {skillsHeading}
          </h3>
          <ul style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}>
            {SoftSkill[0].map((skill, index) => (
              <li key={index}>{skill.softSkills || 'Skill'}</li>
            ))}
          </ul>
          <div style={lineStyle}></div>

          <h3
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => handleEdit(e, 'Certificates', setCertificatesHeading)}
            style={{
              color: headingColor,
              fontSize: `${headingSize}px`,
              lineHeight: `${lineSpacing}em`,
              marginBottom: `${sectionSpacing}px`,
            }}
          >
            {certificatesHeading}
          </h3>
          <ul style={{ fontSize: `${fontSize}px`, lineHeight: `${lineSpacing}em`, marginBottom: `${sectionSpacing}px` }}>
            {certi.map((cert, index) => (
              <li key={index}>{cert.title || 'Certificate'} ({cert.issueDate || 'Date'})</li>
            ))}
          </ul>
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
      <GoogleAd />
    </div>
  );
};

export default Preview12;