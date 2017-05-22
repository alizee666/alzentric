import React, { PropTypes } from 'react';

import Heading from 'grommet/components/Heading';
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import NavLogo from 'elements/NavLogo';
import DashboardHeader from 'elements/DashboardHeader';

export const PageHeader = ({
  isNavlogoVisible,
  toggleSidebar,
  heading,
  link,
}) => {
  const header = link ?
    <Box size="large" pad="none">
      <DashboardHeader link={link} name={heading} />
    </Box>
    :
    <Box size="medium" pad="small">
      <Box pad={{ vertical: 'small' }}>
        <Heading strong tag="h3">{heading}</Heading>
      </Box>
    </Box>;

  return (
    <Header
      justify="center"
      align="center"
      separator="bottom"
    >

      <NavLogo
        isInverse
        isVisible={isNavlogoVisible}
        toggle={toggleSidebar}
        isLeft
        title={{ main: '', sub: '' }}
      />

      {header}
    </Header>
  );
};

PageHeader.propTypes = {
  isNavlogoVisible: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  heading: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default PageHeader;
