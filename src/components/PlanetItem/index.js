import React from 'react'

import './index.css'

const PlanetItem = props => {
  const {itemList} = props
  const {name, imageUrl, description} = itemList

  return (
    <>
      <li className="planet-item">
        <img alt={`planet ${name}`} className="img-items" src={imageUrl} />
        <h1 key="name" className="heading">
          {name}
        </h1>
        <p key = 'description' className="description">{description}</p>
      </li>
    </>
  )
}

export default PlanetItem
