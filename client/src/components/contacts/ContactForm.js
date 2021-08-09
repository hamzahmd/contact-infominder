import React, { useContext, useState } from 'react';
import ContactContext from '../../context/contact/contactContext';
import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Button,
  Card,
} from '@material-ui/core';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
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
    contactContext.addContact(contact);
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal',
    });
  };
  return (
    <Card style={{ margin: '1rem 0', padding: '1.5rem 2rem' }}>
      <form onSubmit={onSubmit}>
        <h2 style={{ paddingBottom: '1rem', textAlign: 'center' }}>
          Add Your Important Contacts!
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
        <Button type='submit' variant='contained' color='primary'>
          Add Contact
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;
