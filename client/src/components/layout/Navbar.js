import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ContactsIcon from '@material-ui/icons/Contacts';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

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
    <AppBar position='static' color='primary' className={classes.root}>
      <Toolbar>
        <IconButton
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
          <Button component={Link} to='/' variant='contained' color='secondary'>
            Home
          </Button>
        </Box>
        <Button
          component={Link}
          to='/about'
          variant='contained'
          color='secondary'
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
