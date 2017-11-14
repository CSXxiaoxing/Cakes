import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';

import SpinnerComponent from '../spinner/spinner';
import * as datagridAction from './datagridAction';

const mapStateToProps = function(state){
    return {
        loading: state.home.loading,
        dataset: state.home.dataset || []
    }
}

class datagridComponent extends React.Component{
    componentWillReceiveProps(){
        console.log(this.props.params.name)
    }
    render(){
                return (
                <article>
                        {
                            this.props.dataset.map(function(obj, index){
                                return (
                                <Link to="/" key={index + 'a'} className="datapageA">
                                <dl key={index}>
                                    <dt><img src={obj.src} alt="Cake" /></dt>
                                    <dd><p>{obj.ename}</p></dd>
                                    <dd><p>{obj.cname}</p></dd>
                                    <dd><p>{obj.jianjie}</p></dd>
                                    <dd><p>￥<span>{obj.price}</span>/<span>{obj.b}</span>傍</p></dd>
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