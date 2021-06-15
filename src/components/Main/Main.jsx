import React from 'react';
import Form from '../Form/Form';
import Result from '../Result/Result';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import If from '../IF/If';
import Else from '../Else/Else';
import History from '../History/History';
import './main.scss'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            method: '',
            url: '',
            result: {},
            loading: true
        }
        this.toggleLoading = this.toggleLoading.bind(this)
        this.headerHandle = this.headerHandle.bind(this);
        this.setInfoHistory = this.setInfoHistory.bind(this);
        this.setNewChanges=this.setNewChanges.bind(this);
        this.setNewMethod = this.setNewMethod.bind(this)
    }

    headerHandle(url, method, result) {
        this.setState({ url: url, method: method, result: result });
    }

    toggleLoading() {
        this.setState({ loading: !this.state.loading });
    }
    setInfoHistory(obj) {
        this.setState(obj);
    }
    setNewChanges(obj){
        this.setState(obj);
    }
    setNewMethod(obj){
        this.setState(obj);
    }
    render() {
        return (<main>
            <If condition={!this.state.loading}>
                <LoadingScreen />
            </If>
            <Else condition={!this.state.loading}>
                <Form header={this.headerHandle} changeMethod={this.setNewMethod} setInput={this.setNewChanges} toggleLoading={this.toggleLoading} data={this.state} />
                <div className="hisRes">

                <History state={this.setInfoHistory} />
                <If condition={this.state.url && this.state.method}>
                    <Result data={this.state} />
                </If>
                </div>
            </Else>
        </main>);
    }

}

export default Main;