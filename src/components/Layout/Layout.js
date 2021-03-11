import React from 'react';
import propTypes from 'prop-types';
import TopBar from './TopBar';

function Layout ({ children }) {
  return (
    <>
      <TopBar />
      <main style={{ marginTop: '80px' }}>{children}</main>
    </>
  );
}

export default Layout;

Layout.propTypes = { children: propTypes.node.isRequired };
