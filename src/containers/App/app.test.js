import React from 'react';
import { shallow } from 'enzyme';
import Cookies from 'grommet/utils/Cookies';
import App from './';

jest.mock('routes', () => []);
jest.mock('store', () => ({
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(),
}));
jest.mock('history', () => jest.fn());
jest.mock('react-router-redux', () => ({
  syncHistoryWithStore: jest.fn(),
}));

describe('App container', () => {
  ['en-US'].forEach((lang) => {
    it(`renders App with supported locale ${lang}`, () => {
      Cookies.set('languages', `["${lang}"]`);
      const wrapper = shallow(<App />);
      expect(wrapper.find('Provider').length).toEqual(1);
      expect(wrapper.find('IntlProvider').prop('locale')).toEqual(lang);
      const messages = wrapper.find('IntlProvider').prop('messages');
      expect(Object.keys(messages).length).toBeGreaterThan(0);
    });
  });

  it('renders App with unsupported locale zz and defaults to en-US', () => {
    Cookies.set('languages', '["zz"]');
    const wrapper = shallow(<App />);
    expect(wrapper.find('Provider').length).toEqual(1);
    expect(wrapper.find('IntlProvider').prop('locale')).toEqual('en-US');
  });
});
