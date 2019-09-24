import React from 'react';
import './App.css';
import AudioPlayList from './components/AudioPlayList';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Home';
import Electronics from './components/Electronics';
import AudioBooks from './components/AudioBooks';
import AudioBookPlayer from './components/AudioBookPlayer';
import NavBar from './components/NavBar';
import MusicPlayList from './components/MusicPlayList';
import { useAuth0 } from './react-auth0-wrapper';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Router>
        <div>
          <NavBar />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/electronics" component={Electronics} />
          <PrivateRoute exact path="/audiobooks" component={AudioBooks} />
          <PrivateRoute exact path="/audiobookplayer" component={AudioBookPlayer} />
          <PrivateRoute exact path="/playlist" component={MusicPlayList} />
          <PrivateRoute exact path="/audiobookplaylist" component={AudioPlayList} />
        </Switch>  
        </div>
      </Router>
    </div>
  );
};

export default App;