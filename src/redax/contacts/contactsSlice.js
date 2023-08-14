import { createSlice } from '@reduxjs/toolkit';
import { addContactAsync, deleteContactAsync, fetchContactsAsync } from './contactsOperetions';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    loading: 'idle',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContactsAsync.pending, state => {
        state.loading = 'pending';
      })
      .addCase(fetchContactsAsync.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.contacts = action.payload;
      })
      .addCase(addContactAsync.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(deleteContactAsync.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
