import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <SearchForm />
      {/* <Posts /> */}
      <Footer />
    </div>
  );
}

export default App;
