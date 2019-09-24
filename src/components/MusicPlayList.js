import React, { Component } from 'react';
import Tabletop from 'tabletop';

class MusicPlayList extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    Tabletop.init({
      key: process.env.REACT_APP_API_KEY,
      callback: googleData => {
        console.log('google sheet data --->', googleData);
        this.setState({
          data: googleData.Music.elements
        });
      },
      simpleSheet: false
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Music Playlist List </h1>
        </header>
        <div>
          {data.map(obj => {
            return (
              <div key={obj.Song_Id}>
                <p>
                  Artist: {obj.Artist}- {obj.Song}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MusicPlayList;