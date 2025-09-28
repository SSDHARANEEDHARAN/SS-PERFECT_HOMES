import React from 'react';

const Map = () => {
  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31307.576176632116!2d78.16568495!3d11.22849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babce5e3f22014f%3A0xa0ab89ef32c34a77!2sNamakkal%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1758157406821!5m2!1sen!2sin"
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Perfect Home's Location - Namakkal, Tamil Nadu"
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/5 rounded-lg" />
    </div>
  );
};

export default Map;