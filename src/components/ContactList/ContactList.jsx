import React from 'react';
import Contact from 'components/Contact/Contact';
import { Container, H2 } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redax/filter/filterSelectors';
import { useEffect } from 'react';
import { fetchContactsAsync } from 'redax/contacts/contactsOperetions';

function ContactList() {
  const filteredcontacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsAsync());
  }, [dispatch]);

  return (
    <Container>
      {filteredcontacts.length !== 0 ? (
        filteredcontacts.map(({ name, number, id }) => {
          return <Contact key={id} name={name} number={number} id={id} />;
        })
      ) : (
        <H2>Contact list is empty</H2>
      )}
    </Container>
  );
}

export default ContactList;
