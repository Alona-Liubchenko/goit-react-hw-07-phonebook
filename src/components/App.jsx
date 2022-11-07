import { ContactForms } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Box, Title, Heading } from './App.styled';

export const App = () => {
  return (
    <Box>
      <Title>Phonebook</Title>
      <ContactForms />
      <Heading>Contacts</Heading>
      <Filter />
      <ContactList />
    </Box>
  );
};
