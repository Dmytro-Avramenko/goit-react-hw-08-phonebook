import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import Button from '@mui/material/Button';
import s from '../UserMenu/UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={s.container}>
      <p>Welcome, {user.name}</p>
      <Button
        type="button"
        variant="contained"
        size="small"
        onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
};
