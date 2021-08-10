import React, { useContext, useEffect, useRef } from 'react';
import ContactContext from '../../context/contact/contactContext';
import { TextField, Box } from '@material-ui/core';

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
    <Box ml={5} mt={2}>
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
    </Box>
  );
};

export default ContactFilter;
