import React from 'react';
import Form from './Form';    
import Result from './Result';
import './main.scss'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          method:'',
          url:'',
          result:{}
        }
        this.headerHandle=this.headerHandle.bind(this);
    }

    headerHandle(url,method,result) {
        this.setState({ url:url, method:method ,result:result});
    }

    render() {
        return (<main>
        <Form header={this.headerHandle} />
        <Result data={this.state} />
        </main>);
    }

}

export default Main;