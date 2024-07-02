import { Dispatch, FC, SetStateAction, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { submitHandler } from './lib/utils';

import {
  Box,
  IconButton,
  InputLabel,
  OutlinedInput,
  Typography,
  InputAdornment,
} from '@mui/material';
import {
  logoSize,
  title,
  signInButton,
  orText,
  appleButton,
  googleButton,
  yetFirstPart,
  yetSecondPart,
  inputsData,
  emailRegex,
  passwordRegex,
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

const SignIn: FC<SignUpProps> = ({
  handleClose,
  setIsSignUpOpen,
  setIsSignInOpen,
  setIsLoggedIn,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleYet = () => {
    setIsSignUpOpen(true);
    setIsSignInOpen(false);
  };

  const onSubmit: SubmitHandler<FieldValues> = ({ email, password }) => {
    submitHandler({ email, password })
      .then(() => {
        setIsSignInOpen(false);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePopupClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  };

  return (
    <Box sx={styles.overlay} onMouseDown={handleClose}>
      <Box
        component={'form'}
        sx={styles.container}
        onMouseDown={handlePopupClick}
        onSubmit={handleSubmit(onSubmit)}
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
                    onClick={handleClickShowPassword}
                    edge='end'
                  >
                    {showPassword ? <ShowIcon /> : <HideIcon />}
                  </IconButton>
                </InputAdornment>
              }
              error={errors?.password ? true : false}
            />
          </Box>
        </Box>
        <Box sx={styles.buttonsContainer}>
          <Button
            text={signInButton.text}
            bgColor={signInButton.bgColor}
            padding={signInButton.padding}
            fontSize={signInButton.fontSize}
            lineHeight={signInButton.lineHeight}
            width={signInButton.width}
            color={signInButton.color}
            type={'submit'}
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

export default SignIn;
