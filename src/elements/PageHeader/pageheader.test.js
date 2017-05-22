
import React from 'react';
import { shallow } from 'enzyme';

import NavLogo from 'elements/NavLogo';
import DashboardHeader from 'elements/DashboardHeader';
import PageHeader from './';

jest.mock('elements/NavLogo', () => jest.fn());
jest.mock('elements/DashboardHeader', () => jest.fn());

describe('PageHeader', () => {
  let props;
  beforeEach(() => {
    props = {
      isNavlogoVisible: true,
      toggleSidebar: jest.fn(),
      heading: 'Heading',
    };
  });

  it('renders a NavLogo when main logo is not visible', () => {
    const wrapper = shallow(<PageHeader {...props} />);
    const logo = wrapper.find(NavLogo);
    expect(logo.length).toBe(1);
    expect(logo.prop('isVisible')).toBeTruthy();
    expect(logo.prop('toggle')).toEqual(props.toggleSidebar);
  });

  it('uses DashboardHeader when there is a heading link', () => {
    const wrapper = shallow(<PageHeader {...props} link="/link" />);
    const dashboard = wrapper.find(DashboardHeader);
    expect(dashboard.prop('name')).toEqual(props.heading);
    expect(dashboard.prop('link')).toEqual('/link');
  });
});
