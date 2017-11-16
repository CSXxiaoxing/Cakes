import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import CarouselComponent from '../tinyComponents/carousel.js';
class contentComponent extends React.Component{
    componentDidMount(){
        console.log(66)
    }
    render(){
        return (
            <div>
                <CarouselComponent/>
                <div className="classify">
                    <ul>
                        <li><Link><img src="./src/img/cake1.jpg" /><span>蛋糕</span></Link></li>
                        <li><Link><img src="./src/img/cake2.jpg" /><span>冰淇淋</span></Link></li>
                        <li><Link><img src="./src/img/cake3.jpg" /><span>小切块</span></Link></li>
                        <li><Link><img src="./src/img/cake4.jpg" /><span>定制</span></Link></li>
                    </ul>
                </div>
                <div className="billboard">
                    <h1>cake.榜单</h1>
                    <div className="billcarousel">
                        <ul>
                            <li><Link to="/cakeDatail/12"><img src="./src/img/cake1.jpg" /></Link></li>
                            <li><Link><img src="./src/img/cake2.jpg" /></Link></li>
                            <li><Link><img src="./src/img/cake3.jpg" /></Link></li>
                        </ul>
                    </div>
                    <div className="billist">
                        <ul>
                            <li><Link><img src="./src/img/cake1.jpg" /><span>蛋糕</span></Link></li>
                            <li><Link><img src="./src/img/cake2.jpg" /><span>冰淇淋</span></Link></li>
                            <li><Link><img src="./src/img/cake3.jpg" /><span>小切块</span></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="popularity">
                    <h1>cake.人气</h1>
                    <div className="popularitytitle">
                        <Link><img src="./src/img/cake1.jpg" /></Link>
                    </div>
                    <div className="billist">
                        <ul>
                            <li><Link><img src="./src/img/cake1.jpg" /><span>蛋糕</span></Link></li>
                            <li><Link><img src="./src/img/cake2.jpg" /><span>冰淇淋</span></Link></li>
                            <li><Link><img src="./src/img/cake3.jpg" /><span>小切块</span></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default contentComponent