import React from 'react';

const Footer = () => {
  return (
    <Footer className='footer' data-cy='footer'>
      <p data-cy='phone-number' style={{ color: 'white' }}>
        Contact us
      </p>
      <p data-cy='mail' style={{ color: 'white' }}>
        Email: worldwidenetflix@wwn.com
      </p>
    </Footer>
  );
};

export default Footer;
