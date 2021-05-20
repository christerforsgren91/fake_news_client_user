import React from 'react';
import { Portal, Segment, Header } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import store from '../state/store/configureStore';

const Popup = () => {
  const { error, message, open } = useSelector((state) => state);
  return (
    <Portal
      closeOnDocumentClick
      onClose={() => store.dispatch({ type: 'ERROR_RESET' })}
      open={open}>
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
        <p data-cy='popup-message'>{message}</p>
      </Segment>
    </Portal>
  );
};

export default Popup;
