import React from 'react';

class Else extends React.Component{
    render(){
        if(!this.props.condition){
            return <>{this.props.children}</>;
        }else{
            return <>{null}</>;
        }
    }
}

export default Else;