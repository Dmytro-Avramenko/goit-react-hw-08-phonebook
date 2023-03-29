import toast from 'react-hot-toast';
import { addContact } from '../../redux/contacts/operations';
import { selectContact } from '../../redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import s from '../Form/Form.module.css';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContact);

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const form = event.target;
    const { name, number } = Object.fromEntries(formData);

    if (contacts.some(item => item.name === name)) {
      return toast.error(`${name} is already in contacts`);
    }
    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
      <div className={s.container}>
        <TextField
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        
        <TextField
          label="Number"
          variant="outlined"
          type="tel"
          name="number"
          placeholder="Number 000 00 00"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          />
          <Button
            // onClick={notify}
            variant="contained"
            size="large"
            type="submit">Add new contact</Button>  
      </div>      
    </form>
    </div>
  );
};
