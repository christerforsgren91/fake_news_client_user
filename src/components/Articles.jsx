import React, { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import axios from 'axios';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('/articles/')
      } catch (error) {
        if (error.status === 500) {
          setErrorMessage(
            'Servers are currently not responding, Pleas try again later'
          );
        }
      }
    };
  },[]);

  return (
    <>
      <Grid>
        <Grid.row columns={2}>
          <Grid.Column></Grid.Column>
        </Grid.row>
        <Grid.row columns={3}>
          <Grid.Column></Grid.Column>
        </Grid.row>
      </Grid>
    </>
  );
};

export default Articles;
