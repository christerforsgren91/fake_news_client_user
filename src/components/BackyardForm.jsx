import React, { useState } from 'react';
import { Modal, Button, Form } from 'semantic-ui-react';
import BackyardArticles from '../modules/BackyardArticles';

const BackyardForm = ({ location }) => {
  const [open, setOpen] = useState(false);

  const submitBackyard = (event) => {
    const backyardArticle = {
      title: event.target.title.value,
      theme: event.target.theme.value,
      body: event.target.body.value,
      location: location,
    };
    setOpen(false);
    BackyardArticles.create(backyardArticle);
  };

  return (
    <>
      <Modal
        data-cy='create-backyard-article-modal'
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        open={open}
        trigger={
          <Button
            data-cy='create-backyard-article-btn'
            style={{ backgroundColor: '#fce42d', color: '#333' }}>
            Write an article
          </Button>
        }>
        <Modal.Header className='backyard-form' data-cy='header'>
          Create Backyard Article
        </Modal.Header>
        <Form
          size='large'
          onSubmit={(event) => submitBackyard(event)}
          className='backyard-form'>
          <Form.Input
            name='title'
            id='new-backyard-input'
            fluid
            required
            label='Title'
            placeholder='Title'
            data-cy='title'
          />
          <Form.Input
            name='theme'
            id='new-backyard-input'
            fluid
            required
            label='Theme'
            data-cy='theme'
            placeholder='Theme'
          />
          <Form.TextArea
            name='body'
            required
            label='Story'
            data-cy='body'
            placeholder='Enter your Text here'
          />
          <Button
            style={{ backgroundColor: '#fce42d', color: '#333' }}
            type='submit'
            data-cy='submit'>
            Submit
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default BackyardForm;
