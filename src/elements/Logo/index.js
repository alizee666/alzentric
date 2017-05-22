import React, { PropTypes } from 'react';

require('./styles.scss');

const Logo = ({
  className,
}) =>
  <div className="element-logo">
    <svg
      className={className || 'grommetux-logo-icon'}
      viewBox="0 0 120 120"
      version="1.1"
    >
      <g fill="none" stroke="none" fillRule="evenodd">

        <rect fill="none" stroke="none" x="0" y="0" width="120" height="120" />

        <g stroke="#01A982" className="paths" strokeWidth="4">
          <path d="M54,96 L54,106 L14,106 L14,66 L24,66" />
          <path d="M24,36 L84,36 L84,96 L24,96 L24,36" />
          <path d="M34,36 L34,18 L102,18 L102,86 L84,86" />
          <rect x="34" y="66" width="20" height="20" />
        </g>
      </g>
    </svg>
  </div>;

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.displayName = 'Logo';

export default Logo;
