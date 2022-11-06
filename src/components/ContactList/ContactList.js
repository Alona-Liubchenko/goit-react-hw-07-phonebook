import React from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import ContactListItem from './ContactItem/ContactItem';
import { List } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const normalizedFilter = filter.toLowerCase();
  const getVisibleFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
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
