import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { Formik } from 'formik';
// import PropTypes from 'prop-types';
import { Forma, Label, Input, Btn } from './ContactForm.styled';

export const ContactForms = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    // onSubmit(values.name, values.number);
    dispatch(addContact(values.name, values.number));

    resetForm();
  };
  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
      <Forma autoComplete="off">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label htmlFor="name">Number</Label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Btn type="submit">Add contact</Btn>
      </Forma>
    </Formik>
  );
};

// ContactForms.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
