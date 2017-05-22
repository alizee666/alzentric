import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import { fromJS, Map } from 'immutable';

export default function ErrorList({
  heading,
  errors: _errs,
  pad = 'small',
}) {
  let errors = _errs;

  if (!Map.isMap(errors)) {
    errors = fromJS(errors);
  }

  if (!errors.has('messages')) return null;

  const messages = errors.get('messages');

  if (messages.size) {
    // Supporting multiple error messages- currently not being used (BE doesn't support array structure)
    return (
      <List className="error" data-testref="multiple">
        {messages.map((message, index) => (
          <ListItem
            key={index}
            direction="column"
            align="start"
            separator="none"
            pad={{ vertical: 'small' }}
          >
            <div>{message}</div>
          </ListItem>
        ))}
      </List>
    );
  }

  return (
    <Box data-testref="single" pad={pad}>
      {heading &&
        <Heading tag="h6" strong margin="none" className="error">
          {heading} Error:
        </Heading>
      }
      <List className="error">
        <ListItem
          direction="column"
          align="start"
          separator="none"
          pad={{ vertical: 'small' }}
        >
          <div>{messages}</div>
        </ListItem>
      </List>
    </Box>
  );
}

ErrorList.propTypes = {
  heading: PropTypes.string,
  errors: PropTypes.object,
};
