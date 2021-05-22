import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import BackyardArticles from '../../modules/BackyardArticles'
import { useParams } from 'react-router'

const BackyardArticle = () => {
  const { backyardArticle } = useSelector(state => state)
  const { id } = useParams();


  useEffect(() => {
    BackyardArticles.show(id)
  },[])

  return (
    <div data-cy='article-container' style={styles.container} >
      <h1 data-cy='title' >{backyardArticle.title}</h1>
      <p data-cy='theme' >{backyardArticle.theme}</p>
      <p data-cy='date' >{backyardArticle.date}</p>
      <p data-cy='author' >{backyardArticle.written_by}</p>
      <p data-cy='body' >{backyardArticle.body}</p>    
    </div>
  )
}

export default BackyardArticle

const styles = {
  container: {
    color: 'white',
    margin: '20px 20%',
    backgroundColor: '#202325',
    padding: '25px',
    borderRadius: 3,

  }
}