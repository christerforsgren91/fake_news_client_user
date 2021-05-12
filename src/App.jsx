import React from 'react';
import BreakingNews from './components/layout/BreakingNews';
import Navbar from './components/layout/Navbar';
import MainPage from './components/MainPage';

const App = () => {
  return (
    <>
      <Navbar />
      <BreakingNews />
      <MainPage />
    </>
  );
};

export default App;
