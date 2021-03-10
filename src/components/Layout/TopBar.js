import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function TopBar () {
  const classes = useStyles();

  const { pathname } = useLocation();

  const navLinks = [
    { name: 'write', link: '/write', variant: 'contained', color: 'secondary' },
    {
      name: 'your articles',
      link: '/your-articles',
      variant: 'outlined',
      color: 'secondary'
    },
    { name: 'Logout', link: '#', variant: 'text', color: 'secondary' }
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container>
          <Toolbar spacing={0} disableGutters>
            <Typography variant="h6" className={classes.title}>
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                <b>FATMUG</b> | Greetings! UserName
              </Link>
            </Typography>
            {pathname === '/write' && (
              <Button
                style={{
                  marginLeft: '1.875rem',
                  color: 'white',
                  borderColor: 'white'
                }}
                variant="contained"
                color="secondary"
              >
                Publish
              </Button>
            )}
            {navLinks.map((item, i) => (
              <Link to={item.link} key={i}>
                <Button
                  style={{
                    marginLeft: '1.875rem',
                    color: 'white',
                    borderColor: 'white'
                  }}
                  variant={item.variant}
                  color={item.color}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
