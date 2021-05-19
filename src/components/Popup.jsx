import React, { useState } from 'react';
import { Portal, Segment, Header } from 'semantic-ui-react';
import { useSelector } from 'react-redux';

const Popup = () => {
  const [open, setOpen] = useState(true);
  const { error, message } = useSelector((state) => state);
  return (
    <Portal closeOnDocumentClick onClose={() => setOpen(false)} open={open}>
      <Segment
        inverted
        color={error ? 'red' : 'green'}
        style={{
          left: '50%',
          position: 'fixed',
          bottom: '45%',
          transform: 'translate(-50%)',
          zIndex: 1000,
        }}>
        <Header>{error ? 'Error' : 'Success'}</Header>
        <p data-cy='registration-error'>{message}</p>
      </Segment>
    </Portal>
  );
};

export default Popup;
