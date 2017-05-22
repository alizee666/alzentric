
import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

import MenuDropdown from './';

let props;

beforeEach(() => {
  props = {
    intl: { formatMessage: spy(i => i.defaultMessage) },
    links: [
      { onClick: () => {}, text: { defaultMessage: 'link1' } },
      { onClick: () => {}, text: { defaultMessage: 'link2' } },
    ],
  };
});

describe('Test MenuDropdown', () => {
  it('MenuDropdown has a default dropAlign', () => {
    const wrapper = shallow(<MenuDropdown {...props} />);
    expect(wrapper.find('Menu').prop('dropAlign')).toEqual({ bottom: 'bottom' });
  });

  it('MenuDropdown has a provided dropAlign', () => {
    props.dropAlign = { top: 'top' };
    const wrapper = shallow(<MenuDropdown {...props} />);
    expect(wrapper.find('Menu').prop('dropAlign')).toEqual({ top: 'top' });
  });

  it('MenuDropdown has an icon', () => {
    const wrapper = shallow(<MenuDropdown {...props} />);
    expect(wrapper.find('Menu').prop('icon')).toEqual(MenuDropdown.defaultProps.icon);
  });

  it('MenuDropdown has Anchors', () => {
    const wrapper = shallow(<MenuDropdown {...props} />);
    expect(wrapper.find('Anchor').length).toEqual(2);
  });

  it('MenuDropdown has onClick for Anchors', () => {
    const wrapper = shallow(<MenuDropdown {...props} />);
    expect(wrapper.find('Anchor').at(1).prop('onClick') instanceof Function).toBe(true);
  });
});
