
import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router'
import { Icon } from 'antd';

import SpinnerComponent from '../spinner/spinner';
import * as datagridAction from './datagridAction';

const mapStateToProps = function(state){
    // console.log(JSON.parse(state.datagrid.dataset))
    // console.log(JSON.parse(state.datagrid.dataset || '[]'))
    var cakeData = JSON.parse(state.datagrid.dataset || '[]')
    // console.log(cakeData[0])
    return {
        loading: state.datagrid.loading,
        dataset: cakeData[0] || []
    }
}
class datagridComponent extends React.Component{
    state = {path: ''}
    componentDidMount(){

    }
    componentWillReceiveProps(propsType){
        // console.log(this.state.path)
        if(this.props.params.name != this.state.path){
            this.setState({path:this.props.params.name})
            this.props.Init(this.props.params.name);
        } 
        
    }
    render(){
                return (
                <article>
                    {  
                        this.props.dataset.map(function(obj, index){
                            obj.gSpec = obj.gSpec.slice(0,2)
                            var objGID = String("/cakeDatail/"+obj.gId);
                            // 初始化渲染十条
                            if(index >= datagrid_SetList){
                                return false;
                            }
                            // 渲染DOM
                            return (
                                <Link to={objGID} key={index + 'a'} className="datapageA">
                                <dl key={index}>
                                    <dt><img src={obj.gPicture} alt="Cake" /></dt>
                                    <dd><p>{obj.gNameEN}</p></dd>
                                    <dd><p>{obj.gNameZH}</p></dd>
                                    <dd><p>{obj.gDesc}</p></dd>
                                    <dd><p>￥<span>{obj.gPrice}</span>/<span>{
                                        obj.gSpec
                                    }</span></p><Icon type="shopping-cart" /></dd>
                                </dl>
                                </Link>
                            )
                        })
                    }
                </article>
                )
            }

}


export default connect(mapStateToProps, datagridAction)(datagridComponent)