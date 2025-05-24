import { useState, memo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { templatePage } from "../../Redux/action";
// import "./ReactResume.css";

const ReactResume = ({ reactJsDevResume }) => {
    const [hoveredImage, setHoveredImage] = useState(null);
    const [visibleImages, setVisibleImages] = useState(3); // Initially show 3 images
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        if (hoveredImage !== null) {
            const path = `/react-resume/${hoveredImage}`;
            navigate(path);
            dispatch(templatePage(hoveredImage));
        }
    };

    const handleLoadMore = () => {
        setVisibleImages((prev) => prev + 3);
    };

    return (
        <div className="tech-resume-container">
            <section className="tech-grid-wrapper">
                <h2 className="tech-grid-title">React JS Developer Free Resume</h2>
                <p className="tech-grid-description">
                    Find handpicked resumes crafted for React JS developers. Download and customize to stand out.
                </p>
                <hr className="tech-grid-divider" />
                <div className="tech-grid-images">
                    {reactJsDevResume && reactJsDevResume.length > 0 ? (
                        reactJsDevResume.slice(0, visibleImages).map((image, index) => (
                            <div
                                key={image.id}
                                className="tech-image-card"
                                data-aos="flip-left"
                                data-aos-duration="1000"
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
                                        href={`/react-resume/${hoveredImage}`}
                                        onClick={handleClick}
                                        className="tech-template-link"
                                    >
                                        Go To Your Resume
                                    </a>
                                )}
                                <div className="tech-card-footer">
                                    <p>{image.alt}</p>
                                    <p>{index + 1}/{reactJsDevResume.length}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No templates available.</p>
                    )}
                </div>

                {reactJsDevResume.length > visibleImages && (
                    <div className="tech-load-more-wrapper">
                        <button onClick={handleLoadMore} className="tech-load-more-btn">
                            Load More
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default memo(ReactResume);
