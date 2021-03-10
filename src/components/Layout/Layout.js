import React from 'react';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import TopBar from './TopBar';

// eslint-disable-next-line react/prop-types
function Layout ({ children }) {
  return (
    <>
    <TopBar />
      <Container>
      <main>
        {children}
      </main>
      </Container>
    </>
  );
}

export default Layout;

Layout.PropTypes = { children: PropTypes.node.isRequired };
