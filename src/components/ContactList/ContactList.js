import React from 'react';
import { selectVisibleFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';
import ContactListItem from './ContactItem/ContactItem';
import { List } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(selectVisibleFilter);
  return (
    <List>
      {contacts.map(({ id, name, phone }) => (
        <li key={id}>
          <ContactListItem id={id} name={name} number={phone} />
        </li>
      ))}
    </List>
  );
};
export default ContactList;
