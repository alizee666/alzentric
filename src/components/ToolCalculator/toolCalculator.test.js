import React from 'react';
import { spy } from 'sinon';
import { shallow } from 'enzyme';
import { intlMock } from 'utils/test';
import { fromJS } from 'immutable';
import ToolCalculator from './';

jest.mock('grommet/components/Section', () => jest.fn());
jest.mock('grommet/components/Header', () => jest.fn());
jest.mock('grommet/components/Form', () => jest.fn());
jest.mock('grommet/components/Box', () => jest.fn());
jest.mock('elements/NavLogo', () => jest.fn());

let props;
beforeEach(() => {
  props = {
    intl: intlMock,
    isNavlogoVisible: true,
    toggleSidebar: jest.fn(),
    onCalculate: spy(),
    system: fromJS({
      ipaddress: '15.114.75.246',
      first: '1',
      second: '2',
    }),
    onChange: spy(),
    errors: fromJS({}),
  };
});

describe('Tool Calculator', () => {
  it('Tool Calculator Div', () => {
    const wrapper = shallow(<ToolCalculator {...props} />);
    expect(wrapper.find('div').length).toEqual(2);
  });
});
