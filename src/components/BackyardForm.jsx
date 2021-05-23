import React, {useState} from 'react';
import { Modal, Button, Form } from 'semantic-ui-react';

const BackyardForm = () => {
  const [open, setOpen] = useState(false) 

  return (
    <>
      <Modal
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
          />
          <Form.Input
            error='Please enter Theme'
            fluid
            label='Theme'
            placeholder='Theme'
          />
          <Form.TextArea
            label='Story'
            placeholder='Enter your Text here'
          />
          <Button type='submit' >Submit</Button>
        </Form>
      </Modal>
    </>
  );
};

export default BackyardForm;
