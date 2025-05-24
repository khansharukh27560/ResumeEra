import React, { useState, useEffect } from 'react';
import '../previewfolder/CSS/preview301.css';

import { useSelector } from 'react-redux';
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';
// import Toolbar from '../Toolbar';
import PreviewHeader from '../PreviewHeader';
import Toolbar, { changeAlignment, toggleStyle, toggleList } from '../Toolbar'
export default function Preview301() {
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

  const styleHeading = {
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
      <div className="main301 d-md-flex marging">
        <Toolbar toggleStyle={toggleStyle} changeAlignment={changeAlignment} toggleList={toggleList} />
        <div
          className="preview301"
          style={{ backgroundColor: bgColor, margin: `${margin}px` }}
          id="Alisha_mirza301"
          contentEditable
        >
          <div className="personalInfo301" style={{ backgroundColor: bgColor, padding: `${padding}px` }}>
            <div className="bluelines">
              <div className="personal-info">
              <h4
                className='heading'
                style={{...styleHeading,fontSize: `${headingSize * 1.5}px`,}}
              >
                {personalInfo.firstName} {personalInfo.lastName}
              </h4>
              <p
                className="jobtitle"
                style={styleParagraph}
              >
                {work[0][0].jobtitle} {/* Simplified to display only the first job title */}
              </p>
            </div>
            </div>
            

            <div className="contact301 " style={{marginTop:'70px'}}>
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

            </div>
            <div>
              {socialMediaLink[0].map((item, index) => (
                <ul key={index}>
                  <li style={styleParagraph} className='list-unstyled'>
                    {item.url}
                  </li>
                </ul>
              ))}
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
            <h4 style={styleHeading}
            >
              {softSkillsHeading}
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              {SoftSkill[0].map((keys, index) => (
                <div key={index} className="technical-skill-item301">
                  <ul style={{ marginRight: '0px', minWidth: '100px', marginBottom: '-5px' }}>
                    <li style={styleParagraph}
                    >
                      {keys.softSkill} {/* Corrected from softSkill to match Redux state */}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="firstdiv301" style={{ padding: `${padding}px` }}>
            <div className="me-3">
              <div className="experience-section301">
                <h4
                  style={styleHeading}
                  className="details-title301"
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
              <div className="language-301">
                <h4
                  style={styleHeading}
                >
                  {languageHeading}
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                  {languages[0].map((keys, index) => (
                    <div key={index} className="language-item301">
                      <p
                        style={styleParagraph}
                      >
                        {keys.language}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="technical-">
                <h4 style={styleHeading}
                >
                  {technicalSkillsHeading}
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                  {keyskills[0].map((keys, index) => (
                    <div key={index} className="technical-skill-item301">
                      <ul
                        style={styleParagraph}
                      >
                        <li
                          style={styleParagraph}
                        >
                          {keys.keyskills}
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="technical-skills-title301 mt-1">
                <h4
                  style={styleHeading}
                >
                  {interestHeading}
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                  {Hobbies[0].map((keys, index) => (
                    <div key={index} className="d-flex align-items-center">
                      <ul

                      >
                        <li
                          style={styleParagraph}
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
      </div>
    </div>
  );
}