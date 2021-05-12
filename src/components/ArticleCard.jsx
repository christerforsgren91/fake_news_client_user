import React from 'react'
import { Card, Segment, Image } from 'semantic-ui-react'

const ArticleCard = ({article, i}) => {
  return (
    <Card data-cy={`article-${i}`}>
      <Image src={article.img} />
      <Card.Content>
        <Card.Header data-cy='title-header'>
        </Card.Header>
      </Card.Content>
      <Segment textAlign='center' inverted data-cy='netflix-link' color='red' attached='bottom'>
      </Segment>
    </Card>
  );
}

export default ArticleCard
