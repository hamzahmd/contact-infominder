import React, { useReducer } from 'react';
import ContactContext from './contactContext';
import { v4 as uuidv4 } from 'uuid';
import ContactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
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
      {
        id: 4,
        name: 'talha',
        email: 'talha@hamza.com',
        phone: '02033420220',
        type: 'professional',
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // ADD_CONTACT
  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  // DELETE_CONTACT
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  // SET_CURRENT
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  // CLEAR_CONTACTS
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  // UPDATE_CONTACT
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  // FILTER_CONTACTS

  // CLEAR_FILTER

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
