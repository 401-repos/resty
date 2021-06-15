import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from '../Main/Main';
import './App.scss';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main/>
      <Footer />
    </React.Fragment>
  );
}

export default App;