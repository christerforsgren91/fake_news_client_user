import React from 'react';
import Navbar from './components/layout/Navbar';
import MainPage from './components/MainPage';
import Footer from './components/layout/Footer';
import Article from './components/Article';
import { Switch, Route } from 'react-router';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>
        <Route exact path='/articles/:id'>
          <Article />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
