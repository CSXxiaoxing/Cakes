import React from 'react';
import './spinner.scss';
// <div id="bottomLoading">
//     <Icon type="loading" />
//     <p>正在刷新...</p>
// </div>

export default class SpinnerComponent extends React.Component{
    render(){
        if(this.props.loading){
            return (
                <div id="initLoading" >
                    <img src="../../../timg.gif" alt="" />
                    <p>数据君正在赶来...</p>
                </div>
            )
        } else {
            return null;
        }
    }
}