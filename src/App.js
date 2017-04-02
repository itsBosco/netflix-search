import React, { Component } from 'react';
import { HashRouter, Route} from 'react-router-dom';
import './App.css';

import Landing from './components/Landing/Landing';
import TitleDetails from './components/TitleDetails/TitleDetails';
import ActorDetails from './components/ActorDetails/ActorDetails';
import DirectorDetails from './components/DirectorDetails/DirectorDetails';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Landing}/>
          <Route path="/title/:searchValue" component={TitleDetails} />
          <Route path="/actor/:searchValue" component={ActorDetails} />
          <Route path="/director/:searchValue" component={DirectorDetails} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
