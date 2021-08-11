import React, { useContext, useEffect } from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

import { Container, Card, Grid, CircularProgress } from '@material-ui/core';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered, getContacts, loading } = contactContext;
  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  if (contacts !== null && (contacts.length === 0) & !loading) {
    return (
      <h3 style={{ margin: '1rem', padding: ' 1rem 2rem' }}>
        Please add some contacts
      </h3>
    );
  }

  return (
    <Container>
      {contacts !== null && !loading ? (
        <Grid container>
          {filtered !== null
            ? filtered.map((contact) => (
                <Grid item xs={12} md={6}>
                  <Card style={{ margin: '1rem', padding: ' 1rem' }}>
                    <ContactItem key={contact._id} contact={contact} />
                  </Card>
                </Grid>
              ))
            : contacts.map((contact) => (
                <Grid item xs={12} md={6}>
                  <Card
                    style={{
                      margin: '1rem',
                      padding: ' 1rem',
                    }}
                  >
                    <ContactItem key={contact._id} contact={contact} />
                  </Card>
                </Grid>
              ))}
        </Grid>
      ) : (
        <CircularProgress style={{ margin: '5rem 0 0 7rem' }} />
      )}
    </Container>
  );
};
export default Contacts;
