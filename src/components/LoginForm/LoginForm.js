import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import s from '../LoginForm/LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={s.container}>
      <h2 className={s.login_title}>Please enter your details</h2>
      <form className={s.login_form} onSubmit={handleSubmit} autoComplete="off">
        <TextField
          type="email"
          name="email"
          label="Email"
          variant="outlined"
        />      
        <TextField
          type="password"
          name="password"
          label="Password"
          variant="outlined"
        />      
        <Button variant="contained" size="large" type="submit">Log In</Button>
      </form>
    </div>    
  );
};
