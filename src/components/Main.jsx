import React from 'react';
import './main.scss'

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            method:'',
            url:''
        }
    }
    render(){

        return (
            <div id="main">
    <form onSubmit={this.handleGoClick}>
    <fieldset>

        <label htmlFor="textInput">
            URL:
        </label>
        <input type="text" placeholder="Enter the endpoint URL" name="textInput" id="textInput" />
        <button type="submit" id="goBtn">Go!</button>
    </fieldset>
    <fieldset>
    
        <input type="radio" value="GET" name="method" id="GET" defaultChecked={true} />
        <label htmlFor="GET">GET</label>

        <input type="radio" value="POST" name="method" id="POST"/>
        <label htmlFor="POST">POST</label>

        <input type="radio" value="PUT" name="method" id="PUT"/>
        <label htmlFor="PUT">PUT</label>

        <input type="radio" value="DELETE" name="method" id="DELETE" />
        <label htmlFor="DELETE">DELETE</label>

    </fieldset>
    </form>
        <section className="output-sec">
        <div id="methodHeader">
            <span id="methodName">{this.state.method}</span>
            <span id="endpoint">{this.state.url}</span>
        </div>
        </section>
    </div>)
}
 handleGoClick = (event)=>{
    event.preventDefault();
    const url = event.target.textInput.value;
    const method = event.target.method.value;
    this.setState({url,method})
    console.log(this.state);
}

}

export default Main;