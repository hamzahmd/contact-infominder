import React from 'react';
import PropTypes from 'prop-types';

import { Chip, Button, Box } from '@material-ui/core';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import CallIcon from '@material-ui/icons/Call';

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;

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
          }}
        >
          <EmailRoundedIcon /> {email}
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
          <CallIcon /> {phone}
        </p>
      ) : (
        'null'
      )}
      <div
        style={{
          display: 'flex',
          marginTop: '0.5rem',
        }}
      >
        <Box pr={1}>
          <Button size='small' variant='outlined'>
            Edit
          </Button>
        </Box>
        <Button size='small' variant='outlined' color='secondary'>
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
