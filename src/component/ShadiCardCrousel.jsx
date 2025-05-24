import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { templatePage } from '../Redux/action';
import '../css/coverLetterCrousel.css'

const ShadiCardCrousel = ({ shadi_Card}) => {
    const [hoveredImage, setHoveredImage] = useState(null);
    const [loadingImageId,setLoadingImageId] =useState(null);
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
        const path = `/shadi-card/${imageId}`;
        navigate(path);
        dispatch(templatePage(imageId));
    };
    return (
        <div className="carousel-container" aria-label="Resume Templates Carousel">
            <Slider {...settings}>
                {shadi_Card && shadi_Card.map((image) => (
                    <div key={image.id} className="carousel-slide">
                        <div
                            onMouseEnter={() => setHoveredImage(image.id)}
                            onMouseLeave={() => setHoveredImage(null)}
                            className='carousel-image-wrapper'
                        >
                            {loadingImageId === image.id &&(
                                <div className="image-loader">Loading...</div>
                            )}
                            <LazyLoadImage
                                // className="cover-carousel-image"
                                src={image.src}
                                alt={image.alt}
                                style={{height:'350px',width:'250px',objectFit:'cover'}}
                                className="carousel-image"
                                 onLoad={() => {
    if (loadingImageId === image.id) {
      setLoadingImageId(null);
    }
  }}
  beforeLoad={() => setLoadingImageId(image.id)}

                            />
                            {hoveredImage === image.id && (
                                <button
                                    onClick={(e) => handleClick(e, image.id)}
                                    // className="carousel-button"
                                    data-text="Touch"
                                    className="carousel-image"
                                beforeLoad={() => setLoadingImageId(image.id)}
                                afterLoad={() => setLoadingImageId(null)}
                                placeholderSrc={image.alt}
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
export default React.memo(ShadiCardCrousel);
