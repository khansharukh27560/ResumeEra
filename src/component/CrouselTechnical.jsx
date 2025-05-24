import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { templatePage } from '../Redux/action';
import '../css/crousel.css';

const CrouselTechnical = ({ techImages }) => {
    const [hoveredImage, setHoveredImage] = useState(null);
    const [loadingImageId, setLoadingImageId] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        cssEase: 'ease-in-out',
        swipeToSlide: true,
        draggable: true,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 4 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 4 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 360,
                settings: { slidesToShow: 2 }
            }
        ]
    };

    const handleClick = (e, imageId) => {
        e.preventDefault();
        const path = `/techmain/${imageId}`;
        navigate(path);
        dispatch(templatePage(imageId));
    };

    return (
        <section className="carousel-container" aria-label="Technical Resume Templates Carousel">
            <Slider {...settings}>
                {techImages?.map((image) => (
                    <div key={image.id} className="carousel-slide">
                        <div
                            className="carousel-image-wrapper"
                            onMouseEnter={() => setHoveredImage(image.id)}
                            onMouseLeave={() => setHoveredImage(null)}
                        >
                            {loadingImageId === image.id && (
                                <div className="image-loader">Loading...</div>
                            )}

                            <LazyLoadImage
                                className="carousel-image"
                                src={image.src}
                                alt={image.alt || "Technical Resume Template"}
                                effect="blur"
                                beforeLoad={() => setLoadingImageId(image.id)}
                                afterLoad={() => setLoadingImageId(null)}
                                placeholderSrc="/placeholder.jpg"
                            />

                            {hoveredImage === image.id && (
                                <button
                                    onClick={(e) => handleClick(e, image.id)}
                                    className="carousel-button"
                                    aria-label="View Resume Template"
                                    data-text="Touch"
                                    data-text-desktop="Go Your Resume"
                                >
                                    Go Resume
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default React.memo(CrouselTechnical);
