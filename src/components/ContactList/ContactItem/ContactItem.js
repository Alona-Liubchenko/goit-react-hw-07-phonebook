import React from 'react';

const ContactListItem = ({ contact, onDeleteContact }) => {
  return (
    <li>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button type="buttom" onClick={() => onDeleteContact(contact.id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
