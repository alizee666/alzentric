import { Route, Redirect } from 'react-router';
import React from 'react';

import Tool from 'containers/Tool';

export default (
  <Route>
    <Redirect from="/" to="tool" />

    <Route path="tool" component={Tool} />
  </Route>
);
