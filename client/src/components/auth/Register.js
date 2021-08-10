import React, { useState } from 'react';
import { Button, Card, Box, TextField, Container } from '@material-ui/core';
const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Registered');
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
        <h1>Register Account</h1>
        <form onSubmit={onSubmit}>
          <Box pb={2} pt={2}>
            <TextField
              id='outlined-basic'
              type='text'
              label='Name'
              name='name'
              size='small'
              variant='outlined'
              value={name}
              onChange={onChange}
            />
          </Box>
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
          <Box pt={2} pb={2}>
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
          <TextField
            id='outlined-basic'
            type='password'
            label='Confirm Password'
            name='password2'
            size='small'
            variant='outlined'
            value={password2}
            onChange={onChange}
          />

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '1rem',
            }}
          >
            <Box pr={1}>
              <Button type='submit' variant='contained' color='primary'>
                Register
              </Button>
            </Box>
          </div>
        </form>
      </Card>
    </Container>
  );
};

export default Register;
