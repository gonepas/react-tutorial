import React from 'react';
import Faker from 'faker';

const Detail = props => {
  var author = props.author ? props.author : Faker.name.findName();
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={Faker.image.nightlife()} alt="avatar"/>
      </a>
      <div className="content">
        <a href="/" className="author">
          {author}
        </a>
        <div className="metadata">
          <span className="date">{Faker.date.past}</span>
        </div>
        <div className="text">{Faker.lorem.sentence()}</div>
      </div>
    </div>
  );
}

export default Detail;