import React, { useReducer } from 'react';
import ContactContext from './contactContext';
import { v4 as uuidv4 } from 'uuid';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_ALERT,
  CLEAR_CONTACTS,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Hamza',
        email: 'hamza@hamza.com',
        phone: '02020202020',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Ahmad',
        email: 'ahmad@hamza.com',
        phone: '02020245320',
        type: 'professional',
      },
      {
        id: 3,
        name: 'Bilal',
        email: 'bilal@hamza.com',
        phone: '02032420220',
        type: 'personal',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // ADD_CONTACT

  // DELETE_CONTACT

  // SET_ALERT

  // CLEAR_CONTACTS

  // UPDATE_CONTACT

  // FILTER_CONTACTS

  // CLEAR_FILTER

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
