import React from 'react';
import { Image, Segment } from 'semantic-ui-react';

const BreakingNews = () => {
  return (
    <>
      <Segment data-cy='breaking-news' placeholder>
        <Image fluid
          src='https://react.semantic-ui.com/images/wireframe/image.png'
          size='medium'
        />
      </Segment>
    </>
  );
};

export default BreakingNews;
