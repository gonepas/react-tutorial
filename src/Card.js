import React from 'react'
import Faker from 'faker'

const Card = (props) => {
  return (
    <div className="card">
      <div className="content">
        <img className="right floated mini ui image" src={Faker.image.nightlife()} />
        <div className="header">
          {props.name}
        </div>
        <div className="meta">
          {props.meta}
        </div>
        <div className="description">
          {props.description}
        </div>
      </div>
      {props.children}
    </div>
  )
}

export default Card