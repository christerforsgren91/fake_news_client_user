import React from 'react';
import BreakingNews from './components/layout/BreakingNews';
import Navbar from './components/layout/Navbar';
import MainPage from './components/MainPage'
import Footer from './components/layout/Footer'

const App = () => {
  return (
    <>
      <Navbar  />
      <BreakingNews  />
      <MainPage />
      <Footer/>
    </>
  );
};

export default App;
