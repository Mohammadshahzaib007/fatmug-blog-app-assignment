import React from 'react';
import { Container } from '@material-ui/core';
import propTypes from 'prop-types';
import TopBar from './TopBar';

function Layout ({ children }) {
  return (
    <>
    <TopBar />
      <Container style={{ marginTop: '80px' }}>
      <main>
        {children}
      </main>
      </Container>
    </>
  );
}

export default Layout;

Layout.propTypes = { children: propTypes.node.isRequired };
