import React, { Component } from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { Forma, Label, Input, Btn } from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

export class ContactForms extends Component {
  hendleSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values.name, values.number);

    resetForm();
  };
  render() {
    return (
      <Formik initialValues={initialValues} onSubmit={this.hendleSubmit}>
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
  }
}
ContactForms.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
