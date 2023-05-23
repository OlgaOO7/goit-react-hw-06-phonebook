import {  useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { getContacts } from 'components/redux/contactsSlice';
import { getFilter } from 'components/redux/filterSlice';
import css from './ContactsList.module.css';

export function ContactsList() {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const filteredContacts = (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
  };

  const visibleContacts = contacts.length
    ? filteredContacts(contacts, filter)
    : [];

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
        />
      ))}
    </ul>
  );
}
