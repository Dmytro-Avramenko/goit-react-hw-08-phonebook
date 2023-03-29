import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import { ContactsListItem } from '../ContactsListItem/ContactsListItem';

export const ContactsList = () => {
  const contactsList = useSelector(selectVisibleContacts);

  return (
    <ul>
      <ContactsListItem contacts={contactsList} />
    </ul>
  );
};
