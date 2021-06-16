import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from '../Main/Main';
import HistoryPage from "../HistoryPage/History";
import { Switch, Route } from "react-router-dom";
import Help from "../Help/Help";
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method: '',
      url: '',
      result: {},
      loading: true,
      reqBody: null,
      response:{}
    }
    this.setReqBody = this.setReqBody.bind(this);
    this.setStates = this.setStates.bind(this);
  }
  setReqBody(obj){
    this.setState(obj)
  }
  setStates(obj){
    this.setState(obj)
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact  path="/">
            <Main redirectStates={this.state} setReqBody={this.setReqBody} />
          </Route>
          <Route  path="/history">
            <HistoryPage setter={this.setStates} />
          </Route>
          <Route path="/help">
            <Help/>
          </Route>
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }


}

export default App;
