import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Carousel} from 'antd';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import GoBack from './goback.js'
class DetailComponent extends React.Component{
    render(){
        return (
                <ul>
                    <li><Link><GoBack/></Link></li>
                    <li><Link><Icon type="star" /></Link></li>
                    <li><Link><Icon type="message" /><i>10</i></Link></li>
                </ul> 
        )
    }
}
export default DetailComponent