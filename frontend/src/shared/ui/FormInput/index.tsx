import { Box, InputLabel, OutlinedInput } from '@mui/material';
import { FC } from 'react';

interface FormInputProps {
  label: string;
  placeholder: string;
  name: string;
}

const FormInput: FC<FormInputProps> = ({ label, placeholder, name }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '8px' }}>
      <InputLabel
        sx={{
          fontSize: '20px',
          fontWeight: '500',
          lineHeight: '24.2px',
          color: '#757575',
        }}
        htmlFor={name}
      >
        {label}
      </InputLabel>
      <OutlinedInput
        sx={{
          fontSize: '24px',
          fontWeight: '400',
          lineHeight: '33.6px',
          color: '#252525',
          '& .MuiOutlinedInput-input': {
            padding: '13px 0 13px 24px',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'gray',
          },
        }}
        id={name}
        placeholder={placeholder}
        name={name}
      />
    </Box>
  );
};

export default FormInput;
