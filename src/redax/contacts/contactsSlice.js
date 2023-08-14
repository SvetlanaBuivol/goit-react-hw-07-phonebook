import { createSlice } from '@reduxjs/toolkit';
import {
  addContactAsync,
  deleteContactAsync,
  fetchContactsAsync,
} from './contactsOperetions';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    loading: 'idle',
    error: null,
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
      .addCase(fetchContactsAsync.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.error.message;
      })
      .addCase(addContactAsync.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(deleteContactAsync.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload
        );
      })
      .addCase(deleteContactAsync.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
