import { ContactForms } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Box, Title, Heading } from './App.styled';
import { useEffect } from 'react';
import { selectIsLoading, selectError } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Box>
      <Title>Phonebook</Title>
      <ContactForms />
      <Heading>Contacts</Heading>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </Box>
  );
};
