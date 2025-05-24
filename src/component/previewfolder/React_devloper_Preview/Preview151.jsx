// import React, { useState } from 'react'
// import { useSelector } from 'react-redux';

// export default function Preview151() {

//     const [inputFields, setInputFields] = useState('resume.pdf');
//         const [bgColor, setBgColor] = useState('#F5DEB3');
//         const [fontStyle, setFontStyle] = useState('Arial');
//         const [fontColor, setFontColor] = useState('white');
//         const [headingColor, setHeadingColor] = useState('white');
//         const [fontSize, setFontSize] = useState(16);
//         const [headingsize, setheadingsize] = useState('25');
//         // PdfDownloadButton के लिए स्टेट्स
//         const [headingSize, setHeadingSize] = useState(25); // headingsize के साथ सिंक करेंगे
//         const [margin, setMargin] = useState(10);
//         const [padding, setPadding] = useState(10);
//         const [lineSpacing, setLineSpacing] = useState(1.2);
//         const [sectionSpacing, setSectionSpacing] = useState(15);
    
//         // हेडिंग्स के लिए स्टेट्स
//         const [nameHeading, setNameHeading] = useState(null);
//         const [contactHeading, setContactHeading] = useState('Contact');
//         const [educationHeading, setEducationHeading] = useState('Education');
//         const [aboutHeading, setAboutHeading] = useState('About');
//         const [jobExperienceHeading, setJobExperienceHeading] = useState('Job Experience');
//         const [skillsHeading, setSkillsHeading] = useState('Skills');
//         const [languageHeading, setLanguageHeading] = useState('Language');
//         const [hobbiesHeading, setHobbiesHeading] = useState('Hobbies');
    
//         const personalInfo = useSelector((state) => state.reducer.personalInfo);
//         const education = useSelector((state) => [state.reducer.education]);
//         const keyskills = useSelector((state) => [state.reducer.keySkills]);
//         const work = useSelector((state) => [state.reducer.workExperience]);
//         const LLanguage = useSelector((state) => state.reducer.addLanguage);
//         const Hobbies = useSelector((state) => state.reducer.addHobbies);
//         const addReference = useSelector((state) => state.reducer.addReference);
//         const addSoftSkills = useSelector((state) => state.reducer.addSoftSkills);
//             const certificateData = useSelector((state) => state.reducer.certificateData);
//             const honorAndaward = useSelector((state) => state.reducer.honorAndaward);
//             const keySkills  = useSelector((state) => state.reducer.keySkills);
//             const projectData = useSelector((state) => state.reducer.projectData);
//             const socialMediaLink = useSelector((state) => state.reducer.socialMediaLink);
            
//         const result = useSelector((state)=>state.reducer)
//         console.log("result:-",result)
    
//         const changeAlignment = (alignment) => {
//             document.execCommand('justify' + alignment, false, null);
//         };
        
//         const toggleStyle = (style) => {
//             document.execCommand(style, false, null);
//         };
    
//         // Function to toggle lists (bullet and numbered)
//         const toggleList = (listType) => {
//             document.execCommand(listType, false, null);
//         };
//   return (
//     <div>
//         <div className='preview151'>
//             <div>
//                 <div>
//                     <h1>soft Skill</h1>
//                     {addSoftSkills && addSoftSkills.map((item, index) => (
//                         <div key={index} className='preview151'>
//                             <p>{item.softSkill}</p>
//                         </div>
//                     ))}
//                     <p></p>
                    

//                 </div>
//             </div>
//             <div></div>

//         </div>





















        
//     </div>
//   )
// }
