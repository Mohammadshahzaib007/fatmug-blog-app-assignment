import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';

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

  const navLinks = [
    { name: 'write', link: '#', variant: 'contained', color: 'secondary' },
    { name: 'your articles', link: '#', variant: 'outlined', color: 'secondary' },
    { name: 'Logout', link: '#', variant: 'text', color: 'secondary' }
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container>
          <Toolbar spacing={0} disableGutters>
            <Typography variant="h6" className={classes.title}>
              <b>FATMUG</b> | Greetings! UserName
            </Typography>
            {navLinks.map((item, i) => (
              <Button key={i} style={{ marginLeft: '1.875rem', color: 'white', borderColor: 'white' }} variant={item.variant} color={item.color}>
                {item.name}
              </Button>
            ))}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
