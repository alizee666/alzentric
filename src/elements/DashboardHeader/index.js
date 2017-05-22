import React, { PropTypes } from 'react';
import { injectIntl } from 'react-intl';
import { Link } from 'react-router';

import isString from 'lodash/isString';
import isEmpty from 'lodash/isEmpty';

import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import LinkPrevious from 'grommet/components/icons/base/LinkPrevious';

export const DashboardHeader = ({ intl, link, size, name, bold }) =>
  <Header
    className="element-dashboard-header"
    justify="between"
    pad={{
      vertical: 'medium',
      horizontal: 'small',
    }}
  >
    <Box
      direction="row"
      align="center"
      responsive={false}
      pad={{ between: 'small' }}
    >

      {link &&
        <Box
          className="arrow-link"
          direction="column"
          pad={{ horizontal: 'medium' }}
        >
          <Link to={link}>
            <LinkPrevious />
          </Link>
        </Box>
      }

      <Heading tag={`h${size}`} strong={bold}>
        {isString(name) || isEmpty(name) ? name : intl.formatMessage(name)}
      </Heading>
    </Box>
  </Header>;

DashboardHeader.defaultProps = {
  size: 2,
  bold: false,
};

const { object, oneOfType, string, number, bool } = PropTypes;
DashboardHeader.propTypes = {
  intl: object.isRequired,
  size: number.isRequired,
  bold: bool.isRequired,
  link: string,
  name: oneOfType([
    string,
    object,
  ]).isRequired,
};

DashboardHeader.displayName = 'DashboardHeader';

export default injectIntl(DashboardHeader);
