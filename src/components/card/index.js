import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.scss';

const Card = ({
  createdDate,
  htmlContent,
  icon,
  img,
  imgHeightPercentage,
  imgParallax,
  modifiedDate,
  scaleOnHover,
  slug,
  title,
  widthPercentage,
  pd,
}) => (
    <div
      className={`card${scaleOnHover ? ' scale-on-hover' : ''}`}
      style={{
        margin: '2%',
        ...(widthPercentage ? {
          width: widthPercentage && `calc(${widthPercentage}% - 4%)`, // 4% = 2% margem lateral * 2

        } : {
          maxWidth: '300px',
          minWidth: '300px',
        }),

      }}
    >
      <div
        style={{
          backgroundAttachment: imgParallax && 'fixed',
          backgroundImage: `url(${img})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: `${imgHeightPercentage || 20}vh`,
          opacity: 0.9,

        }}
      />
      <div className="card-info">
        <div className="card-description">
          <p className="card-title" style={pd && { fontSize: "3em" }}>{title}</p>
          <div style={pd && { paddingBottom: 50 }}>
            <small className="card-date" >
              criado em {new Date(createdDate).toLocaleDateString()}
              <br />
              atualizado em {new Date(modifiedDate).toLocaleDateString()}
            </small>
          </div>
          {htmlContent && (
            <p dangerouslySetInnerHTML={{
              __html: htmlContent,
            }} />
          )}
        </div>
        {slug && (
          <Link
            to={`/post-details/${slug}`}
            className="card-details-link"
          >
            <FontAwesomeIcon icon={icon} color="#999" size="2x" />
          </Link>
        )}
      </div>
    </div>
);

export default Card;
