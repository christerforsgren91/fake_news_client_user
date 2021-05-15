import React from 'react';
import Navbar from './components/layout/Navbar';
import MainPage from './components/MainPage';
import Footer from './components/layout/Footer';
import { useSelector } from 'react-redux';
import Article from './components/Article';

const App = () => {
  const { newPage } = useSelector((state) => state);
  return (
    <>
      <Navbar />
      {!newPage ? <MainPage /> : <Article />}
      <Footer />
    </>
  );
};

export default App;
