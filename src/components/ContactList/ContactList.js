import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import ContactListItem from './ContactItem/ContactItem';
import { List } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const normalizedFilter = filter.toLowerCase();
  const getVisibleFilter = contacts.filter(contact =>
    contact.name?.toLowerCase()?.includes(normalizedFilter)
  );
  return (
    <List>
      {getVisibleFilter.map(({ id, name, number }) => (
        <li key={id}>
          <ContactListItem id={id} name={name} number={number} />
        </li>
      ))}
    </List>
  );
};
export default ContactList;
