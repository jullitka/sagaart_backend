import { Dispatch, FC, SetStateAction, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { submitHandler } from './lib/utils';

import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from '@mui/material';
import {
  logoSize,
  title,
  signUpButton,
  orText,
  checkboxText,
  appleButton,
  googleButton,
  yetFirstPart,
  yetSecondPart,
  inputsData,
  emailRegex,
  passwordRegex,
  radioCheckboxYes,
  radioCheckboxNo,
  radioCheckboxesTitle,
  phoneRegex,
} from './constants/data';
import styles from './constants/styles';

import CloseIcon from './assets/close.svg?react';
import Logo from '../../shared/ui/Logo';
import AppleIcon from './assets/apple.svg?react';
import GoogleIcon from './assets/google.svg?react';
import ShowIcon from './assets/show.svg?react';
import HideIcon from './assets/hide.svg?react';

import Button from '../../shared/ui/Button';

interface SignUpProps {
  handleClose: () => void;
  setIsSignUpOpen: Dispatch<SetStateAction<boolean>>;
  setIsSignInOpen: Dispatch<SetStateAction<boolean>>;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const SignUp: FC<SignUpProps> = ({
  handleClose,
  setIsSignUpOpen,
  setIsSignInOpen,
  setIsLoggedIn,
}) => {
  const [isArtist, setIsArtist] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const onSubmit: SubmitHandler<FieldValues> = ({
    firstName,
    lastName,
    password,
    email,
    phone,
  }) => {
    submitHandler({ firstName, lastName, password, email, phone })
      .then(() => {
        setIsSignUpOpen(false);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRadioCheckbox = () => {
    setIsArtist(!isArtist);
  };

  const handlePopupClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  };

  const handleYet = () => {
    setIsSignUpOpen(false);
    setIsSignInOpen(true);
  };

  return (
    <Box sx={styles.overlay} onMouseDown={handleClose}>
      <Box
        component={'form'}
        sx={styles.container}
        onMouseDown={handlePopupClick}
        onSubmit={handleSubmit(onSubmit)}
        autoComplete='off'
      >
        <IconButton onMouseDown={handleClose} sx={styles.closeButton}>
          <CloseIcon />
        </IconButton>
        <Box sx={styles.headerContainer}>
          <Logo width={logoSize.width} height={logoSize.height} />
          <Typography sx={styles.title}>{title}</Typography>
        </Box>
        <Box sx={styles.inputsContainer}>
          <Box sx={styles.inputContainer}>
            <InputLabel
              sx={styles.inputLabel}
              htmlFor={inputsData.firstName.name}
            >
              {inputsData.firstName.label}
            </InputLabel>
            <OutlinedInput
              {...register(inputsData.firstName.name, {
                required: true,
                minLength: 2,
              })}
              sx={styles.input}
              id={inputsData.firstName.name}
              name={inputsData.firstName.name}
              error={errors?.firstName ? true : false}
            />
          </Box>
          <Box sx={styles.inputContainer}>
            <InputLabel
              sx={styles.inputLabel}
              htmlFor={inputsData.lastName.name}
            >
              {inputsData.lastName.label}
            </InputLabel>
            <OutlinedInput
              {...register(inputsData.lastName.name, {
                required: true,
                minLength: 2,
              })}
              sx={styles.input}
              id={inputsData.lastName.name}
              name={inputsData.lastName.name}
              error={errors?.lastName ? true : false}
            />
          </Box>
          <Box sx={styles.inputContainer}>
            <InputLabel sx={styles.inputLabel} htmlFor={inputsData.phone.name}>
              {inputsData.phone.label}
            </InputLabel>
            <OutlinedInput
              {...register(inputsData.phone.name, {
                required: true,
                pattern: phoneRegex,
              })}
              sx={styles.input}
              id={inputsData.phone.name}
              name={inputsData.phone.name}
              error={errors?.phone ? true : false}
            />
          </Box>
          <Box sx={styles.inputContainer}>
            <InputLabel sx={styles.inputLabel} htmlFor={inputsData.email.name}>
              {inputsData.email.label}
            </InputLabel>
            <OutlinedInput
              {...register(inputsData.email.name, {
                required: true,
                pattern: emailRegex,
              })}
              sx={styles.input}
              id={inputsData.email.name}
              placeholder={inputsData.email.placeHolder}
              name={inputsData.email.name}
              error={errors?.email ? true : false}
            />
          </Box>
          <Box sx={styles.inputContainer}>
            <InputLabel
              sx={styles.inputLabel}
              htmlFor={inputsData.password.name}
            >
              {inputsData.password.label}
            </InputLabel>
            <OutlinedInput
              {...register(inputsData.password.name, {
                required: true,
                pattern: passwordRegex,
              })}
              type={showPassword ? 'text' : 'password'}
              sx={styles.passwordInput}
              id={inputsData.password.name}
              name={inputsData.password.name}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    sx={{ padding: '0' }}
                    onClick={handleShowPassword}
                    edge='end'
                  >
                    {showPassword ? <ShowIcon /> : <HideIcon />}
                  </IconButton>
                </InputAdornment>
              }
              error={errors?.password ? true : false}
            />
          </Box>
          <Box sx={styles.inputContainer}>
            <InputLabel
              sx={styles.inputLabel}
              htmlFor={inputsData.confirmPassword.name}
            >
              {inputsData.confirmPassword.label}
            </InputLabel>
            <OutlinedInput
              {...register(inputsData.confirmPassword.name, {
                required: true,
                validate: (v) => watch(inputsData.password.name) === v,
              })}
              type={showConfirmPassword ? 'text' : 'password'}
              sx={styles.passwordInput}
              id={inputsData.confirmPassword.name}
              name={inputsData.confirmPassword.name}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    sx={{ padding: '0' }}
                    onClick={handleShowConfirmPassword}
                    edge='end'
                  >
                    {showConfirmPassword ? <ShowIcon /> : <HideIcon />}
                  </IconButton>
                </InputAdornment>
              }
              error={errors?.confirmPassword ? true : false}
            />
          </Box>
        </Box>
        <Box sx={styles.radioCheckboxes}>
          <Typography sx={styles.radioCheckboxesTitle}>
            {radioCheckboxesTitle}
          </Typography>
          <Box sx={styles.radioCheckboxesContainer}>
            <FormControlLabel
              onChange={handleRadioCheckbox}
              sx={styles.radioCheckboxLabel}
              control={
                <Checkbox
                  checked={isArtist ? true : false}
                  color='secondary'
                  sx={styles.radioCheckbox}
                />
              }
              label={radioCheckboxYes}
            />
            <FormControlLabel
              onChange={handleRadioCheckbox}
              sx={styles.radioCheckboxLabel}
              control={
                <Checkbox
                  checked={isArtist ? false : true}
                  color='secondary'
                  sx={styles.radioCheckbox}
                />
              }
              label={radioCheckboxNo}
            />
          </Box>
        </Box>
        <FormControlLabel
          sx={styles.checkboxLabel}
          control={<Checkbox required color='secondary' sx={styles.checkbox} />}
          label={checkboxText}
        />
        <Box sx={styles.buttonsContainer}>
          <Button
            text={signUpButton.text}
            bgColor={signUpButton.bgColor}
            padding={signUpButton.padding}
            fontSize={signUpButton.fontSize}
            lineHeight={signUpButton.lineHeight}
            width={signUpButton.width}
            color={signUpButton.color}
            type='submit'
          />
          <Typography sx={styles.or}>{orText}</Typography>
          <Button
            text={appleButton.text}
            bgColor={appleButton.bgColor}
            padding={appleButton.padding}
            fontSize={appleButton.fontSize}
            lineHeight={appleButton.lineHeight}
            width={appleButton.width}
            color={appleButton.color}
            borderColor={appleButton.borderColor}
            SvgIcon={AppleIcon}
          />
          <Button
            text={googleButton.text}
            bgColor={googleButton.bgColor}
            padding={googleButton.padding}
            fontSize={googleButton.fontSize}
            lineHeight={googleButton.lineHeight}
            width={googleButton.width}
            color={googleButton.color}
            borderColor={googleButton.borderColor}
            SvgIcon={GoogleIcon}
          />
          <Typography sx={styles.yetFirst}>
            {yetFirstPart}
            <Typography
              onClick={handleYet}
              component='span'
              sx={styles.yetSecond}
            >
              {yetSecondPart}
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
