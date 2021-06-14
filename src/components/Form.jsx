import React from 'react';
import './form.scss'

class Form extends React.Component{
    async handleSubmit(event){
        event.preventDefault();
        const method = event.target.method.value;
        const url = event.target.url.value;
        const response = await fetch(url, {method: method});
        const data = await response.json();
        console.log(data);
        this.props.header(url,method,{data})
    }
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render(){
        return (
            <div id="main" onSubmit={this.handleSubmit}>
                <form onSubmit={this.handleGoClick}>
                    <fieldset>

                        <label htmlFor="url">
                            URL:
                        </label>
                        <input type="text" placeholder="Enter the endpoint URL" name="url" id="url" />
                        <button type="submit" id="goBtn">Go!</button>
                    </fieldset>
                    <fieldset>

                        <input type="radio" value="GET" name="method" id="GET" defaultChecked={true} />
                        <label htmlFor="GET">GET</label>

                        <input type="radio" value="POST" name="method" id="POST" />
                        <label htmlFor="POST">POST</label>

                        <input type="radio" value="PUT" name="method" id="PUT" />
                        <label htmlFor="PUT">PUT</label>

                        <input type="radio" value="DELETE" name="method" id="DELETE" />
                        <label htmlFor="DELETE">DELETE</label>

                    </fieldset>
                </form>
                
            </div>)
    }
}

export default Form;