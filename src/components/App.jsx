import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import { ContactListContainer, Phonebook, H2 } from './App.styled';

export default function App() {
  return (
    <>
      <Phonebook>Phonebook</Phonebook>
      <ContactForm />
      <ContactListContainer>
        <H2>Contacts</H2>
        <Filter />

        <ContactList />
      </ContactListContainer>
    </>
  );
}
