import React from 'react';
import Contacts from '../contacts/Contacts';
import { Container, Grid } from '@material-ui/core';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';

const Home = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={4}>
          <ContactForm />
        </Grid>
        <Grid item xs={12} md={8}>
          <ContactFilter />
          <Contacts />
        </Grid>
      </Grid>
    </Container>
  );
};
export default Home;
