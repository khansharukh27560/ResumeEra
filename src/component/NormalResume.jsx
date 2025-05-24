import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { templatePage } from "../Redux/action";
import "../css/NormalResume.css";  // Updated CSS will match new class names
// import { resumeImages } from "../image/resumeData";

const NormalResume = ({images}) => {
    // const { images } = props;
    const [hoveredImage, setHoveredImage] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        if (hoveredImage !== null) {
            const path = `/mainpage/${hoveredImage}`;
            navigate(path);
            dispatch(templatePage(hoveredImage));
        }
    };
    console.log('resumeImages in NormalResume:-',images)
    return (
        <div className="resumeera-container">
            <section className="resumeera-grid-wrapper">
                <div className="resumeera-template-grid mt-5">
                    {images && images.length > 0 ? images.map((image, index) => (
                        <div
                            className="resumeera-card"
                            data-aos="flip-left"
                            data-aos-duration="1000"
                            key={image.id}
                            onMouseEnter={() => setHoveredImage(image.id)}
                            onMouseLeave={() => setHoveredImage(null)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                loading="lazy"
                                className="resumeera-card-img"
                            />
                            {hoveredImage === image.id && (
                                <a
                                    href={`/mainpage/${image.id}`}
                                    onClick={handleClick}
                                    className="resumeera-template-link"
                                >
                                    Go To Resume
                                </a>
                            )}
                            <div className="resumeera-card-footer">
                                <p>{image.alt}</p>
                                <p>{index + 1}/{images.length}</p>
                            </div>
                        </div>
                    )) : (
                        <p>No templates available.</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default React.memo(NormalResume);
