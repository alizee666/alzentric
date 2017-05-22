
import React from 'react';
import { shallow } from 'enzyme';
import 'utils/test';

import Logo from './';

let props;

beforeEach(() => {
  props = {
    isInverse: false,
  };
});

describe('Test Logo element', () => {
  it('Logo has an svg logo with a default className', () => {
    const wrapper = shallow(<Logo {...props} />);
    expect(wrapper.find('svg').hasClass('grommetux-logo-icon')).toBe(true);
  });

  it('Logo has an svg logo with a provided className', () => {
    props.className = 'provided-class';
    const wrapper = shallow(<Logo {...props} />);
    expect(wrapper.find('svg').hasClass('provided-class')).toBe(true);
  });
});
