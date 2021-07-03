import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import {connect} from 'react-redux';
import * as homeAction from './homeAction';
import CarouselComponent from '../tinyComponents/carousel.js';
class contentComponent extends React.Component{
    componentDidMount(){
        // this.props.Init();
    }
    render(){
        if(typeof(this.props.dataset) == 'object'){
            // const data = this.props.dataset[0];
            // const gIntro = data[0].gIntro.split('&');
            // const gDetalispic = data[0].gDetalispic.split('&');
            // const gMaterials = data[0].gMaterials.split(',');
            // {
            //                     gDetalispic.map(function(item,index){
            //                         return(
            //                             <li><Link><img src={item} /><span>蛋糕</span></Link></li>
            //                             )
                                    
            //                     })
            //                 }
            // console.log(this.props.dataset)
            return (
                <div>
                    <CarouselComponent/>
                    <div className="classify">
                        <ul>
                            <li><Link to="/datagrid"><img src="./src/img/cake1.jpg" /><span>蛋糕</span></Link></li>
                            <li><Link to="/datagrid/cc/冰淇淋"><img src="./src/img/cake2.jpg" /><span>冰淇淋</span></Link></li>
                            <li><Link to="/datagrid/cc/小切块"><img src="./src/img/cake3.jpg" /><span>小切块</span></Link></li>
                            <li><Link to='/datagrid/cc/鲜花'><img src="./src/img/cake4.jpg" /><span>定制</span></Link></li>
                        </ul>
                    </div>
                    <div className="billboard">
                        <h2>cake.榜单</h2>
                        <div className="billcarousel">
                            <ul>
                                <li><Link to="/cakeDatail/1"><img src="./src/img/cake1.jpg" /></Link></li>
                                <li><Link><img src="./src/img/cake2.jpg" /></Link></li>
                                <li><Link><img src="./src/img/cake3.jpg" /></Link></li>
                            </ul>
                        </div>
                        <div className="billist">
                            <ul>
                                {
                                    this.props.dataset[2].map(function(obj,index){
                                        var objId = String(/cakeDatail/+obj.gId);
                                        return(
                                                <li key={index+'bb'}><Link to={objId}><img src={obj.gPicture} /><span>{obj.gNameZH}</span></Link></li>
                                            )
                                    })
                                    
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="popularity">
                        <h2>cake.人气</h2>
                        <div className="popularitytitle">
                            <Link><img src="./src/img/b022_1.jpg" /></Link>
                        </div>
                        <div className="billist">
                            <ul>
                                {
                                    this.props.dataset[0].map(function(obj,index){
                                        var objId = String(/cakeDatail/+obj.gId);
                                        return(
                                            <li key={index + 'aa'}><Link to={objId}><img src={obj.gPicture} /><span>{obj.gNameZH}</span></Link></li>

                                            )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="popularity">
                        <h2>cake.新品</h2>
                        <div className="popularitytitle">
                            <Link><img src="./src/img/b037_4.jpg" /></Link>
                        </div>
                        <div className="billist">
                            <ul>
                                {
                                    this.props.dataset[1].map(function(obj,index){
                                        var objId = String(/cakeDatail/+obj.gId);
                                        return(
                                            <li key={index + 'aa'}><Link to={objId}><img src={obj.gPicture} /><span>{obj.gNameZH}</span></Link></li>

                                            )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }else{
            return (<div></div>)
        }
        
    }
}
const mapStateToProps = function(state){
    var dataset  = state.home.dataset || '[]'
    return {
        loading: state.home.loading,
        dataset: dataset || '[]'
    }
}

export default connect(mapStateToProps, homeAction)(contentComponent)