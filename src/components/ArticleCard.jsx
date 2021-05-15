import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, Image } from 'semantic-ui-react';

const ArticleCard = ({ article, index }) => {
  return (
    <div className='card-container' data-cy={`article-card-${index}`}>
      <Grid.Column>
        <Card id={article.id} as={Link} to={`/articles/${article.id}`}>
          <Image src='https://images.unsplash.com/photo-1487758608033-7780b34680ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3589&q=80' />
          <div className='content'>
            <h4 data-cy='title'>{article.title}</h4>
            <Card.Description data-cy='teaser'>
              {article.teaser}
            </Card.Description>
            <Card.Meta extra data-cy='created-at'>
              <p>{article.date}</p>
            </Card.Meta>
          </div>
        </Card>
      </Grid.Column>
    </div>
  );
};

export default ArticleCard;
