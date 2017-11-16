import React from 'react';
import { Carousel} from 'antd';
import './sass/carousel.scss';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import {connect} from 'react-redux';
import * as homeAction from '../home/homeAction.js';
class CarouselComponent extends React.Component{
    render(){
        return (
            <Carousel autoplay>
                {
                    this.props.dataset[3].map(function(obj,index){
                        var objId = String(/cakeDatail/+obj.gId);
                        return(
                                <div key={index+'t'}><Link to={objId}><img src={obj.gPicture} /></Link></div>
                            )
                    })
                }
            </Carousel>
        )
    }
}

const mapStateToProps = function(state){
    var dataset  = state.home.dataset || '[]'
    return {
        loading: state.home.loading,
        dataset: dataset || '[]'
    }
}

export default connect(mapStateToProps, homeAction)(CarouselComponent)