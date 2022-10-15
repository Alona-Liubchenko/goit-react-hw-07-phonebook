import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForms } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Box, Title, Heading } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });

  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    console.log(name, number);
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const duplicate = contacts.find(contact => contact.name === name);
    if (duplicate) {
      alert(`${name} is already in contakts`);
      return;
    }
    setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleFilter = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Box>
      <Title>Phonebook</Title>
      <ContactForms onSubmit={addContact} />
      <Heading>Contacts</Heading>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleFilter()}
        onDeleteContact={deleteContact}
      />
    </Box>
  );
};
