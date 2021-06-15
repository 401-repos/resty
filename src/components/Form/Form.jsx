import React from 'react';
import './form.scss'

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        await this.props.toggleLoading();
        const method = event.target.method.value;
        let url = event.target.url.value;
        console.log('url',url , 'method' , method);
        url = url[url.length - 1] === '/' ? url : url + '/';
        const body = event.target.body.value;
        try {

            const response = (method === "PUT" || method === "POST") ? await fetch(url, {
                method: method, headers: {
                    'Content-Type': 'application/json'
                }, mode: 'cors', body: body
            }) : await fetch(url, { method: method, mode: 'cors' });
            console.log(response);
            
            const data = await response.clone().json();
            setTimeout(() => {
                this.props.toggleLoading();
                this.props.header(url, method, { data });
            }, 2000);
            if (data) {
                if (!localStorage.getItem("headers")) {
                    localStorage.setItem("headers", JSON.stringify([{ url, method }]));
                } else {
                    let localData = JSON.parse(localStorage.getItem("headers"));
                    const found = localData.find(elem => {
                        return (elem.url === url && elem.method === method)
                    });
                    if (!found) {
                        localData.push({ url, method });
                        localStorage.setItem("headers", JSON.stringify(localData))
                    }
                }
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    changeInput = (e) => {
        // console.dir(e.target);
        this.props.setInput({ url: e.target.value })
    }
    changeMethod=(e)=>{
        this.props.changeMethod({method:e.target.value})
    }
    render() {
        return (
            <div id="main" onSubmit={this.handleSubmit}>
                <form>
                    <fieldset>

                        <label htmlFor="url">
                            URL:
                        </label>
                        <input type="text" placeholder="Enter the endpoint URL" value={this.props.data.url} onChange={this.changeInput} name="url" id="url" />
                        <button type="submit" id="goBtn">Go!</button>
                    </fieldset>
                    <fieldset>

                        <input type="radio" value="GET" name="method" onChange={this.changeMethod} id="GET" checked={this.props.data.method === "GET" || !this.props.data.method} />
                        <label htmlFor="GET">GET</label>

                        <input type="radio" value="POST" name="method" onChange={this.changeMethod} id="POST" checked={this.props.data.method === "POST"} />
                        <label htmlFor="POST">POST</label>

                        <input type="radio" value="PUT" name="method" onChange={this.changeMethod} id="PUT" checked={this.props.data.method === "PUT"} />
                        <label htmlFor="PUT">PUT</label>

                        <input type="radio" value="DELETE" name="method" onChange={this.changeMethod} id="DELETE" checked={this.props.data.method === "DELETE"} />
                        <label htmlFor="DELETE">DELETE</label>
                        <label htmlFor="body">Body</label>
                        <textarea name="body" id="body" ></textarea>
                    </fieldset>

                </form>

            </div>)
    }
}

export default Form;
