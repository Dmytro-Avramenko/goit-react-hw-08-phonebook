import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import s from '../RegisterForm/RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={s.container}>
      <h2 className={s.register_title}>Please enter register form</h2>
      <form className={s.register_form} onSubmit={handleSubmit} autoComplete="off">
        <TextField
        label="Name"
        variant="outlined"
        type="text"
        name="name"
        />
        <TextField
        label="Email"
        variant="outlined"
        type="email"
        name="email"
        />
        <TextField
        label="Password"
        variant="outlined"
        type="password"
          name="password"
        />      
        <Button variant="contained" size="large" type="submit"
        >Register</Button>
      </form>
    </div>    
  );
};
