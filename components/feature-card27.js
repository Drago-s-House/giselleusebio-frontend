import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard27 = (props) => {
  return (
    <>
      <div className={`feature-card27-feature-card ${props.rootClassName} `}>
        <div className="feature-card27-container">
          <img
            alt={props.image_alt}
            src="/investment-200h.png"
            className="feature-card27-image"
          />
          <h2 className="feature-card27-text">{props.title}</h2>
          <span>{props.description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .feature-card27-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .feature-card27-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card27-image {
            width: auto;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card27-text {
            font-size: 22px;
            font-family: Tahoma;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }

          @media (max-width: 767px) {
            .feature-card27-feature-card {
              flex-direction: row;
            }
            .feature-card27-container {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .feature-card27-container {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard27.defaultProps = {
  description:
    'Capacitación y asesoría en teletrabajo adaptado a personas con discapacidad, promoviendo la inclusión laboral desde cualquier lugar.',
  image_alt: 'image',
  title: 'Teletrabajo Inclusivo',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName: '',
}

FeatureCard27.propTypes = {
  description: PropTypes.string,
  image_alt: PropTypes.string,
  title: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FeatureCard27
