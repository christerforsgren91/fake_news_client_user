import React from 'react'
import { Card, Segment, Image } from 'semantic-ui-react'

const ArticleCard = ({article, i}) => {
  return (
    <Card data-cy={`article-card-${i}`}>
      <Card.Content>
        <Card.Header data-cy='title'>
          {article.title}
        </Card.Header>
        <Card.Description data-cy='teaser'>
          {article.teaser}
        </Card.Description>
        <Card.Content extra data-cy='created-at'>
          <p>{article.created_at}</p>
        </Card.Content>
      </Card.Content>
    </Card>
  );
}

export default ArticleCard
