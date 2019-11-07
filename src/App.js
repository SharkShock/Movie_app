import React from 'react';
import './App.css';
import Nav from './Nav';
import Movie_list from './Movie_list';
import Movie_gallery from './Movie_gallery';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Movie_list}/>
        <Route path="/Movie_gallery" component={Movie_gallery}/>
        <Route path="/Movie_list" component={Movie_list}/>
      </Switch>
    </div>
    </Router>
  );
}


export default App;
