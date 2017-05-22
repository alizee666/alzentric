import React, { PropTypes } from 'react';

import Title from 'grommet/components/Title';
import Logo from 'elements/Logo';

require('./styles.scss');

export const NavLogo = ({
  isVisible,
  isInverse,
  toggle,
  isLeft,
  title: {
    main,
    sub,
  },
}) => {
  if (!isVisible) {
    return <span />;
  }

  return (
    <div
      id="navLogo"
      className={`element-nav-logo${isLeft ? ' left' : ''}`}
    >
      <Title onClick={() => toggle()}>
        <Logo isInverse={isInverse} />
        <span className="logo-title primary-title">{main}</span>
        <span className="logo-title label">{sub}</span>
      </Title>
    </div>
  );
};

NavLogo.propTypes = {
  title: PropTypes.shape({
    main: PropTypes.string,
    sub: PropTypes.string,
  }),
  toggle: PropTypes.func.isRequired,
  isLeft: PropTypes.bool,
  isVisible: PropTypes.bool.isRequired,
  isInverse: PropTypes.bool.isRequired,
};

NavLogo.defaultProps = {
  title: {
    main: '',
    sub: '',
  },
};

export default NavLogo;
