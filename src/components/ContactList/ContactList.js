import React from 'react';

const ContactList = ({ contacts, onDeletedContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <p>
          {name}: {number}
        </p>
        <button type="buttom" onClick={() => onDeletedContact(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);
export default ContactList;
