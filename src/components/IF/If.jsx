import React from 'react';

class If extends React.Component{
    render(){
        if(this.props.condition){
            return (<>{this.props.children}</>);
        }else{
            return( <div></div>);
        }
    }
}

export default If;