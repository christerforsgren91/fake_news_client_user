import React, { useState } from 'react';
import { Modal, Button, Form } from 'semantic-ui-react';
import store from '../state/store/configureStore';
import BackyardArticles from '../modules/BackyardArticles'

const BackyardForm = () => {
  const [open, setOpen] = useState(false);

  const submitBackyard = (event) => {
    backyardArticle = {}
    setOpen(false);
    BackyardArticles.create(backyardArticle)
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
        <Form size='medium' onSubmit={(event) => submitBackyard(event)}>
          <Form.Input
            className='new-backyard-input'
            fluid
            required
            label='Title'
            placeholder='Title'
            data-cy='title'
          />
          <Form.Input
            className='new-backyard-input'
            fluid
            required
            label='Theme'
            data-cy='theme'
            placeholder='Theme'
          />
          <Form.TextArea
            required
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
