import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '../../components/Form/Form';
import { Filter } from '../../components/Filter/Filter';
import { fetchContacts } from '../../redux/contacts/operations';
import { ContactsList } from '../../components/ContactsList/ContactsList';
import { Loader } from '../../components/Loader/Loader'
import {
  selectContact,
  selectError,
  selectIsLoading,
} from '../../redux/contacts/selectors';
import s from '../Contacts/Contacts.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContact);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]); 
  
  return (
    <div className={s.contacts}>
      <h2 className={s.contacts_title}>Phonebook</h2>
      <Form />
      {isLoading && !error && <Loader />}
      {contacts.length > 0 && (
        <>
          <h2 className={s.contacts_title}>Contacts</h2>
          <Filter />
          <ContactsList />
        </>
      )}
    </div>
  );
};

export default ContactsPage;