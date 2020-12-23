import Card from './Card'
import Faker from 'faker'
import Extracontent from './ExtraContent'
import React from 'react'

const Cards = () => {
  return (
    <div className="ui cards">
      <Card meta = {Faker.commerce.productName()} name={Faker.name.findName()} description={Faker.lorem.sentence()}>
        <Extracontent/>
      </Card>
      <Card meta = {Faker.commerce.productName()} name={Faker.name.findName()} description={Faker.lorem.sentence()}>
        <Extracontent/>
      </Card>
      <Card meta = {Faker.commerce.productName()} name={Faker.name.findName()} description={Faker.lorem.sentence()}>
        <Extracontent/>
      </Card>
    </div>
  )
}

export default Cards