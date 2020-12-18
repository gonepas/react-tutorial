import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import Extracontent from './ExtraContent'
import Faker from 'faker'

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

ReactDOM.render(<Cards/>, document.querySelector('#root'))