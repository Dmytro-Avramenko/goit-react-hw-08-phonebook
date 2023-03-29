import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import Button from '@mui/material/Button';
import s from '../ContactsListItem/ContactsListItem.module.css';

export const ContactsListItem = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      {contacts.length &&
        contacts.map(contact => (
          <div className={s.contact_list} key={contact.id}>
            <div className={s.contact_name}>
              <b>{contact.name}</b>:{contact.number}
            </div>

            <Button
              variant="contained"
              size="small"
              type="button"
              onClick={() => handleDeleteContact(contact.id)}
            >
              Delete
            </Button>
          </div>
        ))}
    </div>
  );
};

ContactsListItem.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
};
