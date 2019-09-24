import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-wrapper';

const Home = () => {
    const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <h1>Home</h1>
      <Link className='Link' to="/electronics">Electronic Playlist</Link>
      <br />
      <Link className='Link' to="/audiobooks">AudioBook Playlist</Link>
      <br />
      <Link className='Link' to="/audiobookplayer">AudioBook Player</Link>
      <br />
      <Link className='Link' to="/playlist">Music List</Link>
      <br />
      <Link className='Link' to="/audiobookplaylist">AudioBook List</Link>
      <br />  
    </div>
  );
};

export default Home;
