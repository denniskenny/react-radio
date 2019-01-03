import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {

  constructor (){
    super()
    this.state = {playlist: 'No Playlist'}
    this.getPlaylist = this.getPlaylist.bind(this)
  }

  getPlaylist() {
      axios.get('http://localhost:8000/mp3/')
      .then(response => this.setState({playlist: response.data}));
  }; 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Radio!</h1>
          <p>
            <button
            onClick={this.getPlaylist}>
            Click here to load a playlist</button>
          </p>
          <p>{this.state.playlist}</p>
        </header>

      </div>
    );
  };

}

export default App;
