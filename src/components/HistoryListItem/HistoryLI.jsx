import React from 'react';
import './LI.scss'
class HistoryLI extends React.Component {
    render() {
        return (
            <li className={this.props.data.method} onClick={this.props.handleCkick} key={this.props.k1}>
                <div>
                    <span className="method">{this.props.data.method}</span>
                    <span className="url">{this.props.data.url}</span>
                </div>
                <p className="reqBody">{this.props.data.body ? JSON.stringify(this.props.data.body) : null}</p>
                <span className="response">{this.props.data.response ? JSON.stringify(this.props.data.response) : null}</span>
                {this.props.children}
            </li>
        );
    }
}


export default HistoryLI;