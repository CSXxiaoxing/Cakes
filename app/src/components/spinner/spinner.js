import React from 'react';
import './spinner.scss';

export default class SpinnerComponent extends React.Component{
    render(){
        // console.log(this.props.show)
        if(this.props.show){
            return <div className="Spinner">loading</div>
        } else {
            return null;
        }
    }
}