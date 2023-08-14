import { addContact, deleteContact, fetchContacts } from 'services/contactsApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContactsAsync = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await fetchContacts();
    return response.data;
  }
);

export const addContactAsync = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const response = await addContact(contact);
    return response.data;
  }
);

export const deleteContactAsync = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await deleteContact(contactId);
    return contactId;
  }
);
