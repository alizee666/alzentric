import React from 'react';
import { shallow } from 'enzyme';
import { intlMock } from 'utils/test';

import { DashboardHeader } from './';

let props;
beforeEach(() => {
  props = {
    link: '/test',
    name: 'Test',
    intl: intlMock,
  };
});

describe('DashboardHeader test', () => {
  it('DashboardHeader uses Header with className "element-dashboard-header"', () => {
    const wrapper = shallow(<DashboardHeader {...props} />);
    expect(wrapper.find('Header').length).toEqual(1);
    expect(wrapper.find('Header').hasClass('element-dashboard-header')).toBe(true);
  });

  it('DashboardHeader has a <Link/> component', () => {
    const wrapper = shallow(<DashboardHeader {...props} />);
    expect(wrapper.find('Link').length).toEqual(1);
  });
});
