import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard24 = (props) => {
  return (
    <>
      <div className={`feature-card24-feature-card ${props.rootClassName} `}>
        <div className="feature-card24-container">
          <img
            alt={props.image_alt}
            src="/consult-200h.png"
            className="feature-card24-image"
          />
          <h2 className="feature-card24-text">{props.title}</h2>
          <span>{props.description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .feature-card24-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .feature-card24-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card24-image {
            width: auto;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card24-text {
            font-size: 22px;
            font-style: normal;
            font-family: Tahoma;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }

          @media (max-width: 767px) {
            .feature-card24-feature-card {
              flex-direction: row;
            }
            .feature-card24-container {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .feature-card24-container {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard24.defaultProps = {
  image_alt: 'image',
  title: 'Gestión de Empleo',
  description:
    'Asistencia integral en la búsqueda y gestión de empleo, incluyendo reclutamiento, preselección y apoyo durante todo el proceso.',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName: '',
}

FeatureCard24.propTypes = {
  image_alt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FeatureCard24
