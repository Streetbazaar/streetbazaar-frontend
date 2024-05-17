// MapComponent.js
import React from 'react';
import styled from 'styled-components';

// Styled component for the iframe container
const MapContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: 450px;
  border: 0;
  margin: 0 auto;
`;

const MapComponent = () => {
  return (
    <MapContainer>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d126839.06821658298!2d3.3292288!3d6.5568768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1715930829563!5m2!1sen!2sng"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      ></iframe>
    </MapContainer>
  );
};

export default MapComponent;
