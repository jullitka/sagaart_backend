import { InputAdornment, OutlinedInput } from '@mui/material';
import SearchIcon from '../../assets/search.svg?react';

const SearchInput = () => {
  return (
    <OutlinedInput
      startAdornment={
        <InputAdornment position='start'>
          <SearchIcon />
        </InputAdornment>
      }
      sx={{
        padding: '13.5px 0 13.5px 24px',
        fontSize: '24px',
        fontWeight: '400',
        lineHeight: '33.6px',
        '& .MuiOutlinedInput-input': {
          padding: '0',
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: 'gray',
        },
      }}
      placeholder='Картина, художник......'
    ></OutlinedInput>
  );
};

export default SearchInput;
