
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../previewfolder/CSS/preview5.css';
import GoogleAd from '../adFolder/GoogleAd';
import PdfDownloadButton from '../PdfDownloadButton';
import Toolbar from '../Toolbar';
import { toggleList,toggleStyle,changeAlignment } from '../Toolbar';
import PreviewHeader from '../PreviewHeader';
const Preview5 = () => {
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
   
    
    const personalInfo = useSelector((state) => state.reducer.personalInfo);
    const education = useSelector((state) => [state.reducer.education[0]]);
    const keyskills = useSelector((state) => [state.reducer.keySkills[0]]);
    const work = useSelector((state) => [state.reducer.workExperience[0]]);
    const LLanguage = useSelector((state) => [state.reducer.addLanguage[0]]);
    const Hobbies = useSelector((state) => [state.reducer.addHobies[0]]);
    
    return (
        <div>
            <header style={{ paddingLeft: '10px', paddingRight: '10px', textAlign: 'center' }}>
               <PreviewHeader/>
            </header>
            <div className="w-100"><GoogleAd /></div>
            <div className="d-md-flex marging">
                <Toolbar toggleStyle={toggleStyle} changeAlignment={changeAlignment} toggleList={toggleList}  />
                <div className="preview05" id="Alish_mirza1" style={{ backgroundColor: bgColor }}>
                    <div className="contact05" style={{ backgroundColor: 'grey' }}>
                        <img src={personalInfo.image} className="" alt="Selected" style={{ width: '100px', height: '100px', borderRadius: '50%', border: '3px solid grey' }} />
                        <h3 style={{ color: headingColor, fontFamily: fontStyle, fontSize: `${headingSize}px` }}> Contact</h3>
                        <hr style={{ borderColor: fontColor }} />
                        <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}><i className="bi bi-telephone-fill me-2"></i>{personalInfo.mobileNumber}</p>
                        <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px`, wordBreak: 'break-all' }}><i className="bi bi-envelope me-2"></i>{personalInfo.email}</p>
                        <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px`, wordBreak: 'break-all' }}><i className="bi bi-geo-alt-fill me-2" ></i>{personalInfo.address} {personalInfo.city} {personalInfo.state} {personalInfo.postalCode}</p>
                        
                        <h3 style={{ color: headingColor, fontFamily: fontStyle, fontSize: `${headingSize}px` }}>Education</h3>
                        <hr style={{ borderColor: fontColor }} />
                        {education[0].map((edu, index) => (
                            <div key={index}>
                                <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}><b> {edu.univercity}</b></p>
                                <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}>{edu.type}</p>
                                <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}>{edu.startYear} - {edu.endYear}</p>
                            </div>
                        ))}
                        
                        <h3 style={{ color: headingColor, fontFamily: fontStyle, fontSize: `${headingSize}px` }}>Skills</h3>
                        <hr style={{ borderColor: fontColor }} />
                        {keyskills[0].map((keys, index) => (
                            <div key={index} className="text-center">
                                <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}>{keys.keyskills}</p>
                                <hr style={{ height: '2px', borderColor: fontColor }} />
                            </div>
                        ))}
                        
                        <h3 style={{ color: headingColor, fontFamily: fontStyle, fontSize: `${headingSize}px` }}>Language</h3>
                        <hr style={{ borderColor: fontColor }} />
                        {LLanguage[0].map((lan, index) => (
                            <div key={index}>
                                <ul>
                                    <li>
                                        <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}>{lan.language}</p>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="second05">
                        <h3 className="" style={{ color: headingColor, fontFamily: fontStyle, fontSize: `${headingSize}px` }}>{personalInfo.firstName} {personalInfo.lastName}</h3>
                        <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}>
                            {work[0][0].jobtitle}
                        </p>
                        <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }} className='mt-4'>{personalInfo.object}</p>

                        <h3 style={{ color: headingColor, fontFamily: fontStyle, fontSize: `${headingSize}px` }} className='mt-4'>Job Experience</h3>
                        <hr style={{ borderColor: fontColor }} />
                        {work[0].map((works, index) => (
                            <div key={index}>
                                <ul>
                                    <li className="work-item05">
                                        <div className="lines"></div>
                                        <div className="circle"></div>
                                        <div className="content05">
                                            <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}><b>{works.jobtitle}</b></p>
                                            <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}>{works.startYear}-{works.endYear}</p>
                                            <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}>{works.organization}</p>
                                        </div>
                                        <div className="circle"></div>
                                    </li>
                                </ul>
                            </div>
                        ))}
                        
                        <div>
                            <h3 style={{ color: headingColor, fontFamily: fontStyle, fontSize: `${headingSize}px` }}>Hobbies</h3>
                            <hr style={{ borderColor: fontColor }} />
                            {Hobbies[0].map((hobb, index) => (
                                <div key={index}>
                                    <ul>
                                        <li>
                                           <p style={{ color: fontColor, fontFamily: fontStyle, fontSize: `${fontSize}px` }}> {hobb.hobbies}</p>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="resume-download-section0">
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
                              elementId="Alisha_mirza306" // Kept as original; update to Alisha_mirza307 if intended
                            />
                          </div>
                
            </div>
            <div className="w-100"><GoogleAd /></div>
        </div>
    )
}
export default Preview5;
