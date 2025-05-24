import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './CSS/preview115.css';
import PdfDownloadButton from '../PdfDownloadButton';
import Toolbar,{changeAlignment,toggleStyle,toggleList} from '../Toolbar';
import PreviewHeader from '../PreviewHeader';
const Preview115 = () => {
  // State for PDF filename and styling options
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

  // Editable headings
  const [experienceHeading, setExperienceHeading] = useState('Work Experience');
  const [educationHeading, setEducationHeading] = useState('Education');
  const [skillsHeading, setSkillsHeading] = useState('Skill');
  const [certificateHeading, setCertificateHeading] = useState('Certificate');

  // Redux state selectors
  const personalInfo = useSelector((state) => state.reducer.personalInfo);
  const education = useSelector((state) => [state.reducer.education?.[0]||[]]);
  const keyskills = useSelector((state) => [state.reducer.keySkills?.[0]||[]]);
  const work = useSelector((state) => [state.reducer.workExperience?.[0]||[]]);
  const Honor = useSelector((state) => [state.reducer.honorAndaward?.[0]||[]]);
  const SoftSkill = useSelector((state) => [state.reducer.addSoftSkills?.[0]||[]]);
  const socialMediaLink = useSelector((state) => [state.reducer.socialMediaLink?.[0]||[]]);
  const languages = useSelector((state) => [state.reducer.addLanguage?.[0]||[]]);
  const Certificate = useSelector((state) => state.reducer.certificateData?.[0]||[]);
  const Hobbies = useSelector((state) => [state.reducer.addHobies?.[0]||[]]);
  const project = useSelector((state) => [state.reducer.projectData?.[0]||[]]);

  // Handle heading edits
  const handleEdit = (e, defaultValue, setter) => {
    setter(e.target.textContent.trim() || defaultValue);
  };

  return (
    <div>
      <header style={{ paddingLeft: '10px', paddingRight: '10px', textAlign: 'center' }}>
<PreviewHeader/>
      </header>
      <div className="main115 d-md-flex marging">
        <Toolbar toggleStyle={toggleStyle} changeAlignment={changeAlignment} toggleList={toggleList}  />
        <div
          className="preview115"
          style={{ backgroundColor: bgColor }}
          id="Alisha_mirza115"
          contentEditable
          suppressContentEditableWarning
        >
          <div className="personalandword115" style={{ padding: `${padding}px` }}>
            <div className="personal115">
              <h3
                style={{
                  color: headingColor,
                  fontSize: `${headingSize * 1.2}px`, // Slightly larger for name
                  fontFamily: fontStyle,
                  lineHeight: `${lineSpacing}em`,
                  marginBottom: `${sectionSpacing}px`,
                }}
              >
                {personalInfo.firstName} {personalInfo.lastName}
              </h3>
              <p
                className="jobtitle"
                style={{
                  fontSize: `${fontSize}px`,
                  color: fontColor,
                  fontFamily: fontStyle,
                  lineHeight: `${lineSpacing}em`,
                }}
              >
                {work[0][0].jobtitle} {/* Simplified to display only the first job title */}
              </p>
              <p
                className="object"
                style={{
                  fontSize: `${fontSize}px`,
                  fontFamily: fontStyle,
                  color: fontColor,
                  lineHeight: `${lineSpacing}em`,
                  marginBottom: `${sectionSpacing}px`,
                }}
              >
                {personalInfo.object}
              </p>
            </div>

            <div>
              <div className="experience-section115 mt-4">
                <h6
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleEdit(e, 'Work Experience', setExperienceHeading)}
                  className="details-title115"
                  style={{
                    color: headingColor,
                    fontSize: `${headingSize}px`,
                    fontFamily: fontStyle,
                    lineHeight: `${lineSpacing}em`,
                    marginBottom: `${sectionSpacing}px`,
                  }}
                >
                  <i
                    className="bi bi-briefcase m-3"
                    style={{
                      fontSize: `${fontSize}px`,
                      border: `1px solid ${headingColor}`,
                      padding: '7px',
                      borderRadius: '50%',
                    }}
                  ></i>
                  {experienceHeading}
                </h6>
                {work[0].map((works, index) => (
                  <div key={index} className="employment-history115 ms-4" style={{ marginBottom: `${sectionSpacing}px` }}>
                    <div className="exp-inner1">
                      <p
                        style={{
                          fontSize: `${fontSize}px`,
                          color: fontColor,
                          fontFamily: fontStyle,
                          marginBottom: '-5px',
                          lineHeight: `${lineSpacing}em`,
                        }}
                        className="employment-detail115"
                      >
                        {works.jobtitle}
                      </p>
                      <p
                        style={{
                          fontSize: `${fontSize}px`,
                          color: fontColor,
                          fontFamily: fontStyle,
                          marginBottom: '-5px',
                          lineHeight: `${lineSpacing}em`,
                        }}
                        className="employment-detail115"
                      >
                        {works.organization}
                      </p>
                      <p
                        style={{
                          fontSize: `${fontSize}px`,
                          color: fontColor,
                          fontFamily: fontStyle,
                          lineHeight: `${lineSpacing}em`,
                        }}
                        className="employment-duration115"
                      >
                        <i>{works.startYear} - {works.endYear}</i>
                      </p>
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: `${fontSize}px`,
                          color: fontColor,
                          fontFamily: fontStyle,
                          lineHeight: `${lineSpacing}em`,
                        }}
                        className="aboutexperience115"
                      >
                        {works.aboutexperience}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="">
                <h6
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
                  className="heading115"
                >
                  <i
                    className="bi bi-backpack"
                    style={{
                      fontSize: `${fontSize}px`,
                      border: `1px solid ${headingColor}`,
                      padding: '7px',
                      borderRadius: '50%',
                      margin: '5px',
                    }}
                  ></i>
                  {educationHeading}
                </h6>
                {education[0].map((edu, index) => (
                  <div key={index} className="education-item115" style={{ marginBottom: `${sectionSpacing}px` }}>
                    <div className="d-flex justify-content-between">
                      <div className="ms-4">
                        <p
                          style={{
                            fontSize: `${fontSize}px`,
                            color: fontColor,
                            fontFamily: fontStyle,
                            marginBottom: '-5px',
                            lineHeight: `${lineSpacing}em`,
                          }}
                          className="employment-detail115"
                        >
                          {edu.degree}
                        </p>
                        <p
                          style={{
                            fontSize: `${fontSize}px`,
                            color: fontColor,
                            fontFamily: fontStyle,
                            marginBottom: '-5px',
                            lineHeight: `${lineSpacing}em`,
                          }}
                          className="employment-detail115"
                        >
                          {edu.university}
                        </p>
                        <p
                          style={{
                            fontSize: `${fontSize}px`,
                            color: fontColor,
                            fontFamily: fontStyle,
                            marginBottom: '-5px',
                            lineHeight: `${lineSpacing}em`,
                          }}
                        >
                          {edu.city}
                        </p>
                        <p
                          style={{
                            fontSize: `${fontSize}px`,
                            color: fontColor,
                            fontFamily: fontStyle,
                            lineHeight: `${lineSpacing}em`,
                          }}
                          className="employment-detail115 me-3"
                        >
                          {edu.startYear}-{edu.endYear}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="contactdivouter115" style={{ padding: `${padding}px` }}>
            <div className="contactdiv115">
              <div className="contactinnerdiv115">
                <i className="bi bi-geo-alt-fill me-2 ms-2" style={{ color: headingColor, fontSize: `${fontSize}px` }} />
                <p
                  style={{
                    fontSize: `${fontSize}px`,
                    color: fontColor,
                    fontFamily: fontStyle,
                    lineHeight: `${lineSpacing}em`,
                  }}
                >
                  {personalInfo.state} {personalInfo.postalCode}
                </p>
              </div>
              <div className="contactinnerdiv115">
                <i className="bi bi-telephone-fill me-2 ms-2" style={{ color: headingColor, fontSize: `${fontSize}px` }} />
                <p
                  style={{
                    fontSize: `${fontSize}px`,
                    color: fontColor,
                    fontFamily: fontStyle,
                    lineHeight: `${lineSpacing}em`,
                  }}
                >
                  {personalInfo.mobileNumber}
                </p>
              </div>
              <div className="contactinnerdiv115">
                <i className="bi bi-envelope me-2 ms-2" style={{ color: headingColor, fontSize: `${fontSize}px` }} />
                <p
                  style={{
                    fontSize: `${fontSize}px`,
                    color: fontColor,
                    fontFamily: fontStyle,
                    lineHeight: `${lineSpacing}em`,
                  }}
                >
                  {personalInfo.email}
                </p>
              </div>
              <div className="contactinnerdiv115">
                <i className="bi bi-github ms-2" style={{ color: headingColor, fontSize: `${fontSize}px` }} />
                <p
                  style={{
                    fontSize: `${fontSize}px`,
                    color: fontColor,
                    fontFamily: fontStyle,
                    lineHeight: `${lineSpacing}em`,
                  }}
                >
                  {socialMediaLink?.[0]?.github || 'N/A'}
                </p>
              </div>
            </div>
            <div className="technicalskills115">
              <div className="inner-115-1 me-4">
                <h6
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
                  <i
                    className="bi bi-tools"
                    style={{
                      fontSize: `${fontSize}px`,
                      border: `1px solid ${headingColor}`,
                      padding: '7px',
                      borderRadius: '50%',
                      margin: '5px',
                    }}
                  />
                  {skillsHeading}
                </h6>
                {keyskills[0].map((keys, index) => (
                  <div key={index} className="d-flex justify-content-between" style={{ marginBottom: `${sectionSpacing}px` }}>
                    <p
                      className="technical-skill-item115"
                      style={{
                        fontSize: `${fontSize}px`,
                        color: fontColor,
                        fontFamily: fontStyle,
                        lineHeight: `${lineSpacing}em`,
                      }}
                    >
                      {keys.keyskills}
                    </p>
                    {/* Optional: Add rating circles if desired */}
                  </div>
                ))}
              </div>
              <div className="certificate115">
                <h6
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleEdit(e, 'Certificate', setCertificateHeading)}
                  style={{
                    color: headingColor,
                    fontSize: `${headingSize}px`,
                    fontFamily: fontStyle,
                    lineHeight: `${lineSpacing}em`,
                    marginBottom: `${sectionSpacing}px`,
                  }}
                >
                  <i
                    className="bi bi-file-text"
                    style={{
                      fontSize: `${fontSize}px`,
                      border: `1px solid ${headingColor}`,
                      padding: '7px',
                      borderRadius: '50%',
                      margin: '5px',
                    }}
                  />
                  {certificateHeading}
                </h6>
                {Certificate.map((img, index) => (
                  <div key={index} style={{ marginBottom: `${sectionSpacing}px` }}>
                    <p
                      style={{
                        fontSize: `${fontSize}px`,
                        color: fontColor,
                        fontFamily: fontStyle,
                        lineHeight: `${lineSpacing}em`,
                      }}
                    >
                      {img.certificateName} ({img.issueDate})
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
          elementId="Alisha_mirza115"
        />
      </div>
    </div>
  );
};

export default Preview115;