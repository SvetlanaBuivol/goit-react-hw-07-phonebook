import { addContact, deleteContact, fetchContacts } from 'services/contactsApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContactsAsync = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const response = await fetchContacts();
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const addContactAsync = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    try {
      const response = await addContact(contact);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteContactAsync = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      await deleteContact(contactId);
      return contactId;
    } catch (error) {
      throw error;
    }
  }
);
