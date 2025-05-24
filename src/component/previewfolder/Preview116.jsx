import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import GoogleAd from '../adFolder/GoogleAd';
import HobbyIcons from '../HobbyIcons';
import './CSS/preview116.css';
import PdfDownloadButton from '../PdfDownloadButton';
import PreviewHeader from '../PreviewHeader';
import Toolbar from '../Toolbar';

const Preview116 = () => {
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
  
  const [skillsHeading, setSkillsHeading] = useState('Skill');
  

  // Redux state selectors
  // const navigate = useNavigate();
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
  const certificate = useSelector((state) => [state.reducer.certificateData[0]]);


  console.log('hobbies preview 116:-', Hobbies);
  console.log('honor and award:-', Honor);

  // Responsive heading size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 720) {
        setHeadingSize(14); // Smaller heading size for mobile
      } else {
        setHeadingSize(20); // Default heading size
      }
    };
    const changeAlignment = (alignment) => {
      document.execCommand('justify' + alignment, false, null);
    };

    const toggleStyle = (style) => {
      document.execCommand(style, false, null);
    };

    // Function to toggle lists (bullet and numbered)
    const toggleList = (listType) => {
      document.execCommand(listType, false, null);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle heading edits
  const handleEdit = (e, defaultValue, setter) => {
    setter(e.target.textContent.trim() || defaultValue);
  };
  const changeAlignment = (alignment) => {
    document.execCommand('justify' + alignment, false, null);
  };

  const toggleStyle = (style) => {
    document.execCommand(style, false, null);
  };

  // Function to toggle lists (bullet and numbered)
  const toggleList = (listType) => {
    document.execCommand(listType, false, null);
  };
  const paragraphStyle = {
    fontSize: `${headingSize}px`,
    color: headingColor,
    fontFamily: fontStyle,
    lineHeight: `${lineSpacing}em`,
  };
  const paragraphStyles = {
    fontSize: `${fontSize}px`,
    color: fontColor,
    fontFamily: fontStyle,
    lineHeight: `${lineSpacing}em`,
  };
  return (
    <div>
      <PreviewHeader />
      <GoogleAd />
      <div className="main116 marging">
        <Toolbar toggleStyle={toggleStyle} changeAlignment={changeAlignment} toggleList={toggleList} />
        <div
          className="Preview116"
          style={{
            backgroundColor: bgColor,
            margin: `${margin}px`,
            padding: `${padding}px`,
          }}
          id="Alisha_mirza302"
          contentEditable
          suppressContentEditableWarning
        >
          <div
            style={{
              color: headingColor,
              fontFamily: fontStyle,
              fontSize: headingSize,

            }}
            className="Name-positio-summary116"
          >
            <h3>
              {personalInfo.firstName} {personalInfo.lastName}
            </h3>
            <p
              style={{...paragraphStyles,padding:'4px'}}
              className="jobtitle116"
            >
              {work[0][0].jobtitle} {/* Simplified to display only the first job title */}
            </p>
            <p
              style={paragraphStyles}
              className="object116"

            >
              {personalInfo.object}
            </p>
          </div>
          <div className="contactdiv116" style={{ backgroundColor: headingColor, padding: `${padding}px` }}>
            <div className="contactinnerdiv116">
              <i className="bi bi-geo-alt-fill me-2 ms-2" style={{ color: fontColor, fontSize: `${fontSize}px` }} />
              <p
                style={{...paragraphStyles,padding:'4px'}}
              >
                {personalInfo.state} {personalInfo.postalCode}
              </p>
            </div>
            <div className="contactinnerdiv116">
              <i className="bi bi-telephone-fill me-2 ms-2" style={{ color: fontColor, fontSize: `${fontSize}px` }} />
              <p
                style={{...paragraphStyles,padding:'4px'}}
              >
                {personalInfo.mobileNumber}
              </p>
            </div>
            <div className="contactinnerdiv116">
              <i className="bi bi-envelope me-2 ms-2" style={{ color: fontColor, fontSize: `${fontSize}px` }} />
              <p
                style={{...paragraphStyles,padding:'4px'}}
              >
                {personalInfo.email}
              </p>
            </div>
            <div className="contactinnerdiv116">
              <i className="bi bi-github ms-2" style={{ color: fontColor, fontSize: `${fontSize}px` }} />
              <p>
                {socialMediaLink && socialMediaLink[0].map((link,) => (
                  <div key={link.type}>
                    <p
                      style={{...paragraphStyles,padding:'4px'}}
                    >{link.url}</p>
                    <p></p>
                  </div>
                ))}
              </p>
            </div>
          </div>
          <div className="combine-div116 mt-5" style={{ display: 'flex', padding: `${padding}px` }}>
            <div className="work-education me-4" style={{ width: '50%' }}>
              <div className="experience-section116">
                
              <div className='icon-116'>
                  <div style={{width:headingSize,height:headingSize,border:'1px solid ',border: `6px solid ${headingColor}`,
                  borderRadius:'10px',padding:'10px',
                  }} className='icon-inner-116 d-flex justify-content-center align-items-center'>
                    <i class="fa-solid fa-vial-virus" style={{
                      fontSize: `${fontSize}px`,
                      border: ''

                    }} />
                  </div>
                  <h6
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handleEdit(e, 'Skill', setSkillsHeading)}
                    style={paragraphStyle}
                  >WORK EXPERIENCE</h6>
                </div>
                {work[0].map((works, index) => (
                  <div key={index} className="employment-history116 ms-4" style={{ marginBottom: `${sectionSpacing}px` }}>
                    <div className="exp-inner1 " style={{marginTop:'-20px'}}>
                      <p
                        style={{
                          fontSize: `${fontSize}px`,
                          color: fontColor,
                          fontFamily: fontStyle,
                          marginBottom: '0px',
                          lineHeight: `${lineSpacing}em`,
                        }}
                        className="employment-detail116"
                      >
                        {works.jobtitle}
                      </p>
                      <p
                        style={{
                          fontSize: `${fontSize}px`,
                          color: fontColor,
                          fontFamily: fontStyle,
                          marginBottom: '0px',
                          lineHeight: `${lineSpacing}em`,
                        }}
                        className="employment-detail116"
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
                        className="employment-duration116"
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
                        className="aboutexperience116"
                      >
                        {works.aboutexperience}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div>

                <div className='icon-116'>
                  <div style={{
                    width: headingSize, height: headingSize, border: '1px solid ', border: `6px solid ${headingColor}`,
                    borderRadius: '10px', padding: '10px',
                  }} className='icon-inner-116 d-flex justify-content-center align-items-center'>
                    <i class="fa-solid fa-school" style={{
                      fontSize: `${fontSize}px`,
                      border: ''

                    }} />
                  </div>
                  <h6
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handleEdit(e, 'Skill', setSkillsHeading)}
                    style={paragraphStyle}
                  >EDUCATION</h6>
                </div>
                {education[0].map((edu, index) => (
                  <div key={index} className="education-item116" style={{ marginBottom: `${sectionSpacing}px` }}>
                    <div className="d-flex justify-content-between">
                      <div className="ms-4" style={{marginTop:'-20px',marginBottom:'-20px'}}>
                        <p
                          style={{
                            fontSize: `${fontSize}px`,
                            color: fontColor,
                            fontFamily: fontStyle,
                            marginBottom: '0px',
                            lineHeight: `${lineSpacing}em`,
                          }}
                          className="employment-detail116"
                        >
                          {edu.degree}
                        </p>
                        <p
                          style={{
                            fontSize: `${fontSize}px`,
                            color: fontColor,
                            fontFamily: fontStyle,
                            marginBottom: '0px',
                            lineHeight: `${lineSpacing}em`,
                          }}
                          className="employment-detail116"
                        >
                          {edu.university}
                        </p>
                        <p
                          style={{
                            fontSize: `${fontSize}px`,
                            color: fontColor,
                            fontFamily: fontStyle,
                            marginBottom: '0px',
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
                          className="employment-detail116 me-3"
                        >
                          {edu.startYear}-{edu.endYear}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {certificate && (
              <div>
                
                <div className='icon-116'>
                  <div style={{
                    width: headingSize, height: headingSize, border: '1px solid ', border: `6px solid ${headingColor}`,
                    borderRadius: '10px', padding: '10px',
                  }} className='icon-inner-116 d-flex justify-content-center align-items-center'>
                    <i class="fa-solid fa-school" style={{
                      fontSize: `${fontSize}px`,
                      border: ''

                    }} />
                  </div>
                  <h6
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handleEdit(e, 'Skill', setSkillsHeading)}
                    style={paragraphStyle}
                  >CERTIFICATE</h6>
                </div>
                {certificate[0].map((certi, index) => (
                  <div key={index} className="education-item116" style={{ marginBottom: `${sectionSpacing}px` }}>
                    <div className="d-flex justify-content-between">
                      <div className="ms-4" style={{marginTop:'-20px'}}>
                        <p style={{...paragraphStyles,lineHeight:'.8'}}> {certi.certificateName}</p>
                        <p style={{...paragraphStyles,lineHeight:'.8'}}> {certi.organization}</p>
                        <p style={{...paragraphStyles,lineHeight:'.8'}}> {certi.issueDate}</p>
                        <div className='mt-4'>
                          <p style={paragraphStyles}>{certi.description}</p>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              )}
            </div>
            <div style={{ width: '50%' }}>
              <div className="inner-116-1 me-4">

                <div className='icon-116'>
                  <div style={{
                    width: headingSize, height: headingSize, border: '1px solid ', border: `6px solid ${headingColor}`,
                    borderRadius: '10px', padding: '10px',
                  }} className='icon-inner-116 d-flex justify-content-center align-items-center'>
                    <i class="fa-solid fa-brain" style={{
                      fontSize: `${fontSize}px`,
                      border: ''

                    }} />
                  </div>
                  <h6
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handleEdit(e, 'Skill', setSkillsHeading)}
                    style={paragraphStyle}
                  >{skillsHeading}</h6>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                  {keyskills[0].map((keys, index) => (
                    <div key={index} className="d-flex justify-content-between mt-4" >
                      <p
                        className="technical-skill-item116"
                        style={{
                          marginTop: '-40px',
                          // marginBottom:'-20px',
                          backgroundColor: headingColor,
                          fontSize: `${fontSize}px`,
                          color: fontColor,
                          fontFamily: fontStyle,
                          lineHeight: `${lineSpacing}em`,
                          padding: '5px 5px', // Added padding for better appearance
                        }}
                      >
                        {keys.keyskills}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="inner-116-1">

                <div className='icon-116' style={{marginTop:'-20px'}}>
                  <div style={{
                    width: headingSize, height: headingSize, border: '1px solid ', border: `6px solid ${headingColor}`,
                    borderRadius: '10px', padding: '10px',
                  }} className='icon-inner-116 d-flex justify-content-center align-items-center'>
                    <i class="fa-solid fa-diagram-project" style={{
                      fontSize: `${fontSize}px`,
                      border: ''

                    }} />
                  </div>
                  <h6
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handleEdit(e, 'Skill', setSkillsHeading)}
                    style={paragraphStyle}
                  >PERSONAL PROJECT</h6>
                </div>
                <div className='inner-116-1'>
                  {project[0].map((pro, index) => (
                    <div key={index} style={{ marginBottom: `${sectionSpacing}px` }}>
                      <p
                        style={{
                          marginTop:'25px',
                          fontSize: `${fontSize}px`,
                          color: fontColor,
                          fontFamily: fontStyle,
                          lineHeight: `${lineSpacing}em`,
                        }}
                      >
                       <strong> Link:-</strong> {pro.link} <br /><strong>Period:-</strong> ({pro.startTime} - {pro.endTime})
                      </p>
                      <p
                        style={{
                          fontSize: `${fontSize}px`,
                          color: fontColor,
                          fontFamily: fontStyle,
                          lineHeight: `${lineSpacing}em`,
                        }}
                      >
                        {pro.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className=" inner-116-1">

                <div className='icon-116'>
                  <div style={{
                    width: headingSize, height: headingSize, border: '1px solid ', border: `6px solid ${headingColor}`,
                    borderRadius: '10px', padding: '10px',
                  }} className='icon-inner-116 d-flex justify-content-center align-items-center'>
                    <i class="fa-solid fa-language" style={{
                      fontSize: `${fontSize}px`,
                      border: ''

                    }} />
                  </div>
                  <h6
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handleEdit(e, 'Skill', setSkillsHeading)}
                    style={paragraphStyle}
                  >Language</h6>
                </div>
                {languages[0].map((keys, index) => (
                  <div key={index} className="d-flex justify-content-between" style={{ marginBottom: `${sectionSpacing}px` }}>
                    <div className="d-flex">
                      <p
                        style={{
                          marginTop:'-20px',
                          fontSize: `${fontSize}px`,
                          color: fontColor,
                          fontFamily: fontStyle,
                          lineHeight: `${lineSpacing}em`,
                        }}
                      >
                        {keys.language}
                      </p>
                    </div>
                    <div className="star-rating ms-3 w-50">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`bi bi-star${i < keys.rating ? '-fill' : ''}`}
                          style={{
                            color: i < keys.rating ? headingColor : 'grey',
                            fontSize: `${fontSize}px`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="technical-skills-title109 mt-3">
                <div className='icon-116-1'>

                  <div className='icon-116'style={{marginTop:'-20px'}}>
                    <div style={{
                      width: headingSize, height: headingSize, border: '1px solid ', border: `6px solid ${headingColor}`,
                      borderRadius: '10px', padding: '10px',
                    }} className='icon-inner-116 d-flex justify-content-center align-items-center'>
                      <i class="fa-solid fa-futbol" style={{
                        fontSize: `${fontSize}px`,
                        

                      }} />
                    </div>
                    <h6
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => handleEdit(e, 'Skill', setSkillsHeading)}
                      style={paragraphStyle}
                    >Hobbies</h6>
                  </div>
                </div>
                {Hobbies[0].map((keys, index) => (
                  <div
                    key={index}
                    className="d-flex"
                    style={{ marginBottom: `${sectionSpacing}px`,marginTop:'-20px', }}
                  >
                    <div className='d-flex'>
<span style={{ marginRight: '10px', fontSize: '20px' }}>
                      {HobbyIcons[keys.hobbies] || '🎯'}
                    </span>
                    <p
                      style={{
                        
                        marginBottom: '-5px',
                        color: fontColor,
                        fontFamily: fontStyle,
                        fontSize: `${fontSize}px`,
                        lineHeight: `${lineSpacing}em`,
                      }}
                    >
                      {keys.hobbies}
                    </p>
                    </div>
                    
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
          elementId="Alisha_mirza302"
        />
      </div>
    </div>
  );
};

export default Preview116;