import { Route, Redirect } from 'react-router';
import React from 'react';

import Main from 'containers/Main';

import Tool, {
  Calculator,
} from 'containers/Tool';

export default (
  <Route>
    <Redirect from="/" to="tool/calculator" />

    <Redirect from="/tool" to="tool/calculator" />
    <Route path="tool" component={Tool}>
      <Route path="calculator" component={Calculator} />
    </Route>

    <Route path="/">
      <Route component={Main} />
    </Route>
  </Route>
);
