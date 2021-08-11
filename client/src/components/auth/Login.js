import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

import { Button, Card, Box, TextField, Container } from '@material-ui/core';
const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login({
        email,
        password,
      });
    }
  };

  return (
    <Container maxWidth='xs'>
      <Card
        style={{
          margin: '1.5rem 0',
          padding: '2rem 1rem',
          textAlign: 'center',
        }}
      >
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
          <Box pb={2} pt={2}>
            <TextField
              id='outlined-basic'
              type='email'
              label='Email'
              name='email'
              size='small'
              variant='outlined'
              value={email}
              onChange={onChange}
              required
            />
          </Box>

          <Box pb={2}>
            <TextField
              id='outlined-basic'
              type='password'
              label='Set Password'
              name='password'
              size='small'
              variant='outlined'
              value={password}
              onChange={onChange}
              required
            />
          </Box>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '1rem',
            }}
          >
            <Box pr={1}>
              <Button type='submit' variant='contained' color='primary'>
                Login
              </Button>
            </Box>
          </div>
        </form>
      </Card>
    </Container>
  );
};

export default Login;
