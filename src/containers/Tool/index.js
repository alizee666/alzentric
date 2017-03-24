import React from 'react';
import { compose } from 'recompose';

import App from 'grommet/components/App';

export function Tool() {
  return (
    <App centered={false}>
      <div>
        Application
      </div>
    </App>
  );
}

export default compose(
)(Tool);
