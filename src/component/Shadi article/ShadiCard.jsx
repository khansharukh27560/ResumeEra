import { useState, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { templatePage } from '../../Redux/action';
import '../../css/shadiCard.css';

const ShadiCard = ({ shadi_Card }) => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (e, id) => {
    e.preventDefault();
    if (id !== null) {
      const path = `/shadi-card/${id}`;
      navigate(path);
      dispatch(templatePage(id));
    }
  };

  return (
    <div className="shadi-card-container">
      <section className="shadi-grid-wrapper">
        <h2 className="shadi-grid-title">Shadi Card Free Templates</h2>
        <p className="shadi-grid-description">
          Choose your favorite wedding card design for free.
        </p>
        <hr className="shadi-grid-divider" />

        <div className="shadi-grid-images">
          {shadi_Card && shadi_Card.length > 0 ? (
            shadi_Card.map((image) => (
              <div
                key={image.id}
                className="shadi-image-card"
                onMouseEnter={() => setHoveredImage(image.id)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="shadi-template-img"
                  loading="lazy"
                />
                <div className="shadi-image-info">
                  <p>{image.number}</p>
                  <p>{image.alt}</p>
                </div>

                {hoveredImage === image.id && (
                  <button
                    onClick={(e) => handleClick(e, image.id)}
                    className="shadi-template-btn"
                  >
                    Take It
                  </button>
                )}
              </div>
            ))
          ) : (
            <p>No Shadi Cards Available.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default memo(ShadiCard);
