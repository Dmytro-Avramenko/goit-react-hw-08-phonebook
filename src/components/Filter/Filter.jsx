import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/filter/filter';
import TextField from '@mui/material/TextField';

export const Filter = () => {
  const dispatch = useDispatch();

  const filterChange = event => {
    dispatch(filterContacts(event.target.value));
  };

  return (
    <div>
      <TextField
        onChange={filterChange}
        type="text"
        label="Enter name"
        variant="outlined"
      />
    </div>   
  );
};

Filter.propTypes = {
  filterChange: PropTypes.func,
};
