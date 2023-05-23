import { useDispatch, useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { getContacts, deleteContact } from 'components/redux/contactsSlice';
import { getFilter } from 'components/redux/filterSlice';
import css from './ContactsList.module.css';

export function ContactsList() {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  // const dispatch = useDispatch();

  const filteredContacts = (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
  };

  const visibleContacts = contacts.length
    ? filteredContacts(contacts, filter)
    : [];

  // const onDelete = contactId => dispatch(deleteContact(contactId));

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          // onDelete={onDelete(id)}
        />
      ))}
    </ul>
  );
}
