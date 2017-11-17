import React from 'react';
import { Carousel} from 'antd';
class DetailCover extends React.Component{
    render(){
        return (
            <div className="cover">
                <div className="citylist">
                    <div className="headline">
                        <h3>选择城市</h3>
                    </div>
                    <ul className="list">
                        <li><span>√</span><span>上海</span></li>
                        <li><span>√</span><span>北京</span></li>
                        <li><span>√</span><span>天津</span></li>
                        <li><span>√</span><span>杭州</span></li>
                        <li><span>√</span><span>苏州</span></li>
                        <li><span>√</span><span>广州</span></li>
                        <li><span>√</span><span>深圳</span></li>
                        <li><span>√</span><span>南宁</span></li>
                    </ul>
                    <div className="hint">*切换城市将清空购物车</div>
                    <div className="btn">
                        <button>确定</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailCover