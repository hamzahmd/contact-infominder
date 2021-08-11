import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import { Container, Grid } from '@material-ui/core';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);
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
