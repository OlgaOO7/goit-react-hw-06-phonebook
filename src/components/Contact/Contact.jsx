import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from "../redux/contactsSlice";
import css from './Contact.module.css';

export function Contact({ name, number, id }) {
const dispatch = useDispatch();

  return (
    <li className={css.contactItem}>
      <p className={css.personContact}>
        {name}: {number}
      </p>
      <button
        type="button"
        id={id}
        onClick={() => dispatch(deleteContact(id))}
        className={css.deleteBtn}
      >
        Delete
      </button>
    </li>
    )
  };


Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};
