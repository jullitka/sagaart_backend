import { Box, InputLabel, TextField, Typography } from '@mui/material';
import {
  title,
  subtitle,
  textField,
  emailInput,
  phoneInput,
  submitButton,
} from './constants/data';
import styles from './constants/styles';

import consultationImg from './assets/consultationImg.png';

import FormInput from '../../../shared/ui/FormInput';
import Button from '../../../shared/ui/Button';

const Consultation = () => {
  return (
    <Box sx={styles.consultation}>
      <Box sx={styles.infoContainer}>
        <Typography sx={styles.title}>{title}</Typography>
        <Typography sx={styles.subtitle}>{subtitle}</Typography>
        <Box>
          <InputLabel sx={styles.textFieldLabel}>{textField.label}</InputLabel>
          <TextField
            id={textField.name}
            name={textField.name}
            placeholder={textField.placeholder}
            sx={styles.textField}
            multiline
            rows={3}
          />
        </Box>
        <Box sx={styles.inputsContainer}>
          <FormInput
            label={emailInput.label}
            placeholder={emailInput.placeholder}
            name={emailInput.name}
          />
          <FormInput
            label={phoneInput.label}
            placeholder={phoneInput.placeholder}
            name={phoneInput.name}
          />
        </Box>
        <Button
          text={submitButton.text}
          bgColor={submitButton.bgColor}
          padding={submitButton.padding}
          fontSize={submitButton.fontSize}
          lineHeight={submitButton.lineHeight}
          width={submitButton.width}
          color={submitButton.color}
        />
      </Box>
      <Box component={'img'} src={consultationImg} sx={styles.img} />
    </Box>
  );
};

export default Consultation;
