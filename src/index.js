import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img src="/" alt="avatar"/>
        </a>
        <div className="content">
          <a href="/" className="author">
            CEB
          </a>
          <div className="metadata">
            <span className="date">Today 06:00 PM</span>
          </div>
          <div className="text">Nice comment</div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));