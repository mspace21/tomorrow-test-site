import React from 'react';

const CanvaEmbed = ({ url }) => {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: 0,
      paddingTop: '141.4286%', // Adjust based on your desired aspect ratio
      paddingBottom: 0,
      boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
      marginTop: '1.6em',
      marginBottom: '0.9em',
      overflow: 'hidden',
      borderRadius: '8px',
      willChange: 'transform',
    }}>
      <iframe
        loading="lazy"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          border: 'none',
          padding: 0,
          margin: 0,
        }}
        src={url}
        allowFullScreen
        allow="fullscreen"
      />
    </div>
  );
};

export default CanvaEmbed;