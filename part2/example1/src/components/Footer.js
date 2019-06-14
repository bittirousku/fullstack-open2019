import React from 'react';

const Footer = () => {
  // With React it is not desirable to split HTML / CSS / Javascript
  // to own files/modules
  // In React the modularization is done with COMPONENTS!
  // Components define structure (HTML), appearance (CSS)
  // and functionality (JS). This makes components modular
  // and reusable.
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  };

  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Department of Computer Science, University of Helsinki 2019</em>
    </div>
  );
};

export default Footer;
