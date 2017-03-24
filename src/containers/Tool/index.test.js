
import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { fromJS } from 'immutable';

import { Tool } from './';

let props;

beforeEach(() => {
  props = {
    intl: { formatMessage: spy(i => i.defaultMessage) },
    calculator: {
      pathname: 'abc',
    },
    route: {
      path: '/',
      childRoutes: [{ path: 'dashboard' }, { path: 'settings' }],
    },
    toggleSidebar: spy(),
    tool: fromJS({
      isSidebarVisible: true,
      alertBanner: { status: true },
    }),
    children: <div />,
  };
});

describe('Tool Main container', () => {
  it('Renders Tool', () => {
    const wrapper = shallow(<Tool {...props} />);
    expect(wrapper.find('Split').length).toEqual(0);
  });
});
