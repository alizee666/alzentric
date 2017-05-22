
import React from 'react';
import { shallow } from 'enzyme';
import { spy, stub } from 'sinon';

import { SidebarNav } from './';

const defaultProps = () => ({
  title: {},
  routes: [],
  bgColor: '',
  className: '',
  toggleSidebar: spy(),
  intl: {
    formatDate: spy(),
    formatTime: spy(),
    formatRelative: spy(),
    formatNumber: spy(),
    formatPlural: spy(),
    formatMessage: spy(),
    formatHTMLMessage: spy(),
    now: spy(),
  },
});

let props;

beforeEach(() => {
  props = defaultProps();
});

describe('SidebarNav', () => {
  it('SidebarNav has a Sidebar', () => {
    const wrapper = shallow(<SidebarNav {...props} />);
    expect(wrapper.find('Sidebar').length).toEqual(1);
  });

  it('SidebarNav has a button that toggles the sidebar', () => {
    const wrapper = shallow(<SidebarNav {...props} />);
    expect(wrapper.find('Header > Button').length).toEqual(1);
  });

  it('SidebarNav toggle button calls toggleSidebar prop', () => {
    const wrapper = shallow(<SidebarNav {...props} />);
    wrapper.find('Header > Button').simulate('click');
    expect(props.toggleSidebar.calledOnce).toBe(true);
  });

  it('SidebarNav has no links without routes', () => {
    const wrapper = shallow(<SidebarNav {...props} />);
    expect(wrapper.find('.link').length).toEqual(0);
  });

  it('SidebarNav has routes as links', () => {
    props.routes.push({ route: '/', label: { id: 'intl.id' } });
    props.intl.formatMessage = stub().returns('intl.id');
    const wrapper = shallow(<SidebarNav {...props} />);
    expect(wrapper.find('Link').length).toEqual(1);
    expect(wrapper.find('Link').prop('to')).toEqual('/');
    expect(wrapper.find('Link').contains('intl.id')).toBe(true);
  });

  it('SidebarNav treats disabled links specially', () => {
    props.routes.push({ isDisabled: true, route: '/', label: { id: 'intl.id' } });
    props.intl.formatMessage = stub().returns('intl.id');
    const wrapper = shallow(<SidebarNav {...props} />);
    expect(wrapper.find('Link').length).toEqual(0);
    expect(wrapper.find('.link').length).toEqual(1);
    expect(wrapper.find('.link').contains('intl.id')).toBe(true);
  });
});
