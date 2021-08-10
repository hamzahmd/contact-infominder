import React, { useContext } from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

import { Container, Card, Grid } from '@material-ui/core';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return (
      <h3 style={{ margin: '1rem', padding: ' 1rem 2rem' }}>
        Please add some contacts
      </h3>
    );
  }

  return (
    <Container>
      <Grid container>
        {filtered !== null
          ? filtered.map((contact) => (
              <Grid item xs={12} md={6}>
                <Card style={{ margin: '1rem', padding: ' 1rem' }}>
                  <ContactItem key={contact.id} contact={contact} />
                </Card>
              </Grid>
            ))
          : contacts.map((contact) => (
              <Grid item xs={12} md={6}>
                <Card style={{ margin: '1rem', padding: ' 1rem' }}>
                  <ContactItem key={contact.id} contact={contact} />
                </Card>
              </Grid>
            ))}
      </Grid>
    </Container>
  );
};
export default Contacts;
