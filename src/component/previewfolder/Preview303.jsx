import React, { useState, useEffect } from 'react';
import GoogleAd from '../adFolder/GoogleAd';
import { useSelector } from 'react-redux';
import '../previewfolder/CSS/preview303.css';
import PdfDownloadButton from '../PdfDownloadButton';
import Toolbar from '../Toolbar';
import { changeAlignment, toggleStyle, toggleList } from '../Toolbar'
import PreviewHeader from '../PreviewHeader';

export default function Preview303() {
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
  const [objectHeading, setObjectHeading] = useState('Object Statement');
  const [softSkillsHeading, setSoftSkillsHeading] = useState('Soft Skill');
  const [technicalSkillsHeading, setTechnicalSkillsHeading] = useState('Technical Skill');
  const [contactHeading, setContactHeading] = useState('Contact');
  const [experienceHeading, setExperienceHeading] = useState('Work History');
  const [educationHeading, setEducationHeading] = useState('Education');
  const [languageHeading, setLanguageHeading] = useState('Language');
  const [hobbiesHeading, setHobbiesHeading] = useState('Hobbies');

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
      <div className="main303 marging">
        <Toolbar toggleStyle={toggleStyle} changeAlignment={changeAlignment} toggleList={toggleList} />
        <div
          className="preview303"
          style={{ backgroundColor: bgColor, margin: `${margin}px` }}
          id="Alisha_mirza303"
        >
          <div className="blankdiv303"></div>
          <h3
            style={styleHeading}
          >
            {personalInfo.firstName} {personalInfo.lastName}
          </h3>
          <div className="blankdiv303-2"></div>
          <div className="blanckall303-3"></div>
          <div className="innermain303 d-flex justify-content-around" style={{ padding: `${padding}px` }}>
            <div className="inner303-1" style={{ width: '50%' }}>
              <div className="d-flex">
                <h4
                  style={styleHeading}
                >
                  {objectHeading}
                </h4>
                <div className="blanckall303"></div>
              </div>
              <div className="blankdiv303-2"></div>
              <div className="blanckall303-3"></div>
              <p
                className="object303"
                style={styleParagraph}
              >
                {personalInfo.object}
              </p>
              <div className="soft-skill">
                <div className="d-flex">
                  <h4
                    style={styleParagraph}
                  >
                    {softSkillsHeading}
                  </h4>
                  <div className="blanckall303"></div>
                </div>
                <div className="blankdiv303-2"></div>
                <div className="blanckall303-3"></div>
                <div>
                  {SoftSkill[0].map((keys, index) => (
                    <div key={index} className="technical-skill-item303">
                      <ul style={{ marginRight: '0px', minWidth: '100px', marginBottom: '-5px' }}>
                        <li
                          style={styleParagraph}
                        >
                          {keys.softSkill} {/* Corrected from softSkill to match Redux state */}
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="technical-" style={{ backgroundColor: bgColor }}>
                <div className="d-flex">
                  <h4
                    style={styleHeading}
                  >
                    {technicalSkillsHeading}
                  </h4>
                  <div className="blanckall303"></div>
                </div>
                <div className="blankdiv303-2"></div>
                <div className="blanckall303-3"></div>
                <div>
                  {keyskills[0].map((keys, index) => (
                    <div key={index} className="technical-skill-item303">
                      <ul style={{ marginRight: '0px', minWidth: '100px', marginBottom: '-5px' }}>
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
            </div>
            <div className="innerdiv303-2" style={{ width: '40%' }}>
              <div className="contact303">
                <div className="d-flex">
                  <h4
                    style={styleParagraph}
                  >
                    {contactHeading}
                  </h4>
                  <div className="blanckall303"></div>
                </div>
                <div className="blankdiv303-2"></div>
                <div className="blanckall303-3"></div>
                <p
                  style={styleParagraph}
                >
                  ADDRESS:- {personalInfo.state} {personalInfo.postalCode}
                </p>
                <p
                  style={styleParagraph}
                >
                  MOBILE:- {personalInfo.mobileNumber}
                </p>
                <p
                  style={styleParagraph}
                >
                  EMAIL:- {personalInfo.email}
                </p>
                <p
                  style={styleParagraph}
                >
                  GITHUB:- {socialMediaLink?.[0]?.github || 'N/A'}
                </p>
                <p
                  style={styleParagraph}
                >
                  LINKEDIN:- {socialMediaLink?.[0]?.linkedin || 'N/A'}
                </p>
                <p
                  style={styleParagraph}
                >
                  TWITTER:- {socialMediaLink?.[0]?.TWITTER || 'N/A'}
                </p>
              </div>
              <div className="experience-section303">
                <div className="d-flex">
                  <h4 style={styleParagraph}
                  >
                    {experienceHeading}
                  </h4>
                  <div className="blanckall303"></div>
                </div>
                <div className="blankdiv303-2"></div>
                <div className="blanckall303-3"></div>
                {work[0].map((works, index) => (
                  <div key={index} className="employment-history303" style={{ marginBottom: `${sectionSpacing}px` }}>
                    <div className="exp-inner303">
                      <p style={styleParagraph}
                        className="employment-detail303"
                      >
                        <b style={{ fontWeight: 500, color: fontColor }}>{works.jobtitle}</b>
                        <br />
                        {works.organization} {works.city || 'N/A'}
                      </p>
                      <p style={styleParagraph}
                        className="employment-detail303"
                      >
                        <i>{works.startYear} - {works.endYear}</i>
                      </p>
                      <p style={styleParagraph}
                        className="employment-detail303"
                      >
                        {works.aboutexperience}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="education-section303 mt-1">
                <div className="d-flex">
                  <h4 style={styleParagraph}
                  >
                    {educationHeading}
                  </h4>
                  <div className="blanckall303"></div>
                </div>
                <div className="blankdiv303-2"></div>
                <div className="blanckall303-3"></div>
                {education[0].map((edu, index) => (
                  <div key={index} className="education-item303" style={{ marginBottom: `${sectionSpacing}px` }}>
                    <div className="certificate-item303">
                      <p style={styleParagraph}
                        className="employment-detail303"
                      >
                        {edu.degree} in {edu.university}
                      </p>
                      <p style={styleParagraph}
                        className="employment-detail303"
                      >
                        {edu.university}
                      </p>
                      <p style={styleParagraph}
                        className="employment-detail303"
                      >
                        {edu.startYear} - {edu.endYear}, {edu.city}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="language-303">
                <div className="d-flex">
                  <h4 style={styleHeading}
                  >
                    {languageHeading}
                  </h4>
                  <div className="blanckall303"></div>
                </div>
                <div className="blankdiv303-2"></div>
                <div className="blanckall303-3"></div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                  {languages[0].map((keys, index) => (
                    <div key={index} className="language-item303">
                      <p style={styleParagraph}
                      >
                        {keys.language}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="technical-skills-title303 mt-1">
                <div className="d-flex">
                  <h4 style={styleHeading}
                  >
                    {hobbiesHeading}
                  </h4>
                  <div className="blanckall303"></div>
                </div>
                <div className="blankdiv303-2"></div>
                <div className="blanckall303-3"></div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                  {Hobbies[0].map((keys, index) => (
                    <div key={index} className="d-flex align-items-center">
                      <ul style={styleParagraph}
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
              </div>
            </div>
                  <div>
                    hello
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
          elementId="Alisha_mirza303"
        />
      </div>
    </div>
  );
}