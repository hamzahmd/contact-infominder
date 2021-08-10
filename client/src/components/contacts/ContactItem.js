import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

import { Chip, Button, Box } from '@material-ui/core';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import CallIcon from '@material-ui/icons/Call';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { id, name, email, phone, type } = contact;
  const onDelete = () => {
    deleteContact(id);
    clearCurrent();
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: '0.5rem',
        }}
      >
        <h3>{name}</h3>
        <Chip
          size='small'
          color={type === 'professional' ? 'primary' : 'secondary'}
          label={type.charAt(0).toUpperCase() + type.slice(1)}
        />
      </div>

      {email !== null ? (
        <p
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingBottom: '0.5rem',
          }}
        >
          <EmailRoundedIcon style={{ marginRight: '0.5rem' }} /> {email}
        </p>
      ) : (
        'null'
      )}
      {phone !== null ? (
        <p
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <CallIcon style={{ marginRight: '0.5rem' }} /> {phone}
        </p>
      ) : (
        'null'
      )}
      <div
        style={{
          display: 'flex',
          marginTop: '0.8rem',
        }}
      >
        <Box pr={1}>
          <Button
            size='small'
            variant='outlined'
            onClick={() => setCurrent(contact)}
          >
            Edit
          </Button>
        </Box>
        <Button
          size='small'
          variant='outlined'
          color='secondary'
          onClick={onDelete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
