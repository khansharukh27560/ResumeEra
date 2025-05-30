import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { certificateData } from "../Redux/action"; // Assuming you have an action for certificates
import "../css/Certificate.css";

import GoogleAd from "./adFolder/GoogleAd";
import { useLocation } from "react-router-dom";
import PopupSave from "./PopupSave";

const suggestions = {
  certificateName: ["AWS Certified", "Microsoft Certified", "Google Cloud"],
  organization: ["Amazon", "Microsoft", "Google", "Coursera"],
};

const Certificate = () => {
  const [showCertificate, setShowCertificate] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [certificates, setCertificates] = useState(() => {
    const savedCertificates = localStorage.getItem("certificates");
    return savedCertificates
      ? JSON.parse(savedCertificates)
      : [
          {
            certificateName: "",
            organization: "",
            issueDate: "",
            description: "",
          },
        ];
  });

  const [activeSuggestions, setActiveSuggestions] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("certificates", JSON.stringify(certificates));
  }, [certificates]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setCertificates((prev) => {
      const updatedCertificates = [...prev];
      updatedCertificates[index] = {
        ...updatedCertificates[index],
        [name]: value.toUpperCase() // Remove toUpperCase() for flexible input
      };
      return updatedCertificates;
    });

    // Set active suggestions
    if (suggestions[name]) {
      const filteredSuggestions = suggestions[name].filter((s) =>
        s.toLowerCase().includes(value.toLowerCase())
      );
      setActiveSuggestions((prev) => ({
        ...prev,
        [index]: { [name]: filteredSuggestions },
      }));
    }
  };

  const handleSuggestionClick = (index, name, suggestion) => {
    setCertificates((prev) => {
      const updatedCertificates = [...prev];
      updatedCertificates[index][name] = suggestion;
      return updatedCertificates;
    });
    setActiveSuggestions((prev) => ({
      ...prev,
      [index]: { [name]: [] }, // Clear suggestions
    }));
  };

  const handleAddMore = () => {
    setCertificates((prevCertificates) => [
      ...prevCertificates,
      {
        certificateName: "",
        organization: "",
        issueDate: "",
        description: "",
      },
    ]);
  };
 

  const handleClickNext = (e) => {
    e.preventDefault();
e.stopPropagation();
    const emptyFieldIndex = certificates.findIndex(
      (certificate) =>
        !certificate.certificateName ||
        !certificate.organization ||
        !certificate.issueDate ||
        !certificate.description
    );

    if (emptyFieldIndex !== -1) {
      alert("Some fields are empty");
      return;
    }
  dispatch(certificateData(certificates))
  };

  const handleDelete = (index) => {
    setCertificates((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <form>
      {showCertificate && (
        <div>
          <div className="profetional-detail">
            <h1 className="multicolor-heading">Your Certificates</h1>
            <p>
              Adding certificates to your resume showcases additional skills and
              achievements, making you stand out to potential employers. Provide
              the details of your certifications below.
            </p>
          </div>
          {certificates.map((certificate, index) => (
            <div key={index}>
              <h1 style={{ color: "white", textAlign: "center" }}>
                Certificate {index + 1}
              </h1>
              <hr />
              <div className="d-sm-flex one">
                <div className="input-container">
                  <label htmlFor="certificate Name">Certificate Name</label>
                  <input
                    className="input mb-2"
                    onChange={(e) => handleChange(e, index)}
                    type="text"
                    placeholder="Certificate Name"
                    name="certificateName"
                    value={certificate.certificateName}
                    style={{color:'black'}}
                  />
                  {activeSuggestions[index]?.certificateName?.length > 0 && (
                    <ul className="suggestion-list">
                      {activeSuggestions[index].certificateName.map(
                        (suggestion, i) => (
                          <li
                            key={i}
                            onClick={() =>
                              handleSuggestionClick(index, "certificateName", suggestion)
                            }
                          >
                            {suggestion}
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </div>
                <div className="input-container">
                  <label htmlFor="organization">Organization</label>
                  <input
                    className="input mb-2"
                    onChange={(e) => handleChange(e, index)}
                    type="text"
                    placeholder="Organization"
                    name="organization"
                    value={certificate.organization}
                  />
                  {activeSuggestions[index]?.organization?.length > 0 && (
                    <ul className="suggestion-list">
                      {activeSuggestions[index].organization.map(
                        (suggestion, i) => (
                          <li
                            key={i}
                            onClick={() =>
                              handleSuggestionClick(index, "organization", suggestion)
                            }
                          >
                            {suggestion}
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </div>
              </div>
              <div className="input-container" style={{display:'flex',flexDirection:'column',justifycontent:'center'}}>
                <label htmlFor="issueDate" className="">issueDate</label>
                <input
                  type="date"
                  className="input mb-2"
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Issue Date"
                  name="issueDate"
                  value={certificate.issueDate}
                />
              </div>
              <div className="input-container" >
                <label htmlFor="description">Description (Optional)</label>
                <textarea
                  type="text"
                  className="textarea mb-2"
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Description (Optional)"
                  name="description"
                  cols="200"
                  rows="5"
                  value={certificate.description}
                ></textarea>
              </div>
              <div className="d-flex justify-content-center m-2">
                <button
                  className="button1"
                  type="button"
                  onClick={() => handleDelete(index)}
                >
                  <span className="text">DELETE</span>
                </button>
              </div>
              <hr className="m-2" />
            </div>
          ))}
          <div className="d-flex justify-content-center m-2">
            <button className="button1" type="button" onClick={handleAddMore}>
              <span className="text">ADD MORE</span>
            </button>
          </div>
          <div>
            <GoogleAd />
          </div>
          <div className="d-flex justify-content-around">
           <PopupSave handleClickNext={handleClickNext} />
          </div>
        </div>
      )}
     
    </form>
  );
};

export default React.memo(Certificate);
