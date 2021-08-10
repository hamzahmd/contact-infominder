import React, { useState } from 'react';
import { Button, Card, Box, TextField, Container } from '@material-ui/core';
const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Login');
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
