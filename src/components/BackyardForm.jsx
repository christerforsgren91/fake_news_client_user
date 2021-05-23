import React, { useState } from 'react';
import { Modal, Button, Form } from 'semantic-ui-react';
import store from '../state/store/configureStore';

const BackyardForm = () => {
  const [open, setOpen] = useState(false);

  const submitBackyard = (event) => {
    setOpen(false);
    store.dispatch({ type: 'SUCCESS_MESSAGE' });
  };

  return (
    <>
      <Modal
        data-cy='create-backyard-article-modal'
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        open={open}
        trigger={<Button data-cy='create-backyard-article-btn'>Create</Button>}>
        <Modal.Header data-cy='header'>Create Backyard Article</Modal.Header>
        <Form onSubmit={(event) => submitBackyard(event)}>
          <Form.Input
            error={{
              content: 'Please enter Title',
              pointing: 'below',
            }}
            fluid
            label='Title'
            placeholder='Title'
            id='form-input-first-name'
            data-cy='title'
          />
          <Form.Input
            error='Please enter Theme'
            fluid
            label='Theme'
            data-cy='theme'
            placeholder='Theme'
          />
          <Form.TextArea
            label='Story'
            data-cy='body'
            placeholder='Enter your Text here'
          />
          <Button type='submit' data-cy='submit'>
            Submit
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default BackyardForm;
