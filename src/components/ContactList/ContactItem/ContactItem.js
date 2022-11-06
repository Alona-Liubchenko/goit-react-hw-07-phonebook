import React from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { Item, Text, Btn } from './ContactItem.styled';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDeleteContact = () => dispatch(deleteContact(id));
  return (
    <Item>
      <Text>
        {name}: {number}
      </Text>
      <Btn type="buttom" onClick={onDeleteContact}>
        Delete
      </Btn>
    </Item>
  );
};
// ContactListItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
export default ContactListItem;
