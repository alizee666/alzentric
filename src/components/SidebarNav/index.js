import { injectIntl, intlShape } from 'react-intl';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import has from 'lodash/has';

import CloseIcon from 'grommet/components/icons/base/Close';

import Sidebar from 'grommet/components/Sidebar';
import Button from 'grommet/components/Button';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Box from 'grommet/components/Box';

import NavLogo from 'elements/NavLogo';
import MenuDropdown from 'elements/MenuDropdown';

// @TODO: remove unneeded colorIndex prop definitions when Grommet issue is resolved
// https://github.com/grommet/grommet/issues/902

export const SidebarNav = ({
  intl,
  title,
  routes,
  bgColor,
  className,
  menuDropdown,
  toggleSidebar,
}) =>
  <Sidebar
    full
    className={className}
    colorIndex={bgColor}
  >
    <Box justify="between" direction="column" full>
      <Box direction="column">
        <Header
          justify="between"
          pad="medium"
        >

          <NavLogo
            intl={intl}
            title={title}
            isInverse={false}
            isVisible
            toggle={toggleSidebar}
          />

          <Button
            icon={<CloseIcon />}
            onClick={() => toggleSidebar()}
            a11yTitle="Close Menu"
          />

        </Header>

        <Menu
          pad={{ vertical: 'small' }}
          align="start"
          direction="column"
          justify="between"
          primary
        >

          {routes.map((route) => {
            if (has(route, 'isDisabled') && route.isDisabled) {
              return (
                <a className="link" key={route.label.id}>
                  {intl.formatMessage(route.label)}
                </a>
              );
            }
            return (
              <Link
                key={route.label.id}
                className="link grommetux-anchor"
                to={route.route}
                activeClassName="active"
              >
                {intl.formatMessage(route.label)}
              </Link>
            );
          })}
        </Menu>
      </Box>
      <Box
        direction="row"
        align="center"
        pad={{
          horizontal: 'medium',
          vertical: 'small',
          between: 'small',
        }}
      >
        {menuDropdown && <MenuDropdown {...menuDropdown} />}
      </Box>
    </Box>
  </Sidebar>;

SidebarNav.propTypes = {
  intl: intlShape,
  bgColor: PropTypes.string,
  className: PropTypes.string,
  toggleSidebar: PropTypes.func,
  menuDropdown: PropTypes.object,
  title: PropTypes.object.isRequired,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      label: PropTypes.object.isRequired,
    }),
  ).isRequired,
};


export default injectIntl(SidebarNav);
