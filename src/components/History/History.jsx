import React from 'react';
import './History.scss'

class History extends React.Component {

    constructor(props) {
        super(props);
        this.handleCkick = this.handleCkick.bind(this)
    }
    handleCkick(event) {
        let elements = event.target.parentElement.childNodes;
        if (event.target.localName === "li") {
            elements = event.target.childNodes;
        }
        const info = { url: '', method: '' };
        for (let elem of elements) {
            info[elem.className] = elem.textContent;
        }
        this.props.state(info)
    }
    listItems(data) {
        return data.map((item, idx) => {
            return <li onClick={this.handleCkick} key={idx}>
                <span className="method">{item.method}</span><span className="url">{item.url}</span>
            </li>
        });
    }

    render() {
        const data = JSON.parse(localStorage.getItem("headers"));
        if (data) {
            return (
                <div className="history">
                    <ul>
                        {this.listItems(data)}
                    </ul>
                </div>
            );
        } else {
            return (
                <div>
                    <ul>
                        <li>No history</li>
                    </ul>
                </div>
            )
        }
    }
}



export default History;