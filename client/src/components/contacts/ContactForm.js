import React, { useContext, useEffect, useState } from 'react';
import ContactContext from '../../context/contact/contactContext';
import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Button,
  Card,
  Box,
} from '@material-ui/core';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, current, updateContact, clearCurrent } = contactContext;
  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      });
    }
  }, [contactContext, current]);
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });

  const { name, email, phone, type } = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };
  return (
    <Card style={{ margin: '1rem 0', padding: '1.5rem 2rem' }}>
      <form onSubmit={onSubmit}>
        <h2 style={{ paddingBottom: '1rem', textAlign: 'center' }}>
          {current ? 'Edit the Contact' : 'Add the Contact Info!'}
        </h2>
        <TextField
          id='outlined-basic'
          type='text'
          label='Name'
          name='name'
          size='small'
          variant='outlined'
          value={name}
          onChange={onChange}
        />
        <TextField
          id='outlined-basic'
          type='email'
          label='Email'
          name='email'
          size='small'
          variant='outlined'
          value={email}
          onChange={onChange}
        />
        <TextField
          id='outlined-basic'
          type='tel'
          label='Phone'
          size='small'
          name='phone'
          variant='outlined'
          // pattern='+[0-9]{2}-[0-9]{3}-[0-9]{7}'
          value={phone}
          onChange={onChange}
        />

        <FormLabel component='legend' style={{ paddingTop: '1rem' }}>
          Contact Type
        </FormLabel>
        <RadioGroup aria-label='contact-type' name='type' onChange={onChange}>
          <FormControlLabel
            value='personal'
            control={<Radio />}
            label='Personal'
            checked={type === 'personal'}
          />
          <FormControlLabel
            value='professional'
            control={<Radio />}
            label='Professional'
            checked={type === 'professional'}
          />
        </RadioGroup>

        <div style={{ display: 'flex' }}>
          <Box pr={1}>
            <Button type='submit' variant='contained' color='primary'>
              {current ? 'Update Contact' : 'Add Contact'}
            </Button>
          </Box>
          {current !== null ? (
            <Button
              type='submit'
              variant='contained'
              color='secondary'
              onClick={clearAll}
            >
              Clear
            </Button>
          ) : null}
        </div>
      </form>
    </Card>
  );
};

export default ContactForm;
