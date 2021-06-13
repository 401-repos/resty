import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from './Main';
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
