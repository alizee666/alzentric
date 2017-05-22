import React, { PropTypes } from 'react';

import User from 'grommet/components/icons/base/User';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';

const MenuDropdown = ({ dropAlign, links, icon, intl }) => (
  <Menu
    id="menuDropdown"
    inline={false}
    dropAlign={dropAlign}
    icon={icon}
  >

    {links.map(({ onClick, text }, i) =>
      <Anchor key={i} onClick={() => onClick()}>
        {intl.formatMessage(text)}
      </Anchor>,
      )}

  </Menu>
  );

MenuDropdown.propTypes = {
  intl: PropTypes.object.isRequired,
  dropAlign: PropTypes.object.isRequired,
  icon: PropTypes.element.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      onClick: PropTypes.func.isRequired,
      text: PropTypes.object.isRequired,
    }),
  ),
};

MenuDropdown.defaultProps = {
  dropAlign: {
    bottom: 'bottom',
  },
  icon: <User size="medium" type="control" />,
};

export default MenuDropdown;
