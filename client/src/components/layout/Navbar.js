import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ContactsIcon from '@material-ui/icons/Contacts';
import {
  Box,
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  IconButton,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  contactIcon: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = ({ title }) => {
  const classes = useStyles();
  return (
    <AppBar position='sticky' color='primary' className={classes.root}>
      <Toolbar>
        <IconButton
          component={Link}
          to='/'
          edge='start'
          className={classes.contactIcon}
          color='inherit'
        >
          <ContactsIcon fontSize='medium' />
        </IconButton>
        <Typography variant='h6' className={classes.title}>
          {title}
        </Typography>
        <Box pr={2}>
          <Button
            component={Link}
            to='/'
            variant='contained'
            color='transprent'
          >
            Home
          </Button>
        </Box>
        <Button
          component={Link}
          to='/about'
          variant='contained'
          color='ransprent'
        >
          About
        </Button>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'InfoMinder',
};

export default Navbar;
