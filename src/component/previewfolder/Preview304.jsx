import React, { useState, useEffect } from 'react';
import '../previewfolder/CSS/preview304.css';
import { useSelector } from 'react-redux';
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';
import Toolbar from '../Toolbar';
import PreviewHeader from '../PreviewHeader';
import { changeAlignment, toggleStyle, toggleList } from '../Toolbar'

export default function Preview304() {
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
  const [objectiveHeading, setObjectiveHeading] = useState('Objective Statement');
  const [softSkillsHeading, setSoftSkillsHeading] = useState('Soft Skill');
  const [technicalSkillsHeading, setTechnicalSkillsHeading] = useState('Technical Skill');
  const [experienceHeading, setExperienceHeading] = useState('Work Experience');
  const [educationHeading, setEducationHeading] = useState('Education');
  const [languageHeading, setLanguageHeading] = useState('Language');
  const [interestHeading, setInterestHeading] = useState('Interest');

  // Redux state selectors
  const personalInfo = useSelector((state) => state.reducer.personalInfo);
  const education = useSelector((state) => [state.reducer.education?.[0] || []]);
  const keyskills = useSelector((state) => [state.reducer.keySkills?.[0] || []]);
  const work = useSelector((state) => [state.reducer.workExperience?.[0] || []]);
  const Honor = useSelector((state) => [state.reducer.honorAndaward?.[0] || []]);
  const SoftSkill = useSelector((state) => [state.reducer.addSoftSkills?.[0] || []]);
  const socialMediaLink = useSelector((state) => [state.reducer.socialMediaLink?.[0] || []]);
  const languages = useSelector((state) => [state.reducer.addLanguage?.[0] || []]);
  const Hobbies = useSelector((state) => [state.reducer.addHobies?.[0] || []]);
  const project = useSelector((state) => [state.reducer.projectData?.[0] || []]);
  const certificate = useSelector((state)=>[state.reducer.certificateData?.[0] || []])

  const styleHeading= {
  whiteSpace: 'nowrap', // Corrected from 'none'
                fontFamily: fontStyle,
                color: headingColor,
                fontSize: `${headingSize * 1.2}px`, // Slightly larger for name
                lineHeight: `${lineSpacing}em`,
                marginBottom: `${sectionSpacing}px`,
 }
 const styleParagraph = {
   fontFamily: fontStyle,
                color: fontColor,
                fontSize: `${fontSize}px`, // Slightly larger for name
                lineHeight: `${lineSpacing}em`,
                // marginBottom: `${sectionSpacing}px`,
 }
 const stylesmall = {
   fontFamily: fontStyle,
                color: fontColor,
                fontSize: `${fontSize}px`, // Slightly larger for name
                lineHeight: `${lineSpacing}em`,
                // marginBottom: `${sectionSpacing}px`,
 }

  return (
    <div>
      <header style={{ paddingLeft: '10px', paddingRight: '10px', textAlign: 'center' }}>
        <PreviewHeader />
      </header>
      <GoogleAd />
      <div className="main304 marging">
        <Toolbar toggleStyle={toggleStyle} changeAlignment={changeAlignment} toggleList={toggleList} />
        <div
          className="preview304"
          style={{ backgroundColor: bgColor, margin: `${margin}px` }}
          id="Alisha_mirza304"
          contentEditable
          suppressContentEditableWarning
        >
          <div className="personalInfo304" style={{ backgroundColor: bgColor, padding: `${padding}px` }}>
            <div className="namediv304" style={{marginBottom:'-20px'}}>
              <h3
                style={styleHeading}
              >
                {personalInfo.firstName} {personalInfo.lastName}
              </h3>
            </div>
            <div className="contact304" style={{flexWrap:'wrap'}}>
              <div className="contactinnerdiv304" style={{ whiteSpace: 'nowrap' }}>
                <p style={styleParagraph}>
                  {personalInfo.state} {personalInfo.postalCode}
                </p>
              </div>
              <div>-</div>
              <div className="contactinnerdiv304" style={{ whiteSpace: 'nowrap' }}>
                <p
                  style={styleParagraph}
                >
                  {personalInfo.mobileNumber}- {personalInfo.email}
                </p>
              </div>
              <div className="contactinnerdiv304" style={{ whiteSpace: 'nowrap' }}>
              
                
                <div style={{ display: 'flex',  alignItems: 'center', flexWrap: 'wrap',marginTop:'-30px' }}>
                  {socialMediaLink[0].map((item) => (
                    
                      <p style={{...styleParagraph,textAlign:'center',width:'fit-content'}}>{item?.url}</p>
                    
                  ))}
                </div>
              </div>

            </div>
            <div className="emptydiv1"></div>
            <div className="emptydiv2"></div>
            <hr className="dashed-line" />
            <h4
              style={styleHeading}
            >
              {objectiveHeading}
            </h4>
            <p
              className="object"
              style={styleParagraph}
            >
              {personalInfo.object}
            </p>
          </div>
          <hr className="dashed-line" />
          <div className="soft-skill" style={{ backgroundColor: bgColor, padding: `${padding}px` }}>
            <h4 style={styleHeading}
            >
              {softSkillsHeading}
            </h4>
            <div className="row" style={{ gap: '16px' }}>
              {SoftSkill[0].map((keys, index) => (
                <div key={index} className="technical-skill-item304 col-4">
                  <ul style={{ marginRight: '0px', minWidth: '100px', marginBottom: '-5px' }}>
                    <li style={styleParagraph}
                    >
                      {keys.softSkill}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="technical-" style={{ padding: `${padding}px` ,marginTop:'-50px'}}>
            <h4 style={styleHeading}
            >
              {technicalSkillsHeading}
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              {keyskills[0].map((keys, index) => (
                <div key={index} className="technical-skill-item304">
                  <ul 
                  >
                    <li style={styleParagraph}>
                      {keys.keyskills}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="firstdiv304" style={{ backgroundColor: bgColor, padding: `${padding}px`,marginTop:'-50px' }}>
            <div className="me-3">
              <div className="experience-section304">
                <h4 style={styleHeading}
                >
                  {experienceHeading}
                </h4>
                {work[0].map((works, index) => (
                  <div key={index} className="employment-history304"
                    style={{ marginBottom: `${sectionSpacing}px` }}>
                    <div className="exp-inner304">
                      <p style={styleParagraph}
                        className="employment-detail304"
                      >
                       
                        <b style={{...styleParagraph,fontWeight:'500'}}>{works.jobtitle}</b>
                        <br />
                        {works.organization} {works.city || ' '} {/* Corrected from work.city */}
                      </p>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p style={styleParagraph}
                          className="employment-detail304"
                        >
                          <i style={styleParagraph}>{works.startYear} - {works.endYear}</i>
                        </p>
                        <p style={styleParagraph}
                          className="employment-detail304"
                        >
                          {works.aboutexperience}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="education-section304 mt-1" style={{marginTop:'-30px'}}>
                <h4 
                  className="details-title304"
                  style={styleHeading}
                >
                  {educationHeading}
                </h4>
                {education[0].map((edu, index) => (
                  <div key={index} className="education-item304" style={{ marginBottom: `${sectionSpacing}px` }}>
                    <div className="certificate-item304" style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <p style={styleParagraph}
                          className="employment-detail304"
                        >
                          {edu.degree}
                        </p>
                        <p style={styleParagraph}
                          className="employment-detail304"
                        >
                          {edu.university}
                        </p>
                      </div>
                      <div>
                        <p style={styleParagraph}
                          className="employment-detail304"
                        >
                          {edu.startYear}-{edu.endYear}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="" style={{marginTop:'-50px'}}>
                <div className="d-flex" style={{ marginBottom: '5px' }}>
                  <h4 style={styleHeading}
                  >
                    {languageHeading}
                  </h4>
                </div>
                {languages[0].reduce((result, _, index, array) => {
                  if (index % 2 === 0) result.push(array.slice(index, index + 2));
                  return result;
                }, []).map((chunk, rowIndex) => (
                  <div key={rowIndex} className="" style={{display:'flex', justifyContent:'space-between' ,flexWrap:'wrap', gap:'16px'}}>
                    {chunk.map((keys, colIndex) => (
                      <div
                        key={colIndex}
                        className="col-6 justify-content-between"
                        style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                        <p
                          className="language"
                          style={styleParagraph} >
                          {keys.language}
                        </p>
                        <div
                          style={styleParagraph}
                        >
                          <div
                            style={styleParagraph}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="" style={{marginTop:'-50px'}}>
                <div className="technical-skills-title304 mt-1">
                  <h4 style={styleHeading}
                  >
                    {interestHeading}
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                    {Hobbies[0].map((keys, index) => (
                      <div key={index} className="d-flex align-items-center">
                        <ul 
                        >
                          <li style={styleParagraph}
                          >
                            {/* Uncomment if you want to reintroduce hobby icons */}
                            {/* <span style={{ marginRight: '10px', fontSize: '20px' }}>
                              {HobbyIcons[keys.hobbies] || '🎯'}
                            </span> */}
                            {keys.hobbies}
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>

                  {project?.length >= 0 && (
                    <div className="technical-skills-title301 mt-1" style={{ marginTop: '-50px' }}>
                      <h4
                        style={styleHeading}
                      >
                        PROJECT
                      </h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                        {project[0].map((keys, index) => (
                          <div key={index} className="d-flex justify-content-start align-items-start" style={{ flexDirection: 'column' }}>
                            <p>
                              <small style={stylesmall}> <strong style={stylesmall}>Project Link:- </strong>{keys.link}</small>
                            </p>
                            <p>
                              <small style={stylesmall}> <strong style={stylesmall}>Start Time:-</strong>{keys.startTime}</small> <small style={stylesmall}> <strong style={stylesmall}>End Time:-</strong>{keys.endTime}</small>
                            </p>
                            <p>

                            </p>
                            <p>
                              <small style={stylesmall}> <strong style={stylesmall}>Project Description:-</strong>{keys.description}</small>
                            </p>


                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {certificate?.[0].length >= 0 && (
                    <div className="technical-skills-title301 mt-1" style={{ marginTop: '-50px' }}>
                      <h4 style={styleHeading}
                      // style={{marginTop:'-100px'}}
                      >
                        CERTIFICATE
                      </h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                        {certificate?.[0].map((keys, index) => (
                          <div key={index} className="d-flex align-items-start justify-content-start" style={{ flexDirection: 'column' }}>
                            <p><strong style={stylesmall}>CertificateName:-</strong> <small style={stylesmall}>{keys.certificateName}</small></p>
                            <p><strong style={stylesmall}>Organization:-</strong> <small style={stylesmall}>{keys.organization}</small></p>
                            <p><strong style={stylesmall}>IssueDate:-</strong> <small style={stylesmall}>{keys.issueDate}</small></p>
                            <p><strong style={stylesmall}>Description</strong> <small style={stylesmall}>{keys.description}</small></p>

                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
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
          elementId="Alisha_mirza304"
        />
      </div>
    </div>
  );
}