import PropTypes from 'prop-types';

import { ContactItem } from 'components/ContactItem/ContactItem';
import s from './ContactsList.module.css';

export const ContactsList = ({ contacts, deleteContact }) => {
  return contacts ? (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  ) : (
    <p>Sorry, we didn't find any contact</p>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
