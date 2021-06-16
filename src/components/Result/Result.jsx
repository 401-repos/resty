import React from 'react';
import ReactJson from 'react-json-view'
import './result.scss'

class Result extends React.Component {
    render() {
       return( <section className="output-sec">
            <div id="methodHeader">
                <span id="methodName">{this.props.data.method}</span>
                <span id="endpoint">{this.props.data.url}</span>
            </div>
            <div id="json">
            <ReactJson src={this.props.data.response} />
            </div>

        </section>);
    }
}

export default Result;