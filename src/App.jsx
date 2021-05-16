import React from 'react';
import Navbar from './components/layout/Navbar';
import MainPage from './components/MainPage';
import Footer from './components/layout/Footer';
import Article from './components/Article';
import { Switch, Route } from 'react-router';
import Category from './components/Category';

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
        <Route exact path='/category/:category' >
          <Category />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
