import React, { Fragment } from 'react';
import Contacts from '../contacts/Contacts';
import { Container, Grid, makeStyles } from '@material-ui/core';

const Home = () => {
  return (
    <Container>
      <Fragment>
        <Grid container>
          <Grid item xs={12} md={7}>
            <h3>Form</h3>
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
