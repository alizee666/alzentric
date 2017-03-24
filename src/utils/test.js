// This is a util that uses tape and tape-jsx-equals
/* eslint-disable */

import React from 'react';
import { IntlProvider } from 'react-intl';
import _ from 'lodash';
import tape from 'tape';
import jsxEquals from 'tape-jsx-equals';
import addAssertions from 'extend-tape';
import { spy } from 'sinon';

const Module = require('module');

// Make svg imports work in tests!
Module._extensions['.svg'] = (module) => {
  module.exports = '';
};

Module._extensions['.scss'] = (module, filename) => {
  module.exports = '';
};

export const intlMock = {
  formatHTMLMessage: spy(),
  formatRelative: spy(),
  formatMessage: spy(i => i && i.defaultMessage),
  formatPlural: spy(),
  formatNumber: spy(),
  formatTime: spy(),
  formatDate: spy(),
  now: spy(),
};

export const eventMock = {
  target: {
    value: 'VALUE',
    name: 'NAME',
    getAttribute: spy(attr => eventMock.target[attr]),
  },
  preventDefault: spy(),
};

export const collectionMock = (items = []) => ({
  count: items.length,
  start: 0,
  unfilteredTotal: items.length,
  total: items.length,
  items,
});

// This just extends the methods on tape for jsx
export const testReact = addAssertions(tape, { jsxEquals });


export const wrapIntlProvider = jsx => (
  <IntlProvider locale="en">
    {jsx}
  </IntlProvider>
  );

// This is just a style convention for test organization and readability
export default (() => {
  const template = (type = 'no-type', name = 'no-name') => `
    ----- ${_.upperFirst(type)} Tests: ${_.upperFirst(name)} -----
    `;

  const rendered = (name = 'no-name', type = 'component') => `${_.upperFirst(name)} ${_.upperFirst(type)} rendered properly.`;

  const react = {
    element(name) {
      return template('React Element', name);
    },
    component(name) {
      return template('React Component', name);
    },
    container(name) {
      return template('React Container', name);
    },
    render(name, type) {
      return rendered(name, type);
    },
  };

  const redux = {
    action(name) {
      return template('Redux Action', name);
    },
    reducer(name) {
      return template('Redux Reducer', name);
    },
    saga(name) {
      return template('Redux Saga', name);
    },
  };

  return { react, redux };
})();
