import React from "react";
import About from './../About/About'
import Services from './../Services/Services'
import Slider from "react-slick";
import { Element, animateScroll as scroll } from 'react-scroll';
import './Homepage.css';

class Homepage extends React.Component {

  scrollToTop() {
    scroll.scrollToTop({ duration: 300 });
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false,
      autoplay: true,
      autoplaySpeed: 2000
    };

    return (
      <>
        <div>
          <div className="sliders">
            <Slider {...settings}>
              <div>
                <img src={require('./../../assets/img/carousel/bigstock-Construction-Of-Gas-Pipeline-T-163368245.jpg')} alt="" className="img-fluid"/>
              </div>
              <div>
                <img src={require('./../../assets/img/carousel/Barack_Obama_speaks_with_CEO_of_Namaste_Solar_Electric,_Inc.,_Blake_Jones,_while_looking_at_solar_panels_in_Denver,_Col.,_2009.jpg')} alt="" className="img-fluid"/>
              </div>
              <div>
                <img src={require('./../../assets/img/carousel/Bouri_NC_41_DP4_platform.jpg')} alt="" className="img-fluid"/>
              </div>
            </Slider>
          </div>
          <Element name="about">
            <About />
          </Element>
          <Element name="services">
            <Services />
          </Element>
          <div className="scrolltop" onClick={this.scrollToTop}>
            <i className="fa fa-chevron-up"></i>
          </div>
        </div>
      </>
    );
  }
}

export default Homepage;