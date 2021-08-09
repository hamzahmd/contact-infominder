import React, { useContext } from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

import { Container, Card, Grid } from '@material-ui/core';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;

  return (
    <Container>
      <Grid container>
        {contacts.map((contact) => (
          <Grid item xs={12} md={12}>
            <Card style={{ margin: '1rem 0 0 0', padding: ' 1rem' }}>
              <ContactItem key={contact.id} contact={contact} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default Contacts;
