import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { templatePage } from "../../Redux/action";
import "./TechnicalResumeImages.css"; // Updated CSS file

const TechnicalResumeImages = (props) => {
    const { techImages } = props;
    const [hoveredImage, setHoveredImage] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        if (hoveredImage !== null) {
            const path = `/techmain/${hoveredImage}`;
            navigate(path);
            dispatch(templatePage(hoveredImage));
        }
    };

    return (
        <div className="tech-resume-container">
            <section className="tech-grid-wrapper">
                <h2 className="tech-grid-title">Technical Free Resume</h2>
                <p className="tech-grid-description">
                    Browse our collection of professional resume templates and find the one that suits your needs.
                </p>
                <hr className="tech-grid-divider" />
                <div className="tech-grid-images">
                    {techImages && techImages.length > 0 ? techImages.map((image, index) => (
                        <div
                            className="tech-image-card"
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
                                className="tech-card-img"
                            />
                            {hoveredImage === image.id && (
                                <a
                                    href={`/mainpage/${image.id}`}
                                    onClick={handleClick}
                                    className="tech-template-link"
                                >
                                    Go To Resume
                                </a>
                            )}
                            <div className="tech-card-footer">
                                <p>{image.alt}</p>
                                <p>{index + 1}/{techImages.length}</p>
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

export default memo(TechnicalResumeImages);
