
import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

import Logo from 'elements/Logo';
import { NavLogo } from './';

jest.mock('elements/Logo', () => jest.fn());

let props;

beforeEach(() => {
  props = {
    title: {
      main: 'Hellfire',
      sub: 'sub',
    },
    toggle: spy(),
    isVisible: true,
    isInverse: false,
    intl: {
      formatMessage: spy(),
    },
  };
});

describe('element test', () => {
  it('can be hidden', () => {
    props.isVisible = false;
    const wrapper = shallow(<NavLogo {...props} />);
    expect(wrapper.is('span')).toBe(true);
  });

  it('has an inverse logo', () => {
    props.isInverse = true;
    const wrapper = shallow(<NavLogo {...props} />);
    expect(wrapper.find(Logo).prop('isInverse')).toEqual(true);
  });

  it('has an inverse logo', () => {
    props.isInverse = false;
    const wrapper = shallow(<NavLogo {...props} />);
    expect(wrapper.find(Logo).prop('isInverse')).toEqual(false);
  });

  it('has a sub title', () => {
    const wrapper = shallow(<NavLogo {...props} />);
    expect(wrapper.find('.logo-title.label').contains(props.title.sub)).toBe(true);
  });

  it('toggles when clicking the Title', () => {
    const wrapper = shallow(<NavLogo {...props} />);
    wrapper.find('Title').simulate('click');
    expect(props.toggle.calledOnce).toBe(true);
  });

  it('has a left aligning class', () => {
    const wrapper = shallow(<NavLogo {...props} isLeft />);
    expect(wrapper.find('#navLogo').hasClass('left'));
  });
});
