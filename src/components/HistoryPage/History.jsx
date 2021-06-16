import React from 'react';
import Result from '../Result/Result';
import HistoryLI from '../HistoryListItem/HistoryLI';
import { Link } from 'react-router-dom';
import './history.scss'
class HistoryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "",
            method: "",
            response: {}
        }
        this.setInfoHistory = this.setInfoHistory.bind(this);
        this.handleCkick = this.handleCkick.bind(this)

    }
    handleCkick(event) {
        let elements = event.target.parentElement.childNodes;
        if(event.target.localName === 'a'){
            elements = event.target.parentElement.parentElement.childNodes[0].childNodes
        }else if (event.target.localName === "li" ) {
            elements = event.target.childNodes[0].childNodes;
        }else if (event.target.localName === "p" ) {
            elements = elements[0].childNodes;
        }
        const info = { url: '', method: '' };
        for (let elem of elements) {
            info[elem.className] = elem.textContent;
        }
        if(event.target.localName === 'a'){
            if(info.method==="POST" ||info.method==="PUT"){
                info.reqBody = JSON.parse(event.target.parentElement.parentElement.childNodes[1].textContent);
                console.log(info.reqBody);
            }
            this.props.setter(info)
        }
        if(!info.response){
            info.response = JSON.stringify(JSON.parse(localStorage.getItem("headers")).find(elem=>elem.method===info.method&&elem.url===info.url).response);
        }
        this.setState({...info,response:JSON.parse(info.response) })
    }
    setInfoHistory(obj) {
        this.setState(obj);
    }
    listItems(data) {
        return data.map((item, idx) => {
            return (<HistoryLI handleCkick={this.handleCkick} data={item} k1={idx} key={idx} >
                <button  onClick={this.reRun}> <Link to="/">Re-run Request</Link></button>
            </HistoryLI>)
        });
    }
    render() {
        const data = JSON.parse(localStorage.getItem("headers"));
        if (data) {
            return (
                <div className="historyPage">
                    <ul>
                        {this.listItems(data)}
                    </ul>
                    <Result data={this.state} />
                </div>

            );
        } else {
            return (
                <div className="historyPage">
                    <ul>
                        <li>No history</li>
                    </ul>
                    <Result data={this.state} />
                </div>
            )
        }
    }


}

export default HistoryPage;