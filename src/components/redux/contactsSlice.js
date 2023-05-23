import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  contacts: [],
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
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    }
  },
});

const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ['contacts'],
};

export const getContacts = state => state.contacts.contacts;
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer,
);
