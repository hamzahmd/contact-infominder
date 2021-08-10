import React from 'react';
import { Container, Card, Chip } from '@material-ui/core';
const About = () => {
  return (
    <Container maxWidth='sm'>
      <Card
        style={{
          margin: '1.5rem 0',
          padding: '2rem 1.5rem',
        }}
      >
        <h2>About InfoMinder</h2>
        <p style={{ paddingTop: '0.5rem' }}>
          This is a Full stack MERN application with React hooks, context and
          JWT authentication. In this application, you can store and manage you
          contact details and information by creating your own account with
          authentication and no one can see the details except you.
        </p>
        <div>
          <Chip label='MERN' color='primary' style={{ marginTop: '0.5rem' }} />
          <Chip
            label='React'
            color='secondary'
            style={{ marginLeft: '0.5rem', marginTop: '0.5rem' }}
          />
          <Chip
            label='Node.js'
            color='primary'
            style={{ marginLeft: '0.5rem', marginTop: '0.5rem' }}
          />
          <Chip
            label='Express.js'
            color='secondary'
            style={{ marginLeft: '0.5rem', marginTop: '0.5rem' }}
          />
          <Chip
            label='MongoDB'
            color='primary'
            style={{ marginLeft: '0.5rem', marginTop: '0.5rem' }}
          />
          <Chip
            label='Mongoose'
            color='secondary'
            style={{ marginLeft: '0.5rem', marginTop: '0.5rem' }}
          />
          <Chip
            label='JSON Web Token'
            color='primary'
            style={{ marginLeft: '0.5rem', marginTop: '0.5rem' }}
          />
          <Chip
            label='Material-UI'
            color='secondary'
            style={{ marginLeft: '0.5rem', marginTop: '0.5rem' }}
          />
        </div>
      </Card>
    </Container>
  );
};
export default About;
