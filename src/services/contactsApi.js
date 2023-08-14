import axios from 'axios';

const BASE_URL = 'https://64d7ebd65f9bf5b879ce0da2.mockapi.io';

export const fetchContacts = () => axios.get(`${BASE_URL}/contacts`);

export const addContact = contact =>
  axios.post(`${BASE_URL}/contacts`, contact);

export const deleteContact = contactId =>
  axios.delete(`${BASE_URL}/contacts/${contactId}`);
