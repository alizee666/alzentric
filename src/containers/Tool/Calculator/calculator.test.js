import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { fromJS } from 'immutable';
import { intlMock } from 'utils/test';
import * as router from 'react-router';

import {
  Calculator,
} from './';

jest.mock('elements/NavLogo', () => jest.fn());
jest.mock('elements/Description', () => jest.fn());

router.browserHistory = {
  push: spy(),
};

let props;

beforeEach(() => {
  props = {
    intl: intlMock,
    isNavlogoVisible: false,
    toggleSidebar: spy(),
    errors: fromJS({}),
    clearFormErrors: spy(),
    tool: fromJS({
      isSidebarVisible: false,
      errors: {},
      system: {
        first: '1',
        second: '2',
      },
    }),
  };
});

describe('Calculator container tests', () => {
  it('componentWillMount tests', () => {
    shallow(<Calculator {...props} />);
    expect(true).toBe(true);
  });
});
