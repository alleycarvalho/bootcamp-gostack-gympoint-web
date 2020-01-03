import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';

import Dashboard from '~/pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={SignIn} />

      <Route path="/" exact component={Dashboard} isPrivate />

      <Route path="/" component={() => <h1>404 - Not Found</h1>} />
    </Switch>
  );
}
