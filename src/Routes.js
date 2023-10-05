import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import Movie from './components/Movie';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={MovieList} />
      <Route path="/movie/:id" component={Movie} />
    </Switch>
  );
};

export default Routes;
