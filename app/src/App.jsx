import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  Login, CharacterDetails, ComicsDetails, Favorites, Profile,
  Register, Search,
} from './pages';
import './assets/scss/reset.scss';
import './assets/scss/base.scss';

require('typeface-bebas-neue');

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/searcg" component={Search} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/details/character/:id" component={CharacterDetails} />
        <Route exact path="/details/comics/:id" component={ComicsDetails} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
