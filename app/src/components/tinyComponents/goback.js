import React, {Component} from 'react';
import { createHistory } from 'history';
import {Icon} from 'antd';

const history = createHistory()

class HistorybackComponent extends React.Component {
    historyBack(){
        history.goBack();
        console.log(history);
    }
    render(){
        return(
            <Icon type="left" onClick={this.historyBack} style={{color:'#000',fontSize:'0.6rem',marginLeft:'0.1rem'}} />
        )
    }
}
export default HistorybackComponent;