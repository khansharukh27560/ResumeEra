import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { marriedData } from '../../Redux/action';
import { useSelector } from 'react-redux';
import '../../component/Shadi article/shadiArticle css/shadiformfordata.css';
import IconPickerModal from './IconPickerModal';
import Popup from 'reactjs-popup';
import kiss from '../../image/shadi biodata/Muslim merrieage biodata/OtherImage/converted-image (2).webp'
export default function PersonalInfoForm() {
  const [formData, setFormData] = useState(localStorage.getItem('formData') ? JSON.parse(localStorage.getItem('formData')) :{
  image1: {},
  // icon: { fileData: '', fileName: '' },
  fullName: {kiss},
  dob: '',
  birthTime: '',
  birthPlace: '',
  religion: '',
  caste: '',
  height: '',
  bloodGroup: '',
  education: '',
  occupation: '',
  fatherName: '',
  fatherOccupation: '',
  motherName: '',
  totalSisters: '',
  totalBrothers: '',
  mobile: '',
  address: ''
});

// const fileInputRef = useRef(null);
  const result = useSelector((state) => state.reducer.templatePage[0])
  const result1 = useSelector((state) => state.reducer);
  console.log('result1:-', result1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log('result in personal info form:-', result);
  useEffect(() => {
    const savedData = localStorage.getItem('personalInfo');
    if (savedData) {
      setFormData(JSON.parse(savedData)); // Populate form with saved data if available
    }
  }, []);

  const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value
  }));
};
const handleImageChange = (e) => {
  const { name, files } = e.target;
  
  if (name === 'image1' && files && files[0]) {
    const file = files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        image1: {
          fileData: reader.result,
          fileName: file.name
        }
      }));
    };

    reader.readAsDataURL(file);
  }
};


  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('personalInfo', [JSON.stringify(formData)]);
    dispatch(marriedData(formData));
    const path = `/preview${result}`;
    navigate(path);
  };

  return (
    <div>
      <h2>Personal Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <IconPickerModal />
          </div>
          <h3>Personal Information</h3>
          <div>
            <input
              name='image1'
              type="file"
              accept="image/*"
              onChange={handleImageChange}  // Trigger when file is selected
            />
            {formData.image1 && (
              <div>
                <h4>Image Preview:</h4>
                <img src={formData.image1} alt="Uploaded Preview" width="200" />
              </div>
            )}
          </div>
          <div>

            <label>Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Birth Time:</label>
            <input
              type="time"
              name="birthTime"
              value={formData.birthTime}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Birth Place:</label>
            <input
              type="text"
              name="birthPlace"
              value={formData.birthPlace}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Religion:</label>
            <input
              type="text"
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Caste:</label>
            <input
              type="text"
              name="caste"
              value={formData.caste}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Height:</label>
            <input
              type="text"
              name="height"
              value={formData.height}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Blood Group:</label>
            <input
              type="text"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Education:</label>
            <input
              type="text"
              name="education"
              value={formData.education}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Occupation/Job:</label>
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Family Background Section */}
        <div>
          <h3>Family Background</h3>
          <div>
            <label>Father's Name:</label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Father's Occupation:</label>
            <input
              type="text"
              name="fatherOccupation"
              value={formData.fatherOccupation}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Mother's Name:</label>
            <input
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Total Sisters:</label>
            <input
              type="number"
              name="totalSisters"
              value={formData.totalSisters}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Total Brothers:</label>
            <input
              type="number"
              name="totalBrothers"
              value={formData.totalBrothers}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Mobile Number:</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Address:</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className='icon-picker-wrapper'>
          <Popup trigger={<button type='button'>Upload Your Information</button>} model nested>
            {(close) => (
              <div className='modal-content'>
                <h3>✅ Aapka data save ho gaya!</h3>
                <button
                  onClick={(e) => {
                    handleSubmit(e); // pehle form ya data handle karo
                    close();        // phir modal close karo
                  }}
                  className='close-btn'
                  type='submit'
                >
                  Close
                </button>      
                        </div>
            )}
          </Popup>
        </div>
      </form>
    </div>
  );
}