import React from 'react';
import Navigation from './components/navigation'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
    
 

function App() {
  return (
    <Router>
    <div className="App">
      <Navigation/>
      <switch>
        <Route path="/:page" component={PageRenderer} />
        <Route path="/"  render={() => <Redirect to="/home" />} />
        <Route component={() => 404} />
      </switch>
    </div>
    </Router>
  );
}

export default App;
