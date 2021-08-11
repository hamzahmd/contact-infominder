import React, { useContext, useEffect, useRef } from 'react';
import ContactContext from '../../context/contact/contactContext';
import { TextField, Card, Container } from '@material-ui/core';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter, filtered } = contactContext;
  const text = useRef('');

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });
  const onChange = (e) => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <Container>
      <Card
        style={{
          margin: '1rem 1rem 0 1rem',
          padding: ' 1rem',
          display: 'inline-block',
        }}
      >
        <form>
          <TextField
            id='outlined-basic'
            inputRef={text}
            type='text'
            label='Filter Contacts'
            size='small'
            variant='outlined'
            color='primary'
            onChange={onChange}
          />
        </form>
      </Card>
    </Container>
  );
};

export default ContactFilter;
