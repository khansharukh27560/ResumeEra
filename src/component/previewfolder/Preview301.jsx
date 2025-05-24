import React, { useState, useEffect } from 'react';
import '../previewfolder/CSS/preview301.css';
import { useSelector } from 'react-redux';
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';
import Toolbar, { toggleStyle, toggleList, changeAlignment } from '../Toolbar';
import PreviewHeaer from '../PreviewHeader.jsx';
// import { link } from 'fs';

export default function Preview301() {
  // State for PDF filename and styling options
  const [inputFields, setInputFields] = useState('resume.pdf');
  const [bgColor, setBgColor] = useState('white'); // Default background color
  const [fontStyle, setFontStyle] = useState('Arial'); // Default font style
  const [fontColor, setFontColor] = useState('#000000'); // Default font color (corrected from '#rrggbb')
  const [headingColor, setHeadingColor] = useState('#6a8a3f'); // Default heading color
  const [fontSize, setFontSize] = useState(10); // Font size for paragraphs
  const [headingSize, setHeadingSize] = useState(12); // Font size for headings (replaced fontSizeheading)
  const [margin, setMargin] = useState(0); // Margin for resume wrapper
  const [padding, setPadding] = useState(10); // Padding for sections
  const [lineSpacing, setLineSpacing] = useState(1.2); // Line spacing for text
  const [sectionSpacing, setSectionSpacing] = useState(15); // Spacing between sections

  // Editable headings
  const [softSkillsHeading, setSoftSkillsHeading] = useState('Soft Skill');
  const [experienceHeading, setExperienceHeading] = useState('Work Experience');
  const [educationHeading, setEducationHeading] = useState('Education');
  const [languageHeading, setLanguageHeading] = useState('Language');
  const [technicalSkillsHeading, setTechnicalSkillsHeading] = useState('Technical Skill');
  const [interestHeading, setInterestHeading] = useState('Interest');

  // Redux state selectors
  const personalInfo = useSelector((state) => state.reducer.personalInfo);
  const education = useSelector((state) => [state.reducer.education[0]]);
  const keyskills = useSelector((state) => [state.reducer.keySkills[0]]);
  const work = useSelector((state) => [state.reducer.workExperience[0]]);
  const Honor = useSelector((state) => [state.reducer.honorAndaward[0]]);
  const SoftSkill = useSelector((state) => [state.reducer.addSoftSkills[0]]);
  const socialMediaLink = useSelector((state) => [state.reducer.socialMediaLink[0]]);
  const languages = useSelector((state) => [state.reducer.addLanguage[0]]);
  const Hobbies = useSelector((state) => [state.reducer.addHobies[0]]);
  const project = useSelector((state) => [state.reducer.projectData[0]]);
  const certificate = useSelector((state) => [state.reducer.certificateData?.[0] || []])

  // Handle heading edits
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
    <div className=''>
      <PreviewHeaer />
      <GoogleAd />
      <div className="main301">
        <Toolbar toggleStyle={toggleStyle} changeAlignment={changeAlignment} toggleList={toggleList} />
        <div
          className="preview301"
          style={{ backgroundColor: bgColor, margin: `${margin}px` }}
          id="Alisha_mirza301"
          contentEditable
          spellCheck="false"
        >
          <div className="personalInfo301" style={{ backgroundColor: bgColor, padding: `${padding}px` }}>
            <div className="blueline"></div>
            <h3
              style={styleHeading}
            >
              {personalInfo.firstName} {personalInfo.lastName}
            </h3>
            <p
              className="jobtitle"
              style={styleParagraph}
            >
              {work[0][0].jobtitle} {/* Simplified to display only the first job title */}
            </p>
            <div className="contact301">
              <p
                style={styleParagraph}
              >
                <i className="bi bi-telephone-fill me-2 ms-2" style={{ color: headingColor, fontSize: `${fontSize}px` }} />
                {personalInfo.mobileNumber}
              </p>
              <p
               style={styleParagraph}
              >
                <i className="bi bi-envelope me-2 ms-2" style={{ color: headingColor, fontSize: `${fontSize}px` }} />
                {personalInfo.email}
              </p>
              <p
                style={{ display: 'flex', justifyContent:'start',alignItems: 'center', gap: '10px',flexWrap:'wrap' }}
              >
                <i className="bi bi-envelope me-2 ms-2" style={{ color: headingColor, fontSize: `${fontSize}px` }} />
                {socialMediaLink[0].map((link, index) => (
                  <div key={index} style={{ display: 'flex' }}>
                    <p style={styleParagraph}> {link.url}</p>
                    {index < socialMediaLink.length - 1 && ', '}
                  </div>
                ))}
              </p>
            </div>
            <hr className="dashed-line" />
            <p
              className="object"
              style={styleParagraph}
            >
              {personalInfo.object}
            </p>
          </div>
          <hr className="dashed-line" />
          <div className="soft-skill" style={{ backgroundColor: bgColor, padding: `${padding}px` }}>
            <h4
              style={styleHeading}
            >
              {softSkillsHeading}
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: `${sectionSpacing}px` }} >
              {SoftSkill[0].map((keys, index) => (
                <div key={index} className="technical-skill-item301">
                  <ul style={{ marginRight: '0px', minWidth: '100px', marginBottom: '' }}>
                    <li
                      style={styleParagraph}
                    >
                      {keys?.softSkill} {/* Corrected from softSkill to match Redux state */}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="firstdiv301" style={{ padding: `${padding}px`,marginTop:'-50px'}}>
            <div className="me-3">
              <div className="experience-section301">
                <h4
                                   
                  className="details-title301"
                  style={styleHeading}
                >
                  {experienceHeading}
                </h4>
                {work[0].map((works, index) => (
                  <div key={index} className="employment-history301" style={{ marginBottom: `${sectionSpacing}px` }}>
                    <div className="exp-inner301">
                      <p
                        style={styleParagraph}
                        className="employment-detail301"
                      >
                        <b style={{ fontWeight: 500, color: fontColor }}>{works.jobtitle}</b>
                        <br />
                        {works.organization} {works.city || 'N/A'}
                      </p>
                      <p
                        style={styleParagraph}
                        className="employment-detail301"
                      >
                        <i>{works.startYear} - {works.endYear}</i>
                      </p>
                      <p
                        style={styleParagraph}
                        className="employment-detail301"
                      >
                        {works.aboutexperience}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="education-section301 mt-1">
                <h4
                  className="details-title301"
                  style={styleHeading}
                >
                  {educationHeading}
                </h4>
                {education[0].map((edu, index) => (
                  <div key={index} className="education-item301" style={{ marginBottom: `${sectionSpacing}px` }}>
                    <div className="certificate-item301">
                      <p
                        style={styleParagraph}
                        className="employment-detail301"
                      >
                        {edu.degree} in {edu.university}
                      </p>
                      <p
                        style={styleParagraph}
                        className="employment-detail301"
                      >
                        {edu.university}
                      </p>
                      <p
                        style={styleParagraph}
                        className="employment-detail301"
                      >
                        {edu.startYear} - {edu.endYear}, {edu.city}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="language-301" style={{}}>
                <h4
                  style={styleHeading}
                  className='mb-1'
                >
                  {languageHeading}
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                  {languages[0].map((keys, index) => (
                    <div key={index} className="language-item301">
                      <p style={styleParagraph}>
                        {keys.language}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{marginTop:'-50px'}}>
              <div className="technical-">
                <h4 style={styleHeading} className='mb-1'>
                  {technicalSkillsHeading}
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                  {keyskills[0].map((keys, index) => (
                    <div key={index} className="technical-skill-item301">
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
              {Hobbies[0]?.length >= 0 && (
                <div className="technical-skills-title301 mb-1" style={{marginTop:'-50px'}}>
                  <h4 style={styleHeading} className='mb-1'>
                    {interestHeading}
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                    {Hobbies.length >= 0 && Hobbies[0].map((keys, index) => (
                      <div key={index} className="d-flex align-items-center">
                        <ul>
                          <li
                            style={styleParagraph}
                          >
                            {keys.hobbies}
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project?.length >= 0 && (
                <div className="technical-skills-title301 mt-1" style={{marginTop:'-50px'}}>
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
                          <small style={stylesmall}> <strong style={stylesmall}>Start Time:-</strong>{keys.startTime}</small> <small style={stylesmall}> <strong  style={stylesmall}>End Time:-</strong>{keys.endTime}</small>
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
                <div className="technical-skills-title301 mt-1" style={{marginTop:'-50px'}}>
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
        <div className="resume-download-section d-md-flex justify-content-around mt-3" style={{ width: '100%' }}>
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
            elementId="Alisha_mirza301"
          />
        </div>
        <div className="d-sm-flex"><GoogleAd /><GoogleAd /><GoogleAd /></div>
        <div>
        </div>
      </div>
    </div>
  );
}