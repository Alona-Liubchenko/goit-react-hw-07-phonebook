import React from 'react';
import PropTypes from 'prop-types';
import { Item, Text, Btn } from './ContactItem.styled';
const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <Item>
      <Text>
        {name}: {number}
      </Text>
      <Btn type="buttom" onClick={() => onDeleteContact(id)}>
        Delete
      </Btn>
    </Item>
  );
};
ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactListItem;
