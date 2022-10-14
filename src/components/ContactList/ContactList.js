import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactItem/ContactItem';
import { List } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <ContactListItem
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      </li>
    ))}
  </List>
);
// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
export default ContactList;
