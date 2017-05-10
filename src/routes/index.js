import { Route, Redirect } from 'react-router';
import React from 'react';

import Main from 'containers/Main';
import Tool from 'containers/Tool';

export default (
  <Route>
    <Route path="tool" component={Tool} />

    <Route path="/">
      <Route component={Main} />
    </Route>
  </Route>
);
