import React from 'react';

import { fromJS } from 'immutable';
import { shallow } from 'enzyme';

import ErrorList from './';

let props;
beforeEach(() => {
  props = {
    errors: fromJS({ messages: ['error message1', 'message 2'] }),
  };
});

describe('ErrorList tests', () => {
  it('renders a ListItem for each error', () => {
    const wrapper = shallow(<ErrorList {...props} />);

    expect(wrapper.find('[data-testref="multiple"] ListItem').length)
      .toBe(props.errors.get('messages').size);
    expect(wrapper.find('[data-testref="multiple"] ListItem div').at(0).text())
      .toEqual('error message1');
    expect(wrapper.find('[data-testref="multiple"] ListItem div').at(1).text())
      .toEqual('message 2');
  });

  it('renders nothing if there are no messages', () => {
    props.errors = props.errors.delete('messages');
    const wrapper = shallow(<ErrorList {...props} />);
    expect(wrapper.html()).toBe(null);
  });

  it('renders a box and single ListItem if not array of errors', () => {
    props.errors = { messages: 'single message' };
    props.heading = 'VM';
    const wrapper = shallow(<ErrorList {...props} />);

    expect(wrapper.find('[data-testref="single"] ListItem div').text()).toEqual('single message');
    expect(wrapper.find('[data-testref="single"] Heading').html().indexOf('VM Error:') > -1)
      .toBe(true);
  });

  it('renders a box with provided padding', () => {
    props.pad = 'none';
    props.errors = { messages: 'single message' };
    const wrapper = shallow(<ErrorList {...props} />);
    expect(wrapper.find('[data-testref="single"]').prop('pad')).toEqual('none');
  });
});
