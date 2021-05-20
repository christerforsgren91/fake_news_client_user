import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Header, Icon, Modal } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

const AuthenticationMessage = ({ time }) => {
  const [redirect, setRedirect] = useState(false);
  const { message } = useSelector((state) => state);

  useEffect(() => {
    setTimeout(() => {
      setRedirect(true);
    }, time);
  });

  return (
    <>
      {redirect ? (
        <Redirect to='/' />
      ) : (
        <Modal basic open={true} size='small'>
          <div data-cy='authentication-popup' style={{ textAlign: 'center' }}>
            <Header icon data-cy='success-message' style={{ color: 'white' }}>
              <Icon name='circle notched' loading />
              {message}
            </Header>
            <Modal.Content data-cy='redirect-message'>
              <p>Loading your profile..</p>
            </Modal.Content>
          </div>
        </Modal>
      )}
    </>
  );
};

export default AuthenticationMessage;
