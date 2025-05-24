// import { templatePage } from "./action";

// import { coverletters, techImages } from "./action";

// import { ProjectData } from "./action";

// import { addReferences, certificateData, coverletters } from "./action";

// import { addSoftSkills } from "./action";

const initialState = {
  personalInfo:[],
  workExperience:[],
  education:[],
  keySkills: [],
  templatePage:[],
  addHobies:[],
  addSoftSkills:[],
  addLanguage:[],
  socialMediaLink:[],
  honorAndaward:[],
  addReference:[],
  coverletterss: [],
  certificateData: [],
  projectData: [],
  images: [],
  techImages: [],
  coverImages: [],
  shadiData:[],
  shadicarddata:[],
  selectedIcon:[],

};

const reducer = (state = initialState,action) => {
  switch (action.type) {
    case 'personalinfo_data':
      const updatedPersonalInfo = action.payload || JSON.parse(localStorage.getItem("personalInfoData"));
      // Save to localStorage whenever there's an update
      localStorage.setItem("personalInfoData", JSON.stringify(updatedPersonalInfo));
      return {
        ...state,
        personalInfo: updatedPersonalInfo,
      };
    case 'workEx_data':
      console.log('Updating state with work experience data:', action.payload);
      return {
        ...state,
        workExperience: [ action.payload],
      };
    case 'education_data':
      console.log('Updating state with education data:', action.payload);
      return {
        ...state,
        education: [ action.payload],
      };
    case 'keyskills_data':
      console.log('Updating state with key skills data:', action.payload);
      return {
        ...state,
        keySkills: [ action.payload],
      };
    case 'template_page':
      console.log('updating state with template page:',action.payload)
      return{
        ...state,
        templatePage:[action.payload]
      } 
    case 'add_Hobbies':
      return{
        ...state,
        addHobies:[action.payload]
      }
    case 'add_soft_skills':
      return{
        ...state,
        addSoftSkills:[action.payload]
      }   
    case 'add_Language':
      return{
        ...state,
        addLanguage:[action.payload]
      }  
    case 'social_media':
      return{
        ...state,
        socialMediaLink:[action.payload]
      }
      case 'honor_and_award':
      return{
        ...state,
        honorAndaward:[action.payload]
      }
      case 'add_references':
        return{
          ...state,
          addReference:[action.payload]
        }
        case 'cover_letter':
          
        return{
          ...state,
          coverletterss:[action.payload]
        } 
        case 'certificate_Data':  
        return{
          ...state,
          certificateData:[action.payload]
        }
        case 'Project_Data':  
        return{
          ...state,
          projectData:[action.payload]
        }
        case 'LOAD_IMAGES':  
        return{
          ...state,
          images:[action.payload]
        }
        case 'TECH_IMAGES':  
        return{
          ...state,
          techImages:[action.payload]
        }
        case 'COVER_IMAGE':  
        return{
          ...state,
          coverletters:[action.payload]
        } 
        case 'Form_Data':  
        console.log('Updating state with formdata icon reducer data:', action.payload);
        return{
          ...state,
          shadiData:[action.payload]
        } 
        case 'selected_Shadi_Card':  
        return{
          ...state,
          shadicarddata:[action.payload]
        } 
        case 'selected_Icon':  
        return{
          ...state,
          selectedIcon:[action.payload]
        }  
    default:
      return state;
  }
};

export default reducer;
