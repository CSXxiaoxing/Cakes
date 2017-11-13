import React from 'react';
import { Carousel} from 'antd';
import './carousel.scss'
class CarouselComponent extends React.Component{
    render(){
        return (
            <Carousel autoplay>
                <div><img src="./src/img/cake1.jpg" /></div>
                <div><img src="./src/img/cake2.jpg" /></div>
                <div><img src="./src/img/cake3.jpg" /></div>
                <div><img src="./src/img/cake4.jpg" /></div>
            </Carousel>
        )
    }
}

export default CarouselComponent