import { useDispatch, useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import css from './ContactsList.module.css';
import { getContacts, deleteContact } from 'components/redux/contactsSlice';
import { getFilter } from 'components/redux/filterSlice';

const filteredContacts = (contacts, filter) =>
  contacts.filter(({ name }) =>
    name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

export function ContactsList() {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const visibleContacts = contacts.length
    ? filteredContacts(contacts, filter)
    : [];

    const onDelete = contactId => dispatch(deleteContact(contactId));

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};