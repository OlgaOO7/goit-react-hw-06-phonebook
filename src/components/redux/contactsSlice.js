import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  contacts: []
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare({name, number}) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      }
    },
    deleteContact (state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    }
  },
});

export const getContacts = state => state.contacts.contacts;

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer,
);
