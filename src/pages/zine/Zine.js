import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './Zine.css'

// importing about images
import slide1 from '../../assets/about/1.png'
import slide2 from '../../assets/about/2.png'
import slide3 from '../../assets/about/3.png'
import slide4 from '../../assets/about/4.png'
import slide5 from '../../assets/about/5.png'
import slide6 from '../../assets/about/6.png'
import slide7 from '../../assets/about/7.png'

export default function Zine() {
  function renderCustomPrevArrow(onClickHandler, hasPrev, label) {
    if (!hasPrev) {
      return (
        <h1 className="carousel-arrow carousel-arrow-left arrow-disabled">
          {'<'}
        </h1>
      )
    }
    return (
      <h1
        onClick={onClickHandler}
        className="carousel-arrow carousel-arrow-left"
      >
        {'<'}
      </h1>
    )
  }

  function renderCustomNextArrow(onClickHandler, hasNext, label) {
    if (!hasNext) {
      return (
        <h1 className="carousel-arrow carousel-arrow-right arrow-disabled">
          {'>'}
        </h1>
      )
    }
    return (
      <h1
        onClick={onClickHandler}
        className="carousel-arrow carousel-arrow-right"
      >
        {'>'}
      </h1>
    )
  }

  return (
    <div className="pageContainer" id="zinepage">
      <Carousel
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={renderCustomPrevArrow}
        renderArrowNext={renderCustomNextArrow}
      >
        <div>
          <img src={slide1} alt="slide1" />
        </div>
        <div>
          <img src={slide2} alt="slide2" />
        </div>
        <div>
          <img src={slide3} alt="slide3" />
        </div>
        <div>
          <img src={slide4} alt="slide4" />
        </div>
        <div>
          <img src={slide5} alt="slide5" />
        </div>
        <div>
          <img src={slide6} alt="slide6" />
        </div>
        <div>
          <img src={slide7} alt="slide7" />
        </div>
      </Carousel>
    </div>
  )
}
