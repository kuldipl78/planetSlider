import React from 'react'
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div data-testid="planets" className="main-container">
      <h1 className="main-heading">PLANETS</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {planetsList.map(item => (
            <PlanetItem key={item.id} itemList={item} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
