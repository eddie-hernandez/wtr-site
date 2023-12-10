import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './About.css'

// importing about images
import slide1 from '../../assets/about/1.png'
import slide2 from '../../assets/about/2.png'
import slide3 from '../../assets/about/3.png'
import slide4 from '../../assets/about/4.png'
import slide5 from '../../assets/about/5.png'
import slide6 from '../../assets/about/6.png'
import slide7 from '../../assets/about/7.png'

export default function About() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="pageContainer" id="aboutpage">
      <div className="sliderContainer">
        <Slider {...settings}>
          <div className="aboutSlide">
            <img src={slide1} alt="slide1" className="slideimg" />
          </div>
          <div className="aboutSlide">
            <img src={slide2} alt="slide2" className="slideimg" />
          </div>
          <div className="aboutSlide">
            <img src={slide3} alt="slide3" className="slideimg" />
          </div>
          <div className="aboutSlide">
            <img src={slide4} alt="slide4" className="slideimg" />
          </div>
          <div className="aboutSlide">
            <img src={slide5} alt="slide5" className="slideimg" />
          </div>
          <div className="aboutSlide">
            <img src={slide6} alt="slide6" className="slideimg" />
          </div>
          <div className="aboutSlide">
            <img src={slide7} alt="slide7" className="slideimg" />
          </div>
        </Slider>
      </div>
    </div>
  )
}
