import React, { useEffect } from 'react'
import Articles from '../modules/Articles'
import { useParams } from 'react-router';

const Category = () => {
  const { category } = useParams()

  useEffect(() => {
    Articles.index(category)
  }, [category])

  return (
    <div>
      
    </div>
  )
}

export default Category
