import React from 'react';

const GoogleMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5992.432983498863!2d-50.65616045784292!3d-23.187362026476602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eadf19f06f311f%3A0x8a2e7a0e8621b0f3!2sUTFPR%20Corn%C3%A9lio%20Proc%C3%B3pio!5e0!3m2!1spt-BR!2sbr!4v1717099067241!5m2!1spt-BR!2sbr"
      width="600"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps"
    />
  );
};

export default GoogleMap;
