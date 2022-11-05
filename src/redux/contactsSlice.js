import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
    // duplicate(state, action) {
    //   state.find(contact => contact.name === action.payload);
    //   if (state) {
    //     alert(`${action.payload} is already in contakts`);
    //     return;
    //   }
    //   // setContacts(prevContacts => [contact, ...prevContacts]);}
    // },
  },
});
export const { addContact, deleteContact, duplicate } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
