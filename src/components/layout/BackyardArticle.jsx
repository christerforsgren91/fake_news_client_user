import React from 'react'
import BackyardArticles from '../../modules/BackyardArticles'
import {useParams} from 'react-router'
const BackyardArticle = () => {
  const { id } = useParams();
  useEffect(() => {
    BackyardArticles.show(id)
  },[])
  return (
    <div>
      
    </div>
  )
}

export default BackyardArticle
