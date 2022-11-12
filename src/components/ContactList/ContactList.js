import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import ContactListItem from './ContactItem/ContactItem';
import { List } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const normalizedFilter = filter.toLowerCase();
  const getVisibleFilter = contacts.filter(contact =>
    contact.name?.toLowerCase()?.includes(normalizedFilter)
  );
  // console.log(getVisibleFilter);
  return (
    <List>
      {getVisibleFilter.map(({ id, name, phone }) => (
        <li key={id}>
          <ContactListItem id={id} name={name} number={phone} />
        </li>
      ))}
    </List>
  );
};
export default ContactList;
