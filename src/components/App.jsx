import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForms } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Box, Title, Heading } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContact = (name, number) => {
    // console.log(name)
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const duplicate = this.state.contacts.find(
      contact => contact.name === name
    );
    // console.log(duplicate);
    if (duplicate) {
      alert(`${name} is already in contakts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getVisibleFilter = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  componentDidMount() {
    console.log('App component Did Mount');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('App component Did Update');
    if (this.state.contacts !== prevState.contacts) {
      console.log('App');
    }
  }
  render() {
    const { filter } = this.state;
    const visibleContact = this.getVisibleFilter();

    return (
      <Box>
        <Title>Phonebook</Title>
        <ContactForms onSubmit={this.addContact} />
        <Heading>Contacts</Heading>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContact}
          onDeleteContact={this.deleteContact}
        />
      </Box>
    );
  }
}
