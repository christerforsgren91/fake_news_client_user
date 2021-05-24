import React from 'react';

const CustomDivider = ({ title }) => {
  return (
    <div style={styles.divider}>
      <div style={styles.box}>{title}</div>
      
    </div>
  );
};

export default CustomDivider;
const styles = {
  divider: {
    color: 'white',
    textAlign: 'center',
    width: 'auto',
    margin: '75px 15%',
  },
  box: {
    padding: 15,
    display: 'block-inline',
    fontSize: 25,
    textTransform: 'uppercase',
    fontFamily: 'KoHo',
    border: '1px dotted #cec269',
  },
};
