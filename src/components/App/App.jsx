import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactsList } from '../ContactsList/ContactsList';
import css from './App.module.css';

export default function App() {
    return (
    <div className={css.wrapper}>
      <h1 className={css.phonebookTitle}>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}