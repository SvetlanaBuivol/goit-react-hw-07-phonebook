import { createSelector } from '@reduxjs/toolkit';
import { getContacts } from 'redax/contacts/contactSelectors';

export const selectFilterValue = state => state.filter.filter.toLowerCase();

export const selectFilteredContacts = createSelector(
  [getContacts, selectFilterValue],
  (contacts, filterValue) =>
    contacts.filter(contact => contact.name.toLowerCase().includes(filterValue))
);
