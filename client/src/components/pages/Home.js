import React, { Fragment } from 'react';
import Contacts from '../contacts/Contacts';
import { Container, Grid } from '@material-ui/core';
import ContactForm from '../contacts/ContactForm';

const Home = () => {
  return (
    <Container>
      <Fragment>
        <Grid container>
          <Grid item xs={12} md={7}>
            <ContactForm />
          </Grid>
          <Grid item xs={12} md={5}>
            <Contacts />
          </Grid>
        </Grid>
      </Fragment>
    </Container>
  );
};
export default Home;
