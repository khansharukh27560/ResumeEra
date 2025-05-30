import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { templatePage } from '../Redux/action';
import '../css/coverLetterCrousel.css'

const CoverLetterCrousel = ({ CoverImage}) => {
    const [hoveredImage, setHoveredImage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 200,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    const handleClick = (e, imageId) => {
        e.preventDefault();
        const path = `/cover_letter/${imageId}`;
        navigate(path);
        dispatch(templatePage(imageId));
    };
    return (
        <div className="cover-carousel-container">
            <Slider {...settings}>
                {CoverImage && CoverImage.map((image) => (
                    <div key={image.id} className="cover-carousel-slide">
                        <div
                            onMouseEnter={() => setHoveredImage(image.id)}
                            onMouseLeave={() => setHoveredImage(null)}
                            className='cover-carousel-image-container'
                        >
                            <LazyLoadImage
                                className="cover-carousel-image"
                                src={image.src}
                                alt={image.alt}
                                style={{height:'350px'}}
                            />
                            {hoveredImage === image.id && (
                                <button
                                    onClick={(e) => handleClick(e, image.id)}
                                    className="cover-carousel-button"
                                    data-text="Touch"
                                    data-text-desktop="Go Your Resume"
                                >
                                    make resume
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
export default CoverLetterCrousel;
