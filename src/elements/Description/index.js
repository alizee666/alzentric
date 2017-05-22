import React, { PropTypes } from 'react';
import { injectIntl } from 'react-intl';

import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';

require('./styles.scss');

const Description = ({
  intl,
  header,
  children,
}) =>
  <Box
    pad={{ vertical: 'small' }}
    className="element-description"
  >
    <Heading
      tag="h4"
      margin="small"
      strong
    >
      { intl.formatMessage(header) }
    </Heading>

    <span
      className="text"
      width="small"
    >
      {children}
    </span>
  </Box>;

const { object, node } = PropTypes;

Description.propTypes = {
  intl: object.isRequired,
  children: node,
  header: object.isRequired,
};

export default injectIntl(Description);
