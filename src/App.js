import React from 'react'
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {
  state = {
    latt: null,
    long: 40,
    loaded: false,
    hasError: false,
    errorMsg: ''
  }

  componentDidMount () {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({latt: position.coords.latitude, long: position.coords.longitude, loaded: true, hasError: false});
      },
      positionError => {
        this.setState({loaded: true, hasError: true, errorMsg: positionError.message});
      }
    );
  }

  render () {
    if (!this.state.loaded) {
      return (
        <div>
          Loading ...
        </div>
      );
    } else if (this.state.hasError) {
      return (
        <div>
          Something went wrong !!! Cant get your location.<br/>
          <span style={{color: "red", fontSize: "11px"}}>{this.state.errorMsg}</span>
        </div>
      );
    } else {
      return (
        <SeasonDisplay latt={this.state.latt} long={this.state.long} />
      );
    }
  }
}

export default App